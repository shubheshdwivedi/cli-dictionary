import {buildWordFormat, showMessage} from "../../defaults/appConsts";
import {wordApi} from "../../api/Api";

const word = async (word) => {
    const wordDictionary = await wordApi(word);
    const {def, ex, ant, syn} = wordDictionary;
    showMessage(buildWordFormat(word, def, ex, ant, syn));
};

export default word;