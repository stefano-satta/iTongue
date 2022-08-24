import React, {useEffect, useId, useState} from "react";
import Phonetic from "./Phonetic";
import {capitalize} from "../../../utils/utility";

interface PhoneticsProps {
    word: string;
    data: Phonetic[];
}


const Phonetics = ({word, data}: PhoneticsProps) => {
    const phoneticId = useId();
    
    return (
        <div className="border drop-shadow-md rounded-lg p-10 bg-white">
            <h1 className="mb-4 font-bold text-4xl">{capitalize(word)}</h1>
            {
                data.map( (phonetic, index) => (
                    <Phonetic data={phonetic} key={`${phoneticId}-${index}`}/>
                ))
            }
        </div>
    )
}

export default Phonetics;