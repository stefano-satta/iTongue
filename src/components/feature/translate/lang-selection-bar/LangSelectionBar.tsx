import { Box, HStack } from "@chakra-ui/react";
import { useCallback, useEffect, useMemo, useState } from "react";
import SelectForm, { Option } from "../../../common/forms/select/SelectForm";

interface ILangSelectionBarProps {
  langsList: Language[];
  onChangeLangEvt: (langs: {fromLang: string, toLang: string}) => void;
}

const LangSelectionBar = (props: ILangSelectionBarProps) => {
  const { langsList, onChangeLangEvt } = props;
  const [langs, setLang] = useState<{fromLang?: string, toLang?: string}>({fromLang: '', toLang: ''});
  const langOptions: Option[] = useMemo(() => {
    return langsList.map((lang) => {
      return { label: lang.name, value: lang.code };
    });
  }, [langsList]);

  useEffect(() => {
      console.log('useff');
      
    handleOnchange();
  }, [langs])

  const handleOnchange = () => {
      console.log('cambiato lingua ', langs);
      
    langs.fromLang && langs.toLang && onChangeLangEvt?.({fromLang: langs?.fromLang, toLang: langs?.toLang});
  }

  return (
    <HStack  display="flex" justifyContent="center" className="my-10">
      <Box display="flex" alignItems="center" className="mr-15">
        <span className="mr-5">From: </span>
        <SelectForm optionsData={langOptions} placeholder="Select language" onChangeEvt={e => setLang({...langs, fromLang: e ?? ''})}></SelectForm>
      </Box>
      <Box display="flex" alignItems="center">
        <span className="mr-5">To:</span>
        <SelectForm optionsData={langOptions} placeholder="Select language" onChangeEvt={e => setLang({...langs, toLang: e ?? ''})}></SelectForm>
      </Box>
    </HStack>
  );
};

export default LangSelectionBar;
