
import { GoogleGenAI } from "@google/genai";

// Inizializzazione basata su variabili d'ambiente (configurate su Vercel)
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getPensionAdvice = async (query: string) => {
  const model = 'gemini-3-pro-preview';
  const systemInstruction = `
    Sei un assistente virtuale esperto per i consulenti del Gruppo Vomero (Zurich Bank Napoli). 
    Usa un tono professionale, tecnico e di alto profilo. 
    Hai accesso a informazioni sulla previdenza integrativa italiana, inclusi FPA, FPN e PIP.
    Novità Legge di Bilancio 2026 e dati Bollettino Statistico n. 96 Mefop.

    REGOLE FONDAMENTALI:
    1. Cita SEMPRE le fonti: "Bollettino Statistico Mefop n. 96", "Legge di Bilancio 2026", "COVIP".
    2. Focus sulle novità 2026:
       - Innalzamento deducibilità a 5.300€
       - Liquidazione fino al 60% in capitale
       - Portabilità del contributo datoriale verso PIP e FPA (Fondamentale per consulenti Zurich/Anima)
       - Meccanismo Silenzio-Assenso per i neo-assunti.
    
    Fornisci risposte concise, strutturate in punti e tecnicamente accurate.
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
    return "Errore nella comunicazione con l'esperto AI. Verifica la configurazione della chiave API.";
  }
};
