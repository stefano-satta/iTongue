import {Heading, Text} from "@chakra-ui/react";
import React, {useId} from "react";


interface DefinitionsProps {
    data: Definition[]
}

const Definitions = ({data}: DefinitionsProps) => {
    const definitionId = useId();

    return (<>
        <Heading fontSize='md' mt={5}>Definition:</Heading>
        {
            data.map((definition, index) => (
                <Text mb={3} pl={2} key={`${definitionId}-${index}`}>{definition.definition}</Text>
            ))
        }
    </>)
}

export default Definitions;