import Configuration, {
  ChatCompletionRequestMessageRoleEnum,
  OpenAI,
} from "openai";
import { SUPPORTED_LANGUAGES } from "../constants/constants";
import { type FromLanguage, type Language } from "../types.d";

const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

const configuration = new Configuration({ apiKey });
const openai = new OpenAI(configuration);

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
      role: ChatCompletionRequestMessageRoleEnum.System,
      content:
        "You are an AI that translates text. You receive a text from the user. Do not answer, just translate the text. The original language is surrounded by `{{` and `}}`. You can also receive {{auto}} which means that you have to detect the language. You can translate to any language. The language you translate to is surrounded by `[[` and `]]`.",
    },
    {
      role: ChatCompletionRequestMessageRoleEnum.User,
      content: `Hola mundo {{Spanish}}} [[English]]`,
    },
    {
      role: ChatCompletionRequestMessageRoleEnum.Assistant,
      content: "Hello world",
    },
    {
      role: ChatCompletionRequestMessageRoleEnum.User,
      content: `How are you? {{auto}}} [[Deutsch]]`,
    },
    {
      role: ChatCompletionRequestMessageRoleEnum.Assistant,
      content: "Wie geht es dir?",
    },
    {
      role: ChatCompletionRequestMessageRoleEnum.User,
      content: `Bon dia, com estas? {{auto}}} [[Español]]`,
    },
    {
      role: ChatCompletionRequestMessageRoleEnum.Assistant,
      content: "Buenos días, ¿Cómo estás?",
    },
  ];

  const fromCode =
    fromLanguage === "auto" ? "auto" : SUPPORTED_LANGUAGES[fromLanguage];

  const toCode = SUPPORTED_LANGUAGES[toLanguage];

  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      ...messages,
      {
        role: ChatCompletionRequestMessageRoleEnum.User,
        content: `${text} {{${fromCode}}} [[${toCode}]]`,
      },
    ],
  });

  return completion.data.choices[0]?.message?.content;
}
