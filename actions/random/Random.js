import {wordApi} from "../../api/Api";
import {buildWordFormat, showMessage} from "../../defaults/appConsts";

const random = async () => {
    const wordDictionary = await wordApi();
    const {word,def, ex, ant, syn} = wordDictionary;
    showMessage(buildWordFormat(word, def, ex, ant, syn));

};


export default random;