import boxen from "boxen";
import gradient from "gradient-string";

export const APP_TITLE = "Dictionary";

export const showMessage = (msg) => {
    const boxenOptions = {
        padding: 1,
        margin: 1,
        borderStyle: "round",
        borderColor: "green",
    };
    const msgBox = boxen(gradient.vice.multiline(msg), boxenOptions);
    console.log(msgBox);
};
