import Tesseract from "tesseract.js";

export function generateRandomString(length: number) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }
  return result;
}

export const recognizeText = async (imageUrl: string): Promise<string> => {
  try {
    const {
      data: { text },
    } = await Tesseract.recognize(imageUrl, "eng", {
      logger: (m) => console.log(m), // Add logger here if you want to see the progress
    });
    console.log("InFun", text);
    return text.replace(/(\r\n|\n|\r)/gm, " "); // replace all the new line character with space
  } catch (err) {
    console.error(err);
    return "";
  }
};
