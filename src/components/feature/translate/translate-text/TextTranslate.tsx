import { Alert, AlertIcon, Box, Center, Divider, Flex, HStack, Spinner, Stack, StackDivider, useBreakpointValue } from "@chakra-ui/react";
import useFetch from "../../../../hooks/useFetch";
import { getTextTranslation } from "../../../../utils/api";
import TextAreaForm from "../../../common/forms/textarea/TextAreaForm";
import { AxiosError } from "axios";


const TextTranslate = (props: ITranslateProps) => {
  const { langFrom, langTo } = props;
  const {data, setData, error, setError, isLoading, setLoading} = useFetch<ITextTranslationResponse>();

  const getTranslation = (text: string) => {
    console.log(text);

    const formData: FormData = new FormData();
      formData.append('q', text);
      formData.append('source', langFrom);
      formData.append('target', langTo);
      formData.append('format', 'text');
      setError(null);
      setLoading(true);
      getTextTranslation(formData)
        .then((res: ITextTranslationResponse) => setData(res))
        .catch((error: AxiosError) => setError(error.response?.data))
        .finally(() => setLoading(false))
    
  }

  return (
      <>
        <Stack direction={{ base: "column", md: "row" }} className="mb-10" shadow='md' borderWidth='1px' borderRadius="10px" minHeight={{sm: '300px', md: '200px'}}>
        {/* divider={<StackDivider borderColor='gray.200' marginInlineStart={'0'} marginInlineEnd={'0'}/>}     */}
            <Box w={{base: '100%', md: '50%'}}>
                <TextAreaForm onChangeEvt={() => {}} 
                    style={{border: 'none', margin: 0, padding: '10px', height: '100%', width: '100%'}} 
                    placeholder="Insert text here"/>
            </Box>
            <Center>
                <Divider variant={useBreakpointValue({xs: 'horizontal', md: 'vertical'})} />
            </Center>
            <Box w={{base: '100%', md: '50%'}} padding="10px" bg="grey.500" borderRadius="0 10px 10px 0">
                ss
                    { isLoading && <Spinner size='sm' />}
                    { data?.translatedText }
            </Box>
        </Stack>

        { error && 
            <Alert status='error' className="mt-15" textAlign="left">
                <AlertIcon />
                Please select languages and insert text. <br />
                { (error as ITextTranslationResponse).error}
            </Alert>
        }
      </>
  );
}

export default TextTranslate;
