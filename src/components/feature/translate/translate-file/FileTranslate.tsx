import { Alert, AlertIcon, Box, Button, Heading } from "@chakra-ui/react";
import { AxiosError } from "axios";
import { useForm } from "react-hook-form";
import useFetch from "../../../../hooks/useFetch";
import { fileTranslation } from "../../../../utils/api";
import InputForm from "../../../common/forms/input/InputForm";
import { Text } from '@chakra-ui/react'



const FileTranslate = (props: ITranslateProps) => {
  const {langFrom, langTo} = props;
  const {register, handleSubmit, formState} = useForm({mode: 'onChange'});
  const {data, setData, error, setError, isLoading, setLoading} = useFetch<IFileTranslationResponse>();

  const handleOnSubmit = (data: any) => {
    console.log(data.file[0])
    setError(null);
    console.log('click vtn')
    if (langFrom && langTo && data) {
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
      <Box w="100%" p={4} textAlign="center">
        <>
        <Heading as='h3' className="mb-2">Select a document</Heading>
        <Text fontSize="md" color="gray" className="mb-10">Accepted format file: .txt, .odt, .odp, .docx, .pptx</Text>
        <form onSubmit={handleSubmit(handleOnSubmit)}>
          <InputForm type="file" 
            variant="unstyled" 
            width="auto" 
            register={register} 
            formControlName="file"
            accept=".txt, .odt, .odp, .docx, .pptx"/>
          <div className="mt-10">
            <Button isLoading={isLoading} type="submit" bg={'var(--color-primary)'} color={'var(--color-white)'}>
              Translate
            </Button>
          </div>
        </form>

        { error && 
          <Alert status='error' className="mt-15" textAlign="left">
            <AlertIcon />
            Please select languages and document. <br />
            { (error as IFileTranslationResponse).error}
          </Alert>
        }
        </>
      </Box>
  );
};

export default FileTranslate;
