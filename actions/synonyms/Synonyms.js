import {showMessage} from "../../defaults/appConsts";
import {synonymApi} from "../../api/Api";

const synonyms = async (word) => {
    if(!word)
        return showMessage('Empty word string!');

    const result = await synonymApi(word);
    return"\n\nSynonyms for "+
        word+
        "\n---------------------------------------------------------\n"+
        result.join('');

};

export default synonyms;