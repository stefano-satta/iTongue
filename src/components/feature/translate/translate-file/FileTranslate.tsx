import { AxiosError } from "axios";
import { Alert, Button } from "react-daisyui";
import { useForm } from "react-hook-form";
import useFetch from "../../../../hooks/useFetch";
import { fileTranslation } from "../../../../utils/api";
import InputForm from "../../../common/forms/input/InputForm";



const FileTranslate = (props: ITranslateProps) => {
  const {langFrom, langTo} = props;
  const {register, handleSubmit} = useForm({mode: 'onChange'});
  const {setData, error, setError, isLoading, setLoading} = useFetch<IFileTranslationResponse>();

  const handleOnSubmit = (data: any) => {
    console.log(data.file[0])
    setError(null);
    console.log('click vtn', langFrom, langTo, data)
    if (langFrom && langTo && data.file[0]) {
      setLoading(true);
      const formData: FormData = new FormData();
      formData.append('file', data.file[0]);
      formData.append('source', langFrom);
      formData.append('target', langTo);
      fileTranslation(formData)
        .then((res: IFileTranslationResponse) => {
          setData(res);
          downloadTranslationFile(res)
        })
        .catch((error: AxiosError) => setError(error.response?.data))
        .finally(() => setLoading(false))
    }
  }

  const downloadTranslationFile = (resp: IFileTranslationResponse) => {
    window.open( resp.translatedFileUrl, '_blank');
  }



  return (
    <div className="w-full p-6 text-center bg-white dark:bg-slate-800 rounded-lg shadow-lg">
      <>
        <h3 className="mb-2 text-2xl font-medium">Select a document</h3>
        <p className="text-md mb-8 text-grey">Accepted format file: .txt, .odt, .odp, .docx, .pptx</p>
        <form onSubmit={handleSubmit(handleOnSubmit)}>
            <InputForm type="file"
              className="border-none"
              register={register} 
              formControlName="file"
              accept=".txt, .odt, .odp, .docx, .pptx"/>
            <div className="mt-10">
              <Button type="submit" color="primary" loading={isLoading}>
                Translate
              </Button>
            </div>
        </form>

        { error && 
          <Alert status='error' className="mt-12 text-white">
            Please select languages and document. <br />
            { (error as IFileTranslationResponse).error}
          </Alert>
        }
      </>
    </div>
  );
};

export default FileTranslate;
