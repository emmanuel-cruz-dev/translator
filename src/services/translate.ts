import { Configuration, OpenAIApi } from "openai";
import { SUPPORTED_LANGUAGES } from "../constants/constants";
import { FromLanguage, Language } from "../types.d";

const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

const configuration = new Configuration({ apiKey });
const openai = new OpenAIApi(configuration);

export async function tranlate({
  fromLanguage,
  toLanguage,
  text,
}: {
  fromLanguage: FromLanguage;
  toLanguage: Language;
  text: string;
}) {
  console.log(openai);

  const messages = [
    {
      role: "system",
      content:
        "You are a AI that translates text. You receive a text from the user. Do not answer, just translate the text. The original language is surrounded by `{{` and `}}`. You can also receive {{auto}} which means that you have to detect the language. You can translate to any language. The language you translate to is surrounded by `[[` and `]]`.",
    },
  ];
}
