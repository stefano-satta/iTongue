import {Box, Heading} from "@chakra-ui/react";
import React, {useId} from "react";
import Phonetic from "./Phonetic";
import {capitalize} from "../../../utils/utility";

interface PhoneticsProps {
    word: string;
    data: Phonetic[];
}


const Phonetics = ({word, data}: PhoneticsProps) => {
    const phoneticId = useId();

    return (
        <Box shadow='md' borderWidth='1px' borderRadius="10px" textAlign="left" padding="40px">
            <Heading fontSize='40px' mb={3}>{capitalize(word)}</Heading>
            {
                data.map( (phonetic, index) => (
                    <Phonetic data={phonetic} key={`${phoneticId}-${index}`}/>
                ))
            }
        </Box>
    )
}

export default Phonetics;