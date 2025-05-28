import dotenv from 'dotenv';
import { writeFileSync } from 'fs';
import OpenAI from 'openai';

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

const models = ['gpt-3.5-turbo'];
const temperatures = [0.0, 0.7];
const maxTokensList = [50];
const presencePenalties = [0.0];
const frequencyPenalties = [0.0];

const systemPrompt = "You are a helpful assistant that writes creative product descriptions.";
const userPrompt = "Write a product description for a new generation running shoe.";
// const stopSequences = [ "for" ,"."]; 
const stopSequences = []; 
const results = [];

async function runTest() {
  for (const model of models) {
    for (const temperature of temperatures) {
      for (const max_tokens of maxTokensList) {
        for (const presence_penalty of presencePenalties) {
          for (const frequency_penalty of frequencyPenalties) {
            try {
              const response = await openai.chat.completions.create({
                model,
                messages: [
                  { role: 'system', content: systemPrompt },
                  { role: 'user', content: userPrompt }
                ],
                temperature,
                max_tokens,
                presence_penalty,
                frequency_penalty,
                stop: stopSequences.length ? stopSequences : undefined
              });

              const output = response.choices[0].message.content;

              results.push({
                model,
                temperature,
                max_tokens,
                presence_penalty,
                frequency_penalty,
                output
              });

              console.log(`✅ ${model} | Temp: ${temperature} | Max: ${max_tokens} | Out: ${output.slice(0, 60)}...`);
            } catch (err) {
              console.error(`❌ Error for ${model} Temp ${temperature}: ${err.message}`);
            }
          }
        }
      }
    }
  }

  writeFileSync('output.json', JSON.stringify(results, null, 2));
}

runTest();
