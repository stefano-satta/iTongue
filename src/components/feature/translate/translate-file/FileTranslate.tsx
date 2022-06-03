import { Box, Button, Heading } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import useFetch from "../../../../hooks/useFetch";
import InputForm from "../../../common/forms/input/InputForm";

interface IFileTranslateProps {
  langFrom: string;
  langTo: string;
}


const FileTranslate = (props: IFileTranslateProps) => {
  const {langFrom, langTo} = props;
  const {register, handleSubmit, formState} = useForm({mode: 'onChange'});
  const {data, setData, error, setError, isLoading, setLoading} = useFetch<unknown>();

  console.log('ft ', langFrom, langTo);
  


  const handleOnSubmit = (data: unknown) => {
    console.log(data)
  }



  return (
      <Box w="100%" p={4} textAlign="center">
        <Heading as='h3' className="mb-5">Seleziona un documento</Heading>
        <form onSubmit={handleSubmit(handleOnSubmit)}>
          <InputForm type="file" 
            variant="unstyled" 
            width="auto" 
            register={register} 
            formControlName="file"/>
          <div className="mt-10">
            <Button type="submit" bg={'var(--color-primary)'} color={'var(--color-white)'}>
              Translate
            </Button>
          </div>
        </form>
        
      </Box>
  );
};

export default FileTranslate;
