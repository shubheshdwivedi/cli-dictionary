import {APP_TITLE, showMessage} from "../defaults/appConsts";
import minimist from 'minimist';
import showTitle from "../title/Title";
import doAction from "../actions";
import isUp from 'is-up';

const appEntryPoint = async (args) => {
    const argsList = minimist(args.slice(2));
    showTitle(APP_TITLE);
    try {
        await isUp('https://fourtytwowords.herokuapp.com');
        showMessage('Successfully connected to host: https://fourtytwowords.herokuapp.com\n' +
            'Type help to see available commands');
        await doAction(argsList);
    } catch (e) {
        showMessage('Could not connect to host: https://fourtytwowords.herokuapp.com');
        showMessage(e.response.data)
    }
};


export default appEntryPoint;