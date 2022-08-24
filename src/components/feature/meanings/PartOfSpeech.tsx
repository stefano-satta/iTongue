import React from "react";
import {capitalize} from "../../../utils/utility";
import Definitions from "./Definitions";

interface PartOfSpeechProps {
    data: Meaning;
}


const PartOfSpeech = ({data}: PartOfSpeechProps) => {
    return (
        <div className="p-10 text-left">
            <h1 className="mb-4">{capitalize(data.partOfSpeech)}</h1>
            { data.synonyms.length > 0 && (<><h1>Synonyms:</h1><p>{data.synonyms?.join(', ')}</p></>)}
            { data.antonyms.length > 0 && (<><h1 className="mt-6">Antonyms:</h1><p className="pl-2">{data.antonyms?.join(', ')}</p></>)}
            <Definitions data={data.definitions}/>
        </div>
    )
}

export default PartOfSpeech;