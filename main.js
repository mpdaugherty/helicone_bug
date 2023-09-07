// Import the necessary modules
require('dotenv').config();
const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: "https://oai.hconeai.com/v1",
  defaultHeaders: {
    "Helicone-Auth": `Bearer ${process.env.HELICONE_API_KEY}`,
  },
});
async function getPrompt(input) {
  return `Translate the following English text to French: "${input}"`
}

// Define an async function to make API calls
async function callOpenAI() {
  let openaiResponse = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [{
      role: 'user',
      content: getPrompt("Hello, my name is John.")
    }]
  });

  console.log(openaiResponse.choices[0].message.content);
}

// Call the function
callOpenAI().catch(console.error);