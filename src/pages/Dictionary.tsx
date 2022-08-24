import InputForm from "../components/common/forms/input/InputForm";
import {useForm} from "react-hook-form";
import {useState} from "react";
import {getWordMeaning} from "../utils/api";
import useFetch from "../hooks/useFetch";
import {AxiosError} from "axios";
import Meaning from "../components/feature/meanings/Meaning";
import Phonetics from "../components/feature/phonetics/Phonetics";
import NoResults from "../components/common/errors/NoResults";
import { Button } from "react-daisyui";

const Dictionary = () => {
    const {register} = useForm();
    const [wordToSearch, setWordToSearch] = useState<string>('');
    const {data, setData, error, setError, isLoading, setLoading} = useFetch<Dictionary[]>();

    const handleChangeWord = (word: string) => {
        setWordToSearch(word);
    }

    const getMeaning = () => {
        setError(null);
        setLoading(true);
        getWordMeaning(wordToSearch)
            .then((res: Dictionary[]) => {console.log(res) ;setData(res)})
            .catch((error: AxiosError) => setError(error.response?.data))
            .finally(() => setLoading(false))
    }

    return (
        <>
            <div className="grid sm:grid-cols-1 md:grid-cols-2">
                <div className="flex flex-col aligns-center justify-center w-full order-last md:order-first">
                    <div className="text-center md:text-left">
                        <h1 className="text-5xl font-bold mb-4">Get a quick, <br/> Free translation</h1>
                            <InputForm register={register} formControlName="prova" onChangeEvt={handleChangeWord} className="w-3/4 rounded-full" autoComplete={'false'} placeholder={'Insert a word'}/>
                            <Button loading={isLoading} onClick={getMeaning} color="primary" className="text-white w-1/4 rounded-full mt-2">Search</Button>
                    </div>
                </div>
                <div className="order-first md:order-last">
                    <img src='/dictionary-wall.png' className="object-cover"/>
                </div>
            </div>

            <div className="mt-6">
                {
                    error ? <NoResults title={(error as {title: string}).title} icon={null}/> : data ? (<>
                        <Phonetics word={data[0].word} data={data[0].phonetics}/>
                        <Meaning data={data[0].meanings}/>
                    </>) : null
                }
            </div>
        </>
    )
}

export default Dictionary;