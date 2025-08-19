import axios from "axios";

export async function callAIModel(userMessage: string) {
  // Call your local Proshma model API
  const resp = await axios.post("http://localhost:8000/query", {
    prompt: userMessage
  });
  return resp.data.output;
}
