interface Dictionary {
    license: License;
    meanings: Meaning[];
    word: string;
    phonetics: Phonetic[];
    sourceUrls: string[];
}

interface License {
    name: string;
    url: string;
}

interface Meaning {
    partOfSpeech: string;
    definitions: Definition[];
    synonyms: string[];
    antonyms: string[];
}

interface Phonetic {
    audio: string;
    sourceUrl: string;
    license: License;
    text: string;
}

interface Definition {
    definition: string;
    synonyms: string[];
    antonyms: string[];
    example: string;
}





