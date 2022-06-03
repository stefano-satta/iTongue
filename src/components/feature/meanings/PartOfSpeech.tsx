import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import {capitalize} from "../../../utils/utility";
import Definitions from "./Definitions";

interface PartOfSpeechProps {
    data: Meaning;
}


const PartOfSpeech = ({data}: PartOfSpeechProps) => {
    return (
        <Box p={10} textAlign="left">
            <Heading fontSize='lg' mb={3}>{capitalize(data.partOfSpeech)}</Heading>
            { data.synonyms.length > 0 && (<><Heading fontSize='md' mt={5}>Synonyms:</Heading><Text pl={2}>{data.synonyms?.join(', ')}</Text></>)}
            { data.antonyms.length > 0 && (<><Heading fontSize='md' mt={5}>Antonyms:</Heading><Text pl={2}>{data.antonyms?.join(', ')}</Text></>)}
            <Definitions data={data.definitions}/>
        </Box>
    )
}

export default PartOfSpeech;