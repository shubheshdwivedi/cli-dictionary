import {showMessage} from "../../defaults/appConsts";

const synonyms = (word) => {
    if(!word)
        return showMessage('Empty word string!')
};

export default synonyms;