
import { GoogleGenAI, Type } from "@google/genai";

const API_KEY = process.env.API_KEY || "";
const ai = new GoogleGenAI({ apiKey: API_KEY });

export async function getCarRecommendation(userPreference: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `User preference: ${userPreference}. Berikan rekomendasi tipe mobil (SUV, Sedan, Sport, atau Luxury) beserta alasannya dalam bahasa Indonesia yang persuasif.`,
      config: {
        thinkingConfig: { thinkingBudget: 0 }
      }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Maaf, kami sedang mengalami kendala teknis dalam memberikan rekomendasi.";
  }
}

export async function getDetailedCarDescription(carName: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Tulis deskripsi produk yang mewah dan menarik untuk mobil ${carName} dalam 3 paragraf pendek menggunakan Bahasa Indonesia.`,
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return null;
  }
}
