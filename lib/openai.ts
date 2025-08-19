import OpenAI from 'openai';
import { ChatCompletionMessageParam } from 'openai/resources/chat';

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function getAIResponse(messages: ChatCompletionMessageParam[]) {
  try {
    const res = await openai.chat.completions.create({
      model: 'gpt-4o-mini', // Fast & affordable
      messages,
    });

    return res.choices[0].message;
  } catch (err) {
    console.error('❌ OpenAI error:', err);
    throw err;
  }
}
