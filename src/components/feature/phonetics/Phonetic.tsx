import React, { useEffect, useState, useMemo } from "react";
import { Tooltip } from "react-daisyui";
import AudioIcon from "../../common/icons/AudioIcon";

interface PhoneticProps {
    data: Phonetic; 
}


const Phonetic = ({data}: PhoneticProps) => {
    const [audioSourceUrl, setAudioSourceURL] = useState<string>('');
    const [onPlayAudio, setOnPlayAudio] = useState(false);
    const audioPlayer = useMemo(() => new Audio(audioSourceUrl), [audioSourceUrl]);

    const handleClickPlayAudio = (url: string) => {
        setAudioSourceURL(url);
        setOnPlayAudio(true);
    }

    useEffect(() => {
        audioPlayer.addEventListener('ended', () => {
            setOnPlayAudio(false);
            setAudioSourceURL('')
        });

        if (audioSourceUrl) {
            audioPlayer.play();
        }
        

        return () => {
            audioPlayer.removeEventListener('ended', () => {});
        }
    }, [audioSourceUrl, audioPlayer])

    return (
        <div className="text-left flex">
            { data.text && 
                <div className="mb-4 font-medium text-2xl flex justify-center items-center">
                    { data.text }
                    { data.audio && 
                        <span className="ml-4">
                            <Tooltip message="Play pronunciation">
                                { !onPlayAudio && <img src={process.env.PUBLIC_URL + '/play.png'} alt="play icon" className="w-5 cursor-pointer" onClick={() => handleClickPlayAudio(data.audio)}/>}
                                { onPlayAudio && <AudioIcon/> }
                            </Tooltip>
                        </span>
                    }
                    
                </div>
            }
        </div>
    )
}

export default Phonetic;