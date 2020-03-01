import help from "./help";
import version from "./version";
import examples from "./examples";
import synonyms from "./synonyms";
import antonyms from "./antonyms";
import definition from "./definition";
import random from "./random";
import word from "./word";
import play from "./play";
import {showMessage} from "../defaults/appConsts";
import configApi from "./config/Config";

const actionReferenceMap = {
    'help': help,
    'config': configApi,
    'version': version,
    'ex': examples,
    'syn': synonyms,
    'ant': antonyms,
    'defn': definition,
};

const doAction = async (argsList) => {
    const cmd = argsList._[0];
    const wordValue = argsList._[1];
    try {
        if (cmd in actionReferenceMap) {
            const result = await actionReferenceMap[cmd](wordValue);
            showMessage(result)

        } else {
            if (!cmd) await random();
            else if (cmd === 'play') await play.init();
            else await word(cmd);
        }
    } catch
        (e) {
        showMessage(e.response.data.error);
    }

};

export default doAction;