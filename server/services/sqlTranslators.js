import { generateResponseFromOpenAI } from "server/openAI";

const fetchHumanToSqlQuery = (text, key, schema="") => {
  let query = `Translate this natural language into SQL:\n\n"${text}"\n\nSQL Query:`;

  if (schema) {
    query = `Translate this natural language into SQL:\n\n"${text}" with this schema \n\n "${schema}" \n\nSQL Query:`;
  }

  return generateResponseFromOpenAI(query, key)
}

const fetchSQLToHumanLang = (text, key) => {
  const query = `Translate this SQL query into natural language:\n\n"${text}"\n\nNatural language query:`;

  return generateResponseFromOpenAI(query, key);
}

export { fetchHumanToSqlQuery, fetchSQLToHumanLang };