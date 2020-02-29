import {showMessage} from "../../defaults/appConsts";

const version = () => {
    const help = "VERSION"+
        "\n==================================================="+
        "\nv1.0.0 Beta";

    showMessage(help);

};

export default version;