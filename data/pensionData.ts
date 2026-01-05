
import { PensionLine, PensionType, LineCategory } from '../types';

export const PENSION_DATA: PensionLine[] = [
  // --- ALLEANZA ASSICURAZIONI (Pag. 1 PDF 1) ---
  { id: 'all-1', provider: 'Alleanza Assicurazioni', productName: 'Alleata Previdenza', lineName: 'Alleata Garantita', type: PensionType.PIP, category: LineCategory.GAR, return2024: 1.59, return3y: 1.36, return5y: 1.29, return10y: 1.54, isc10y: 1.90 },
  { id: 'all-2', provider: 'Alleanza Assicurazioni', productName: 'Alleata Previdenza', lineName: 'Alleata Bilanciata', type: PensionType.PIP, category: LineCategory.BIL, return2024: 7.87, return3y: 0.30, return5y: 2.29, return10y: 1.94, isc10y: 2.10 },
  { id: 'all-3', provider: 'Alleanza Assicurazioni', productName: 'Alleata Previdenza', lineName: 'Alleata Azionaria', type: PensionType.PIP, category: LineCategory.AZN, return2024: 11.66, return3y: 2.25, return5y: 5.00, return10y: 3.88, isc10y: 2.40 },

  // --- ALLIANZ GLOBAL LIFE (Moneyfarm - Pag. 1 PDF 1) ---
  { id: 'agl-1', provider: 'Allianz Global Life', productName: 'Moneyfarm PIP', lineName: 'MFM Linea Prudente', type: PensionType.PIP, category: LineCategory.BIL, return2024: 2.39, return3y: -1.89, return5y: -0.03, return10y: 0, isc10y: 1.25 },
  { id: 'agl-2', provider: 'Allianz Global Life', productName: 'Moneyfarm PIP', lineName: 'MFM Linea Moderata', type: PensionType.PIP, category: LineCategory.BIL, return2024: 5.18, return3y: -1.58, return5y: 1.93, return10y: 0, isc10y: 1.25 },
  { id: 'agl-3', provider: 'Allianz Global Life', productName: 'Moneyfarm PIP', lineName: 'MFM Linea Bilanciata', type: PensionType.PIP, category: LineCategory.BIL, return2024: 8.15, return3y: -0.12, return5y: 3.84, return10y: 0, isc10y: 1.25 },
  { id: 'agl-4', provider: 'Allianz Global Life', productName: 'Moneyfarm PIP', lineName: 'MFM Linea Orizzonte', type: PensionType.PIP, category: LineCategory.BIL, return2024: 10.08, return3y: 0.37, return5y: 5.17, return10y: 0, isc10y: 1.25 },
  { id: 'agl-5', provider: 'Allianz Global Life', productName: 'Moneyfarm PIP', lineName: 'MFM Linea Futuro', type: PensionType.PIP, category: LineCategory.BIL, return2024: 11.44, return3y: 0.76, return5y: 5.92, return10y: 0, isc10y: 1.25 },
  { id: 'agl-6', provider: 'Allianz Global Life', productName: 'Moneyfarm PIP', lineName: 'MFM Linea Azionaria', type: PensionType.PIP, category: LineCategory.BIL, return2024: 12.83, return3y: 0.88, return5y: 8.35, return10y: 0, isc10y: 1.25 },

  // --- ALLIANZ S.P.A. (Pag. 1 PDF 1) ---
  { id: 'alz-1', provider: 'Allianz S.P.A.', productName: 'Elios Previdenza', lineName: 'Fondo Attivo 2007', type: PensionType.PIP, category: LineCategory.BIL, return2024: 6.44, return3y: 3.26, return5y: 2.55, return10y: 2.16, isc10y: 2.05 },
  { id: 'alz-2', provider: 'Allianz S.P.A.', productName: 'Orizzonte Previdenza', lineName: 'Formula Attiva', type: PensionType.PIP, category: LineCategory.BIL, return2024: 10.62, return3y: 1.17, return5y: 2.94, return10y: 2.52, isc10y: 2.35 },
  { id: 'alz-3', provider: 'Allianz S.P.A.', productName: 'Orizzonte Previdenza', lineName: 'Azionario Globale', type: PensionType.PIP, category: LineCategory.AZN, return2024: 13.80, return3y: 2.24, return5y: 0, return10y: 0, isc10y: 2.45 },

  // --- ARCA VITA (Pag. 2 PDF 1) ---
  { id: 'arc-1', provider: 'Arca Vita', productName: 'Progressive Pension', lineName: 'Power (AZN)', type: PensionType.PIP, category: LineCategory.AZN, return2024: 10.65, return3y: 2.79, return5y: 5.00, return10y: 4.90, isc10y: 1.85 },

  // --- AXA ASSICURAZIONI (Pag. 2 PDF 1) ---
  { id: 'axa-1', provider: 'AXA Assicurazioni', productName: 'Progetto Pensione Piu', lineName: 'Axa Previdenza Internazionale', type: PensionType.PIP, category: LineCategory.AZN, return2024: 19.85, return3y: 6.69, return5y: 9.41, return10y: 8.39, isc10y: 2.50 },
  { id: 'axa-2', provider: 'AXA Assicurazioni', productName: 'MIA Pensione', lineName: 'Previdenza Megatrend', type: PensionType.PIP, category: LineCategory.AZN, return2024: 5.91, return3y: 2.77, return5y: 4.64, return10y: 4.00, isc10y: 2.30 },

  // --- AXA MPS (Pag. 2 PDF 1) ---
  { id: 'amps-1', provider: 'AXA MPS Vita', productName: 'MPV Previdenza Attiva', lineName: 'MPV Previdenza Aggressivo', type: PensionType.PIP, category: LineCategory.AZN, return2024: 9.66, return3y: 1.89, return5y: 4.64, return10y: 4.49, isc10y: 2.20 },

  // --- BCC VITA (Pag. 3 PDF 1) ---
  { id: 'bcc-1', provider: 'BCC Vita', productName: 'Modus', lineName: 'BCC Vita Equity America', type: PensionType.PIP, category: LineCategory.AZN, return2024: 22.86, return3y: 6.18, return5y: 11.07, return10y: 8.79, isc10y: 2.15 },

  // --- CNP UNICREDIT (Pag. 3-4 PDF 1) ---
  { id: 'cnp-1', provider: 'CNP Unicredit Vita', productName: 'Seniorvita Valore Futuro', lineName: 'Progetto Opportunity', type: PensionType.PIP, category: LineCategory.AZN, return2024: 13.38, return3y: 2.49, return5y: 5.11, return10y: 4.81, isc10y: 2.25 },
  { id: 'cnp-2', provider: 'CNP Vita Assicura', productName: 'Unicredit Futuro PIP', lineName: 'CNP Assicurazione Prev. Equity', type: PensionType.PIP, category: LineCategory.AZN, return2024: 16.52, return3y: 4.24, return5y: 9.41, return10y: 7.38, isc10y: 2.30 },

  // --- GENERALI ITALIA (Pag. 7 PDF 1) ---
  { id: 'gen-1', provider: 'Generali Italia', productName: 'Guardo Avanti', lineName: 'Cattolica Previdenza Azionario', type: PensionType.PIP, category: LineCategory.AZN, return2024: 17.67, return3y: 5.45, return5y: 8.36, return10y: 7.89, isc10y: 2.10 },
  { id: 'gen-2', provider: 'Generali Italia', productName: 'Generazione Previdente', lineName: 'Generali Azione Sostenibile', type: PensionType.PIP, category: LineCategory.AZN, return2024: 9.96, return3y: 1.78, return5y: 0, return10y: 0, isc10y: 2.15 },

  // --- MEDIOLANUM VITA (Pag. 10 PDF 1) ---
  { id: 'med-1', provider: 'Mediolanum Vita', productName: 'Taxbenefit New', lineName: 'Challenge Provident Fund 1', type: PensionType.PIP, category: LineCategory.AZN, return2024: 15.37, return3y: 3.27, return5y: 5.46, return10y: 5.27, isc10y: 2.45 },
  { id: 'med-2', provider: 'Mediolanum Vita', productName: 'Taxbenefit New', lineName: 'Challenge Provident Fund 2', type: PensionType.PIP, category: LineCategory.BIL, return2024: 8.67, return3y: 1.21, return5y: 3.04, return10y: 3.12, isc10y: 2.20 },

  // --- UNIPOL ASSICURAZIONI (Pag. 11 PDF 1) ---
  { id: 'uni-1', provider: 'Unipol Assicurazioni', productName: 'Unipol Futura', lineName: 'Previglobale', type: PensionType.PIP, category: LineCategory.AZN, return2024: 16.82, return3y: 5.01, return5y: 7.29, return10y: 0, isc10y: 1.85 },

  // --- ZURICH INVESTMENTS LIFE (Pag. 11 PDF 1 - TARGET) ---
  { id: 'z-1', provider: 'Zurich Investments Life', productName: 'Programma Pensione', lineName: 'Zurich Pension ESG Azionario', type: PensionType.PIP, category: LineCategory.AZN, return2024: 15.37, return3y: 4.66, return5y: 7.15, return10y: 6.43, isc10y: 2.15 },
  { id: 'z-2', provider: 'Zurich Investments Life', productName: 'Programma Pensione', lineName: 'Zurich Pension ESG Flex 8', type: PensionType.PIP, category: LineCategory.BIL, return2024: 7.82, return3y: -1.37, return5y: 0.75, return10y: 1.83, isc10y: 1.85 },
  { id: 'z-3', provider: 'Zurich Investments Life', productName: 'Programma Pensione', lineName: 'Zurich Pension ESG Flex 4', type: PensionType.PIP, category: LineCategory.BIL, return2024: 4.31, return3y: 0.61, return5y: 0.12, return10y: -0.43, isc10y: 1.65 },

  // --- FONDI NEGOZIALI (PDF 2 INTEGRALE) ---
  { id: 'fn-1', provider: 'Fonchim', productName: 'Fondo Fonchim', lineName: 'Crescita (AZN)', type: PensionType.FPN, category: LineCategory.AZN, return2024: 10.32, return3y: 2.66, return5y: 4.51, return10y: 4.23, return20y: 4.30, isc10y: 0.32 },
  { id: 'fn-2', provider: 'Cometa', productName: 'Fondo Cometa', lineName: 'Crescita (BIL)', type: PensionType.FPN, category: LineCategory.BIL, return2024: 10.42, return3y: 2.34, return5y: 2.52, return10y: 2.93, return20y: 0, isc10y: 0.35 },
  { id: 'fn-3', provider: 'Fondosanità', productName: 'Fondo Fondosanità', lineName: 'Espansione (AZN)', type: PensionType.FPN, category: LineCategory.AZN, return2024: 13.90, return3y: 2.64, return5y: 5.80, return10y: 5.51, return20y: 5.14, isc10y: 0.38 },
  { id: 'fn-4', provider: 'Solidarietà Veneto', productName: 'Fondo Sol. Veneto', lineName: 'Dinamico (AZN)', type: PensionType.FPN, category: LineCategory.AZN, return2024: 11.43, return3y: 2.99, return5y: 5.42, return10y: 4.88, return20y: 4.86, isc10y: 0.45 },
  { id: 'fn-5', provider: 'Previambiente', productName: 'Fondo Previambiente', lineName: 'Azionario (AZN)', type: PensionType.FPN, category: LineCategory.AZN, return2024: 12.05, return3y: 0, return5y: 0, return10y: 0, isc10y: 0.36 },
  { id: 'fn-6', provider: 'Alifond', productName: 'Fondo Alifond', lineName: 'Dinamico (AZN)', type: PensionType.FPN, category: LineCategory.AZN, return2024: 11.47, return3y: 3.36, return5y: 5.21, return10y: 5.18, isc10y: 0.34 },
  { id: 'fn-7', provider: 'Laborfonds', productName: 'Fondo Laborfonds', lineName: 'Linea Dinamica (AZN)', type: PensionType.FPN, category: LineCategory.AZN, return2024: 9.40, return3y: 1.90, return5y: 5.37, return10y: 4.55, isc10y: 0.40 },
  { id: 'fn-8', provider: 'Fopen', productName: 'Fondo Fopen', lineName: 'Bilanciato Azionario', type: PensionType.FPN, category: LineCategory.AZN, return2024: 11.03, return3y: 2.61, return5y: 5.10, return10y: 4.28, return20y: 4.36, isc10y: 0.35 },
  { id: 'fn-9', provider: 'Fondapi', productName: 'Fondo Fondapi', lineName: 'Crescita (BIL)', type: PensionType.FPN, category: LineCategory.BIL, return2024: 7.49, return3y: 1.93, return5y: 4.02, return10y: 4.41, isc10y: 0.38 },
  { id: 'fn-10', provider: 'Mediafond', productName: 'Fondo Mediafond', lineName: 'Azionario', type: PensionType.FPN, category: LineCategory.AZN, return2024: 15.36, return3y: 3.01, return5y: 7.61, return10y: 7.19, isc10y: 0.42 },
  { id: 'fn-11', provider: 'Eurofer', productName: 'Fondo Eurofer', lineName: 'Dinamico', type: PensionType.FPN, category: LineCategory.AZN, return2024: 11.60, return3y: 2.52, return5y: 4.70, return10y: 5.02, isc10y: 0.33 },
  { id: 'fn-12', provider: 'Prevedi', productName: 'Fondo Prevedi', lineName: 'Bilanciato', type: PensionType.FPN, category: LineCategory.BIL, return2024: 7.05, return3y: 1.10, return5y: 2.47, return10y: 2.95, return20y: 3.41, isc10y: 0.30 },
  { id: 'fn-13', provider: 'Priamo', productName: 'Fondo Priamo', lineName: 'Bilanciato Sviluppo', type: PensionType.FPN, category: LineCategory.BIL, return2024: 5.81, return3y: 1.03, return5y: 2.69, return10y: 2.82, isc10y: 0.32 },
  { id: 'fn-14', provider: 'Fondaereo', productName: 'Fondo Fondaereo', lineName: 'Crescita', type: PensionType.FPN, category: LineCategory.AZN, return2024: 8.98, return3y: 0.90, return5y: 3.90, return10y: 4.36, isc10y: 0.35 },
  { id: 'fn-15', provider: 'Previdenza Cooperativa', productName: 'Previdenza Coop', lineName: 'Dinamico', type: PensionType.FPN, category: LineCategory.AZN, return2024: 11.04, return3y: 2.26, return5y: 4.49, return10y: 0, isc10y: 0.38 }
];
