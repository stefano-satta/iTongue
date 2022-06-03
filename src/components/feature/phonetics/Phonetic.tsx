import {Box, Text} from "@chakra-ui/react";
import React from "react";

interface PhoneticProps {
    data: Phonetic;
}


const Phonetic = ({data}: PhoneticProps) => {
    return (
        <Box p={0} textAlign="left">
            {/*<Heading fontSize='xl'>{data}</Heading>*/}
            {data.text && <Text mb={3}>{data.text}</Text>}
            { data.audio && <></>}
        </Box>
    )
}

export default Phonetic;