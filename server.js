// import { GoogleGenAI } from "@google/genai";
// import dotenv from "dotenv";
// dotenv.config();
// async function main(){
//     if(!process.env.GEMINI_API_KEY || !process.env.GEMINI_MODEL){
//         throw new Error("Check Gemini api key and Model in .env");

import { searchProperties } from "./src/tools.js";

        
//     }

//     const ai = new GoogleGenAI({ // gemini client create krnw
//         apiKey : process.env.GEMINI_API_KEY,
//     })

//     const response = await ai.models.generateContent({
//         model: process.env.GEMINI_MODEL,
//             contents: "Explain an AI agent in three simple sentences.",
//         // model ekt reqest ekak ywnw
//     })

//     console.log(response.text) // response ek execute krnw
// }

// main().catch((error)=>{
//     console.error("error",error.message)
//     process.exitCode = 1;
// })


const result = searchProperties({
  city: "Tokyo",
  maxRent: 80000,
});

console.log(JSON.stringify(result));