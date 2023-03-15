import axios from "axios";

const defaultParams = {
    temperature: 0.5,
    max_tokens: 2048,
    top_p: 1.0,
    frequency_penalty: 0.5,
    presence_penalty: 0.5,
    stop: ["\n\n"],
    model: "text-davinci-003",
}

const generateResponseFromOpenAI = async (query, key, otherParams = {}) => {
  return axios.post("https://api.openai.com/v1/completions", {
    prompt: query,
    ...defaultParams,
    ...otherParams
  }, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${key}`,
    }
  })
}

export { defaultParams, generateResponseFromOpenAI };