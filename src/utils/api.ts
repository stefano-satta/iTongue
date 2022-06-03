import axios from "axios";

const http = axios.create({});

const API_URL = {
    wordMeaning: 'https://api.dictionaryapi.dev/api/v2/entries/en/:word',
    languages: 'https://libretranslate.com/languages',
    file_translate: 'https://libretranslate.com/translate_file'
}

const buildApiUrl = (api: string, params?: {[key: string]: string}) => {
    if (params) {
        Object.keys(params).forEach(key => {
            console.log('chiave', key)
            api = api.replace(`:${key}`, params[key])
            console.log('api ', api)
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

export const fileTranslation = async (data: FormData) => {
    const url = buildApiUrl(API_URL.file_translate);
    const response = await http.post(url, data);
    return response.data;
}