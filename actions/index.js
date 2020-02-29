import help from "./help";
import version from "./version";
import examples from "./examples";
import synonyms from "./synonyms";
import antonyms from "./antonyms";
import definition from "./definition";
import random from "./random";
import word from "./word";

const actionReferenceMap = {
    'help'        : help,
    'version'     : version,
    'ex'          : examples,
    'syn'         : synonyms,
    'ant'         : antonyms,
    'defn'        : definition,
};

const doAction = (argsList) => {
    const cmd  = argsList._[0];
    const wordValue = argsList._[1];
    if(cmd in actionReferenceMap)
        actionReferenceMap[cmd](wordValue);
    else {
        if(!cmd) random();
        else word(cmd);
    }

};

export default doAction;