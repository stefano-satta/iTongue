import { Box } from "@chakra-ui/react";
import React, {useId} from "react";
import PartOfSpeech from "./PartOfSpeech";

interface MeaningProps {
    data: Meaning[];
}


const Meaning = ({data}: MeaningProps) => {
    const meaningId = useId();

    return (
        <Box shadow='md' borderWidth='1px' borderRadius="10px">
            {
                data.map( (meaning, index) => (
                    <PartOfSpeech data={meaning} key={`${meaningId}-${index}`}/>
                ))
            }
        </Box>
    )
}

export default Meaning;