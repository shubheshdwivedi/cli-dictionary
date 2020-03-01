import dotenv from 'dotenv';
const envFile = dotenv.config();
if(!envFile)
    throw new Error("Env file not found!");
export default {
    apiKey: process.env.API_KEY
};