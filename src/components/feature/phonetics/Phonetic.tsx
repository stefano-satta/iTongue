import React from "react";

interface PhoneticProps {
    data: Phonetic;
}


const Phonetic = ({data}: PhoneticProps) => {
    return (
        <div className="text-left">
            {data.text && <p className="mb-4">{data.text}</p>}
            { data.audio && <></>}
        </div>
    )
}

export default Phonetic;