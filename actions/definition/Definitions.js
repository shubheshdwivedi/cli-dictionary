import {showMessage} from "../../defaults/appConsts";

const definition = (word) => {
    if(!word)
        return showMessage('Empty word string!')
};

export default definition;