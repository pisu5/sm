import db from "../databses";
import { callAIModel } from "./proshmaService";

interface IncomingMessage {
  channel: string;
  userId: string;
  text: string;
}

export async function handleIncomingMessage({
  channel,
  userId,
  text,
}: IncomingMessage) {
  // 1. Save incoming message
  const savedMessage = await db.message.create({
    data: { userId, channel, text, type: "user" },
  });

  // 2. Call AI
  const aiResponse = await callAIModel(text);

  // 3. Save AI response
  await db.message.create({
    data: { userId, channel, text: aiResponse, type: "bot" },
  });

  // 4. Return response back to API
  return aiResponse;
}
