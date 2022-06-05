type Language = {
    code: string;
    name: string;
}

interface IFileTranslationResponse {
    translatedFileUrl: string;
    error?: string;
}

interface ITranslateProps {
    langFrom: string;
    langTo: string;
}

interface ITextTranslationResponse {
    translatedText: string;
    error?: string;
}