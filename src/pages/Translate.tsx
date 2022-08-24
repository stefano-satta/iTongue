import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { Tabs } from "react-daisyui";
import LangSelectionBar from "../components/feature/translate/lang-selection-bar/LangSelectionBar";
import FileTranslate from "../components/feature/translate/translate-file/FileTranslate";
import TextTranslate from "../components/feature/translate/translate-text/TextTranslate";
import useFetch from "../hooks/useFetch";
import { getLanguages } from "../utils/api";

enum TabEnum {
  TXT = 'TXT',
  FILE = 'FILE'
}


const Translate = () => {
  const [tab, setTab] = useState<TabEnum>(TabEnum.FILE);
  const {data, setData, setError, setLoading} = useFetch<Language[]>();
  const [langSelected, setLangSelected] = useState<{fromLang: string, toLang: string}>({fromLang: '', toLang: ''});

  useEffect(() => {
    const getAllLanguages = () => {
      setError(null);
      setLoading(true);
      getLanguages()
          .then((res: Language[]) => setData(res))
          .catch((error: AxiosError) => setError(error.response?.data))
          .finally(() => setLoading(false))
    }
    getAllLanguages();
  }, [setData, setError, setLoading])

  const handleChangeLangs = (langs: {fromLang?: string, toLang?: string}) => {
    setLangSelected({...langSelected, ...langs})
  }

  const handleChangeTabs = (value: TabEnum) => {
    setTab(value);
  }

  return (
    <div className="py-5">
      <Tabs size="lg" boxed className="shadown-xl bg-transparent" onChange={handleChangeTabs}>
        <Tabs.Tab value="TXT" className={tab === TabEnum.TXT ? 'tab-active': ''}>Text</Tabs.Tab>
        <Tabs.Tab value="FILE" className={tab === TabEnum.FILE ? 'tab-active': ''}>File</Tabs.Tab>
      </Tabs>

      <LangSelectionBar langsList={data || []} onChangeLangEvt={handleChangeLangs}/>

      { tab === TabEnum.TXT &&  <TextTranslate langFrom={langSelected.fromLang} langTo={langSelected.toLang}/>}
      { tab === TabEnum.FILE && <FileTranslate langFrom={langSelected.fromLang} langTo={langSelected.toLang}/>}

    </div>
  );
};

export default Translate;
