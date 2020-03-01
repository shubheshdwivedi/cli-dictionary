import {showMessage} from "../../defaults/appConsts";
import {definitionApi} from "../../api/Api";

const definition = async (word) => {
    if (!word)
        return showMessage('Empty word string!');

    const result = await definitionApi(word);
    return "\nDefinitions for " +
        word +
        "\n---------------------------------------------------------\n" +
        result.join('');

};

export default definition;