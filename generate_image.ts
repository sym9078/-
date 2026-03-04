import { GoogleGenAI } from "@google/genai";
import fs from "fs";

async function generateProfileImage() {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash-image',
    contents: {
      parts: [
        {
          text: 'A high-quality professional studio portrait of a Korean male marketer in his late 20s, wearing a modern dark suit, clean-cut, professional lighting, transparent background (pure white), no watermark, looking confident, high resolution, 4k.',
        },
      ],
    },
  });

  for (const part of response.candidates[0].content.parts) {
    if (part.inlineData) {
      const base64EncodeString = part.inlineData.data;
      const buffer = Buffer.from(base64EncodeString, 'base64');
      fs.writeFileSync('src/components/profile.png', buffer);
      console.log('Image generated and saved to src/components/profile.png');
      return;
    }
  }
  console.log('No image part found in response');
}

generateProfileImage().catch(console.error);
