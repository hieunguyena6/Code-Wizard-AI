import applyRateLimit from "app/utils/limiter";
import { fetchExplainCodeData } from "server/services/explainCode";

export default async function handler(req, res) {
  try {
    await applyRateLimit(req, res)
  } catch {
    res.status(429).json({message: "Too many requests"})
    return;
  }
  try {
    const { text } = req.body;
    const response = await fetchExplainCodeData(text, process.env.OPENAI_API_KEY);
    res.status(200).json({ data: response.data.choices[0]?.text?.trim() })
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    res.status(500).json({ message: error?.response?.statusText || "Something went wrong! Please try again later" })
  }
}