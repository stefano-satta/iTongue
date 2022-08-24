import React, {useId} from "react";
import PartOfSpeech from "./PartOfSpeech";

interface MeaningProps {
    data: Meaning[];
}


const Meaning = ({data}: MeaningProps) => {
    const meaningId = useId();

    return (
        <div className="border drop-shadow-md rounded-lg p-10 bg-white mt-6">
            {
                data.map( (meaning, index) => (
                    <PartOfSpeech data={meaning} key={`${meaningId}-${index}`}/>
                ))
            }
        </div>
    )
}

export default Meaning;