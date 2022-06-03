import {
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { AxiosError } from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import FileTranslate from "../components/feature/translate/translate-file/FileTranslate";
import useFetch from "../hooks/useFetch";
import { getLanguages } from "../utils/api";

const Translate = () => {
  const { register } = useForm();
  const {data, setData, error, setError, isLoading, setLoading} = useFetch<Language[]>();

  useEffect(() => {
    getAllLanguages();
  }, [])

  const getAllLanguages = () => {
    setError(null);
    setLoading(true);
    getLanguages()
        .then((res: Language[]) => setData(res))
        .catch((error: AxiosError) => setError(error.response?.data))
        .finally(() => setLoading(false))
  }

  return (
    <Container maxWidth={"container.xl"}>
      <Tabs variant="soft-rounded" colorScheme="green" align="start">
        <TabList>
          <Tab>Text</Tab>
          <Tab>Document</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <p>
              fdjfjfs sfsdjfcsjfsjdfljs fcjsflkjsdfjsòf sdfjksdjfdsjfljdsfj
              sdfjlsdjf sdòjflsdjf sdjfsjdfl jsdlfjsdlkfjsdl fjsdlòkfjcsdkfj
              csdkljfc sjdfsjdfkljsdfsdfjs fsjfkljsdfjsdkjflksdjfkljs
              ckdfjskldjfc klsdjflkcsjdfkljsdklfjsdkljfc lksdjf lksdjfcklsdjf
              cljsdf cjsdfkjcsdlfj sfjsjd fjsdklfjsdklfcjsdljf cslkfjsdlfjsd
              fvdsjfs jfsdkfjklsdjfoisjfdslf djfsòa
            </p>
          </TabPanel>
          <TabPanel>
            <FileTranslate/>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
};

export default Translate;
