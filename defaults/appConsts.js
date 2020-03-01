import boxen from "boxen";
import gradient from "gradient-string";
import Conf from "conf";

export const getConf = () => {
    return new Conf({
        projectName: "cli_dictionary",
        projectVersion: "1.0.0"
    });
};

const getApiKey = () => {
    const config = getConf();
    return config.get('api_key').response;
};

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


export const buildFormat = (example) => {
    if(example.length > 51) {
        return example.match(/.{1,51}/g).map((ex) => ex + "\n").join('');
    }
    return example;
};

export const buildWordFormat = (word, def, ex, ant, syn) => {
    return ("Word: "+
            word+
         "\n=========================================================\n\n"+
        "\nDefinitions for "+
        word+
        "\n---------------------------------------------------------\n"+
        def.join('')+
        "\nExamples for "+
        word+
        "\n---------------------------------------------------------\n"+
        ex.join('')+
        "\nSynonyms for "+
        word+
        "\n---------------------------------------------------------\n"+
        syn.join('')+
        "\nAntonyms for "+
        word+
        "\n---------------------------------------------------------\n"+
        ant.join('')
    );
};

export const buildUrl = (action) => 'https://fourtytwowords.herokuapp.com/'+action+'?api_key='+getApiKey()   ;