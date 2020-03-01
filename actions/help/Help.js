import {showMessage} from "../../defaults/appConsts";

const help = () => {
    const help = "HELP" +
        "\n==================================================="+
        "\nhelp - to see options"+
        "\nversion - to see version"+
        "\nconfig - to set api key"+
        "\n\nAPP COMMANDS"+
        "\n---------------------------------------------------"+
        "\nex <word> - show example usage of the word"+
        "\nsyn <word> - show synonyms of a word" +
        "\nant <word> - show antonyms of a word"+
        "\ndefn <word> - show definition of a word"+
        "\n<word> - show full dictionary of the word"+
        "\n<no arguments> - see a random word"+
        "\nplay - play word game";

    showMessage(help);

};

export default help;