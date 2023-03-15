import { generateResponseFromOpenAI } from "server/openAI";

const fetchExplainCodeData = (text, key, lang="Javascript") => {
  const query = `Explain me for this ${lang} code:\n\n"${text}"\n\nCode:`;

  return generateResponseFromOpenAI(query, key)
}

export { fetchExplainCodeData };