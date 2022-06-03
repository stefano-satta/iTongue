import {Box, Icon} from "@chakra-ui/react";
import React, {ReactNode} from "react";

interface NoResultsProps {
    title: string;
    icon?: ReactNode;
}

const NoResults = ({title, icon}: NoResultsProps) => {
    return (
        <Box shadow='md' borderWidth='1px'
             borderRadius="10px"
             textAlign="center"
             padding="40px"
             display={'flex'}
             flexDirection={'column'}
             alignContent={"center"}>
            <div>{icon}</div>
            <div className="mt-10">{title}</div>
        </Box>
    )
}

export default NoResults;