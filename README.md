# 🧠 Interactive Prompt Playground

This is a Node.js-based playground to explore how different OpenAI model parameters affect the output of a prompt that generates a product description. It runs across multiple combinations of parameters and logs all results in a single JSON file(output.json) for easy analysis.

---

## 🚀 How to Run the Playground

1.**Clone the Repository:**

git clone https://github.com/rasheed8123/interactive-prompt-playground.git

cd interactive-prompt-playground

--- 
2.**Install Dependencies:**


npm install

---

3.**Add Your OpenAI API Key:**

Create a .env file with the following contents:

OPENAI_API_KEY=your-api-key-here

--- 
4.**Run the Playground:**

node playground.js
The script will generate combinations of parameters and output results to output.json.

---
🛠 Features
Model Selection: gpt-3.5-turbo, gpt-4

1.Prompt Customization: Edit systemPrompt and userPrompt in playground.js

2.Parameter Control:

3.temperature: 0.0, 0.7, 1.2

4.max_tokens: 50, 150, 300

5.presence_penalty: 0.0, 1.5

6.frequency_penalty: 0.0, 1.5

7.Stop Sequences:  "."

---

Output: Saved to output.json with full configuration context for each result

---

📊 Sample Output Grid
Model	        Temp	Max   Tokens	Freq  Penalty	Presence Penalty	Output Snippet
gpt-3.5-turbo	0.0	    150	  0.0	    0.0	  "Introducing the next-gen running shoe, designed for..."
gpt-4	        0.7	    150	  0.0	    1.5	  "Say hello to your ultimate road companion: a running shoe..."
gpt-3.5-turbo	1.2	    300	  1.5	    1.5	  "Step into the future with shoes that think, adapt, and fly..."
gpt-4       	0.0	    50	  1.5	    0.0	  "A minimalist, responsive shoe for peak performance."

Note: Full outputs are available in output.json.

🧠 Reflection
Varying temperature had the most immediate impact on tone and creativity. At temperature=0.0, outputs were highly structured and deterministic — often repeating similar phrases across models and runs. As temperature increased to 1.2, the responses became more diverse, imaginative, and in some cases exaggerated, showcasing how temperature governs the randomness and novelty in the model's token choices.

The effects of presence and frequency penalties were subtler but meaningful. A high presence penalty encouraged the introduction of new vocabulary and reduced the reuse of earlier terms, making the responses feel more exploratory. Frequency penalty helped limit word repetition, especially in shorter outputs. Max token values directly influenced the depth and verbosity of the description. Overall, the interplay of these parameters highlights the delicate balance between control, creativity, and coherence in LLM-driven content generation.

