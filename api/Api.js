import axios from 'axios';
import {buildFormat, buildUrl} from "../defaults/appConsts";


export const api = async (url) => {
        await axios({
            method: 'get',
            url: url
        });
};

export const definitionApi = async (word) => {
    const response = await api(buildUrl('word/' + word + '/definitions'));
    return response.data.map((def, k) =>
        (k + 1) + ". " + buildFormat(def.text) + "\n");
};


export const exampleApi = async (word) => {
    const response = await api(buildUrl('word/' + word + '/examples'));
    return response.data.examples.map((def, k) =>
        (k + 1) + ". " + buildFormat(def.text) + "\n");
};

export const antonymApi = async (word) => {
    const response = await api(buildUrl('word/' + word + '/relatedWords'));
    const antonyms = response.data.find(o => o.relationshipType === 'antonym');
    return (antonyms) ? antonyms.words.map((def) => def + "\n") :
        ["No antonyms found for this word"];
};

export const synonymApi = async (word) => {
    const response = await api(buildUrl('word/' + word + '/relatedWords'));
    const synonyms = response.data.find(o => o.relationshipType === 'synonym');
    return (synonyms) ? synonyms.words.map((def) => def + "\n") :
        ["No synonyms found for this word"];
};
export const wordApi = async (word = '') => {
    const searchWord = (word === '') ? (await randomApi()).data.word : word;
    const [def, ex, ant, syn] = await Promise.all(
        [
            definitionApi(searchWord),
            exampleApi(searchWord),
            antonymApi(searchWord),
            synonymApi(searchWord)
        ]);
    return {
        word: searchWord,
        def: def,
        ex: ex,
        syn: syn,
        ant: ant
    }
};

export const randomApi = async () => await api(buildUrl('words/randomWord'));