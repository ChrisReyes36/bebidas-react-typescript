import { streamText } from "ai";
import { openRouter } from "../utils/ai";

export async function generateRecipe(prompt: string) {
  const result = streamText({
    model: openRouter("nex-agi/nex-n2-pro:free"),
    prompt,
    system:
      "Eres un bartender que tiene 20 años de experiencia y le sirvió una bebida James Bond",
    temperature: 1,
  });

  return result.textStream;
}
