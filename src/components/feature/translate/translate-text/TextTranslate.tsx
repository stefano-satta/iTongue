import useFetch from "../../../../hooks/useFetch";
import { getTextTranslation } from "../../../../utils/api";
import TextAreaForm from "../../../common/forms/textarea/TextAreaForm";
import { AxiosError } from "axios";
import { useEffect, useState } from "react"
import Spinner from "../../../common/spinner/Spinner";


const TextTranslate = (props: ITranslateProps) => {
  const { langFrom, langTo } = props;
  const [textToSearch, setTextToSearch] = useState<string>('');
  const {data, setData, error, setError, isLoading, setLoading} = useFetch<ITextTranslationResponse>();
  let timer: ReturnType<typeof setTimeout>;

  useEffect(() => {
    clearTimeout(timer);
    getTranslation();
  }, [langFrom, langTo, textToSearch])
  

  const getTranslation = () => {
    if (langFrom && langTo && textToSearch) {
      timer = setTimeout(() => {
        setError(null);
        setLoading(true);
        setData(undefined);
    
        const formData: FormData = new FormData();
          formData.append('q', textToSearch);
          formData.append('source', langFrom);
          formData.append('target', langTo);
          formData.append('format', 'text');
          
          getTextTranslation(formData)
            .then((res: ITextTranslationResponse) => setData(res))
            .catch((error: AxiosError) => setError(error.response?.data))
            .finally(() => setLoading(false))
      }, 2000);

      
    }
  }

  return (
    <div className="w-full text-center bg-white dark:bg-slate-800 rounded-lg shadow-lg" style={{minHeight: '350px'}}>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 divide-x h-min" style={{minHeight: '350px'}}>
        <div className="h-full">
          <TextAreaForm onChangeEvt={setTextToSearch}
                      className="h-full w-full p-4 border-none m-0"
                      placeholder="Insert text here"/>
        </div>
        <div className="text-left p-3">
          { isLoading && <Spinner/>}
          { data?.translatedText }
        </div>
      </div>
    </div>

        // { error && 
        //     <Alert status='error' className="mt-15" textAlign="left">
        //         <AlertIcon />
        //         Please select languages and insert text. <br />
        //         { (error as ITextTranslationResponse).error}
        //     </Alert>
        // }
  );
}

export default TextTranslate;
