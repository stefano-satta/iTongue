import {useState} from "react";


const useFetch = <T>() => {
    const [data, setData] = useState<T>();
    const [error, setError] = useState<unknown>();
    const [isLoading, setLoading] = useState<boolean>(false);

    return {data, setData, error, setError, isLoading, setLoading};
}

export default useFetch;