import {showMessage} from "../../defaults/appConsts";
import {antonymApi} from "../../api/Api";

const antonyms = async (word) => {
    if(!word)
        return showMessage('Empty word string!');

    const result = await antonymApi(word);
    return "\nAntonyms for "+
        word+
        "\n---------------------------------------------------------\n"+
        result.join('');

};

export default antonyms;