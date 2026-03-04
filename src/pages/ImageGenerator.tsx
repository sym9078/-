import { useEffect, useState } from 'react';
import { GoogleGenAI } from "@google/genai";

export default function ImageGenerator() {
  const [status, setStatus] = useState('Ready');
  const [error, setError] = useState<string | null>(null);

  const generateImage = async () => {
    try {
      setStatus('Generating...');
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [
            {
              text: 'A high-quality professional studio portrait of a confident Korean male marketer in his late 20s, wearing a modern dark suit, clean-cut, professional lighting, pure white background (transparent style), no watermark, high resolution, 4k, subject is large and centered.',
            },
          ],
        },
      });

      let base64Image = '';
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          base64Image = `data:image/png;base64,${part.inlineData.data}`;
          break;
        }
      }

      if (!base64Image) {
        throw new Error('No image generated');
      }

      setStatus('Saving...');
      const saveResponse = await fetch('/api/save-profile-image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ image: base64Image }),
      });

      if (saveResponse.ok) {
        setStatus('Success! Image saved to src/components/profile.png');
      } else {
        throw new Error('Failed to save image to server');
      }
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'An error occurred');
      setStatus('Failed');
    }
  };

  return (
    <div className="pt-32 px-10 text-white">
      <h1 className="text-2xl mb-4">Profile Image Generator</h1>
      <p className="mb-4">Status: <span className="font-bold">{status}</span></p>
      {error && <p className="text-red-500 mb-4">Error: {error}</p>}
      <button 
        onClick={generateImage}
        className="bg-indigo-600 hover:bg-indigo-700 px-6 py-2 rounded-lg transition-colors"
      >
        Generate & Save Profile Image
      </button>
      <p className="mt-4 text-zinc-500 text-sm italic">
        * This will overwrite src/components/profile.png
      </p>
    </div>
  );
}
