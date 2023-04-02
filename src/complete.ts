import { Configuration, OpenAIApi } from "openai";
import * as dotenv from 'dotenv'
dotenv.config()

const configuration = new Configuration({
    apiKey: process.env.OPENAI_KEY,
});
const openai = new OpenAIApi(configuration);

console.log("OpenAI API Key: " + process.env.OPENAI_KEY);

//create async arrow function called completion
const completion = async (prompt: string) => {
    //create a variable called response and set it equal to the result of the following function
    const response = await openai.createChatCompletion({
        //set the model to gpt-3.5-turbo (ChatGPT)
        model: "gpt-3.5-turbo",
        messages: [
            { "role": "system", "content": "You are a helpful assistant." },
            { "role": "user", "content": prompt }
        ]
    });
    //return the response
    return response;
};

//export the completion function
export { completion }