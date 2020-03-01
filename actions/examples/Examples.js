import {showMessage} from "../../defaults/appConsts";
import {exampleApi} from "../../api/Api";

const examples = async (word) => {
    if (!word)
        return showMessage('Empty word string!');

    const result = await exampleApi(word);
    return "\nExamples for " +
        word +
        "\n---------------------------------------------------------\n" +
        result.join('');

};

export default examples;