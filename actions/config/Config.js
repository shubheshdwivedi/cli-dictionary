import inquirer from "inquirer";
import {getConf} from "../../defaults/appConsts";

const apiKey = () => {
    return inquirer
        .prompt([
            {
                name: 'response',
                message: 'Enter the api key: ',
                validate: value => (value === '') ? 'That\'s not a valid api key' :
                    true
            },
        ])
};

const configApi = async () => {
    const config = getConf();
    const key = await apiKey();
    config.set('api_key', key);
    return "Api key set!"
};

export default configApi;