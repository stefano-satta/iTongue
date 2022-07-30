import axios from "axios";

const http = axios.create({});
const BASE_URL = 'https://libretranslate.de';
const API_URL = {
    wordMeaning: `${BASE_URL}/api/v2/entries/en/:word`,
    languages: `${BASE_URL}/languages`,
    file_translate: `${BASE_URL}/translate_file`,
    text_translation: `${BASE_URL}/translate`
}

const buildApiUrl = (api: string, params?: {[key: string]: string}) => {
    if (params) {
        Object.keys(params).forEach(key => {
            api = api.replace(`:${key}`, params[key])
            console.log('api request --> ', api)
        });
    }
    return api;
}


export const getWordMeaning = async (word: string): Promise<Dictionary[]> => {
    const url = buildApiUrl(API_URL.wordMeaning, {word})
    console.log('url finale ',url)
    const response = await http.get<Dictionary[]>(url);
    return response.data;
}

export const getLanguages = async (): Promise<Language[]> => {
    const url  = buildApiUrl(API_URL.languages);
    const response = await http.get<Language[]>(url);
    return response.data;
}

export const fileTranslation = async (data: FormData): Promise<IFileTranslationResponse> => {
    const url = buildApiUrl(API_URL.file_translate);
    const headers = {'content-type': 'multipart/form-data'};
    const response = await http.post<IFileTranslationResponse>(url, data, {headers});
    return response.data;
}

export const getTextTranslation = async (data: FormData): Promise<ITextTranslationResponse> => {
    const url = buildApiUrl(API_URL.text_translation);
    const response = await http.post<ITextTranslationResponse>(url, data);
    return response.data;
}