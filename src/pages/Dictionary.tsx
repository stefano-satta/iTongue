import { Box, SimpleGrid, Text, Image, Button } from "@chakra-ui/react";
import InputForm from "../components/common/forms/input/InputForm";
import {useForm} from "react-hook-form";
import {useState} from "react";
import {getWordMeaning} from "../utils/api";
import useFetch from "../hooks/useFetch";
import {AxiosError} from "axios";
import Meaning from "../components/feature/meanings/Meaning";
import Phonetics from "../components/feature/phonetics/Phonetics";
import NoResults from "../components/common/errors/NoResults";
import {WarningIcon} from "@chakra-ui/icons";

const Dictionary = () => {
    const {register} = useForm();
    const [wordToSearch, setWordToSearch] = useState<string>('');
    const {data, setData, error, setError, isLoading, setLoading} = useFetch<Dictionary[]>();

    const handleChangeWord = (word: string) => {
        setWordToSearch(word);
    }

    const getMeaning = () => {
        setError(null);
        console.log('click vtn', wordToSearch)
        setLoading(true);
        getWordMeaning(wordToSearch)
            .then((res: Dictionary[]) => setData(res))
            .catch((error: AxiosError) => setError(error.response?.data))
            .finally(() => setLoading(false))
    }

    return (
        <>
            <SimpleGrid columns={{sm: 1, lg:2}} spacing={1}>
                <Box display="flex" flexDirection="column" justifyContent="center" >
                    <div>
                        <Text fontSize='5xl' align='left' fontWeight='bold' className="pb-10">Get a quick, <br /> Free translation</Text>
                        <div className="d-flex flex-column align-content-start pr-10">
                            <InputForm register={register} formControlName="prova" onChangeEvt={handleChangeWord}/>
                            <Button isLoading={isLoading} onClick={getMeaning} className="mt-5" >Search</Button>
                        </div>

                    </div>

                </Box>
                <Box display="flex" flexDirection="column" justifyContent="center" >
                    <Image src='/dictionary-wall.png' objectFit='cover'/>
                </Box>
            </SimpleGrid>


            <SimpleGrid columns={{sm: 1}} spacing={10} marginTop={'100px'}>
                { error ? <NoResults title={(error as {title: string}).title} icon={<WarningIcon w={6} h={6}/>}/> : data ? (<>
                    <Phonetics word={data[0].word} data={data[0].phonetics}/>
                    <Meaning data={data[0].meanings}/>
                </>) : null}
            </SimpleGrid>
        </>
    )
}

export default Dictionary;