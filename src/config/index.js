import dotenv from 'dotenv';


const envFound = dotenv.config();
if (!envFound) {
    throw new Error("⚠️  Couldn't find .env file  ⚠️");
}
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    // aApiKey: process.env.ALAN_API_KEY,
    
};
