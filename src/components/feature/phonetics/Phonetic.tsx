import React, { useEffect, useState } from "react";
import { Tooltip } from "react-daisyui";

interface PhoneticProps {
    data: Phonetic; 
}


const Phonetic = ({data}: PhoneticProps) => {
    const [audioSourceUrl, setAudioSourceURL] = useState(new Audio(''));

    const handleClickPlayAudio = (url: string) => {
        setAudioSourceURL(new Audio(url));
    }

    useEffect(() => {
        console.log('audio ', audioSourceUrl);
        audioSourceUrl.play();
    }, [audioSourceUrl])

    return (
        <div className="text-left flex">
            { data.text && 
                <div className="mb-4 font-medium text-2xl flex justify-center items-center">
                    {data.text}
                    { data.audio && 
                        <span className="ml-4">
                            <Tooltip message="Play pronunciation">
                                <img src="/play.png" alt="play icon" className="w-5 cursor-pointer" onClick={() => handleClickPlayAudio(data.audio)}/>
                            </Tooltip>
                        </span>
                    }
                </div>
            }
        </div>
    )
}

export default Phonetic;