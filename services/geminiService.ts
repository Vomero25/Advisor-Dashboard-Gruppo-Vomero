
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getPensionAdvice = async (query: string) => {
  const model = 'gemini-3-pro-preview';
  const systemInstruction = `
    Sei un assistente virtuale esperto per i consulenti del Gruppo Vomero. 
    Usa un tono professionale, tecnico e rassicurante. 
    Hai accesso a informazioni sulla previdenza integrativa italiana, inclusi FPA, FPN e PIP.
    In particolare conosci le novità della Legge di Bilancio 2026 e i dati del Bollettino Statistico n. 96 (Luglio 2025).

    REGOLE FONDAMENTALI:
    1. Cita SEMPRE la fonte delle informazioni che fornisci (es. "Secondo il Bollettino Statistico n. 96..." o "Come previsto dalla bozza della Legge di Bilancio 2026...").
    2. Se parli di rendimenti, specifica che derivano dai rendiconti ufficiali 2024.
    3. Focalizzati sulle novità 2026:
       - Innalzamento deducibilità a 5.300€
       - Liquidazione fino al 60% in capitale
       - Portabilità del contributo datoriale verso PIP e FPA
       - Sistema "Life Cycle" per le adesioni tacite.
    
    Fornisci risposte concise e strutturate.
  `;

  try {
    const response = await ai.models.generateContent({
      model,
      contents: query,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });
    return response.text || "Mi dispiace, non riesco a rispondere al momento.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Errore nella comunicazione con l'esperto AI.";
  }
};
