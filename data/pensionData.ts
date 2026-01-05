
import { PensionLine, PensionType, LineCategory } from '../types';

export const PENSION_DATA: PensionLine[] = [
  // ZURICH INVESTMENTS LIFE S.P.A. (Target)
  {
    id: 'z-1',
    provider: 'Zurich Investments Life',
    productName: 'Programma Pensione',
    lineName: 'Zurich Pension ESG Azionario',
    type: PensionType.PIP,
    category: LineCategory.AZN,
    return2024: 15.37,
    return3y: 4.66,
    return5y: 7.15,
    return10y: 6.80,
    isc10y: 2.15
  },
  {
    id: 'z-2',
    provider: 'Zurich Investments Life',
    productName: 'Programma Pensione',
    lineName: 'Zurich Pension ESG Flex 8',
    type: PensionType.PIP,
    category: LineCategory.BIL,
    return2024: 7.82,
    return3y: -1.37,
    return5y: 0.75,
    return10y: 2.10,
    isc10y: 1.85
  },
  {
    id: 'z-3',
    provider: 'Zurich Investments Life',
    productName: 'Programma Pensione',
    lineName: 'Zurich Pension ESG Flex 4',
    type: PensionType.PIP,
    category: LineCategory.BIL,
    return2024: 4.31,
    return3y: 0.61,
    return5y: 0.12,
    return10y: 1.50,
    isc10y: 1.65
  },
  // ANIMA ARTI & MESTIERI (Target)
  {
    id: 'a-1',
    provider: 'Anima SGR',
    productName: 'Arti & Mestieri',
    lineName: 'Anima Arti & Mestieri Azionario',
    type: PensionType.FPA,
    category: LineCategory.AZN,
    return2024: 18.2,
    return3y: 5.2,
    return5y: 8.4,
    return10y: 7.90,
    isc10y: 1.25
  },
  // COMPETITORS - PIP (from Doc 1)
  {
    id: 'all-1',
    provider: 'Alleanza Assicurazioni',
    productName: 'Alleata Previdenza',
    lineName: 'Alleata Azionaria',
    type: PensionType.PIP,
    category: LineCategory.AZN,
    return2024: 11.66,
    return3y: 2.25,
    return5y: 5.00,
    return10y: 4.85,
    isc10y: 2.40
  },
  {
    id: 'alz-1',
    provider: 'Allianz S.P.A.',
    productName: 'Orizzonte Previdenza',
    lineName: 'Azionario Globale',
    type: PensionType.PIP,
    category: LineCategory.AZN,
    return2024: 13.80,
    return3y: 2.24,
    return5y: 3.5,
    return10y: 4.20,
    isc10y: 2.35
  },
  {
    id: 'axa-1',
    provider: 'AXA Assicurazioni',
    productName: 'Axa Progetto Pensione Piu',
    lineName: 'Axa Previdenza Internazionale',
    type: PensionType.PIP,
    category: LineCategory.AZN,
    return2024: 19.85,
    return3y: 6.69,
    return5y: 9.41,
    return10y: 8.50,
    isc10y: 2.50
  },
  {
    id: 'cnp-1',
    provider: 'CNP Unicredit Vita',
    productName: 'Seniorvita Valore Futuro',
    lineName: 'Progetto Opportunity',
    type: PensionType.PIP,
    category: LineCategory.AZN,
    return2024: 13.38,
    return3y: 2.49,
    return5y: 5.11,
    return10y: 4.90,
    isc10y: 2.20
  },
  // NEGOZIALI (from Doc 2)
  {
    id: 'com-1',
    provider: 'Cometa',
    productName: 'Fondo Cometa',
    lineName: 'Crescita',
    type: PensionType.FPN,
    category: LineCategory.BIL,
    return2024: 10.42,
    return3y: 2.34,
    return5y: 2.52,
    return10y: 3.10,
    isc10y: 0.35
  },
  {
    id: 'fon-1',
    provider: 'Fonchim',
    productName: 'Fondo Fonchim',
    lineName: 'Crescita',
    type: PensionType.FPN,
    category: LineCategory.AZN,
    return2024: 10.32,
    return3y: 2.66,
    return5y: 4.51,
    return10y: 4.20,
    isc10y: 0.32
  },
  {
    id: 'san-1',
    provider: 'Fondosanità',
    productName: 'Fondosanità',
    lineName: 'Espansione',
    type: PensionType.FPN,
    category: LineCategory.AZN,
    return2024: 13.90,
    return3y: 2.64,
    return5y: 5.80,
    return10y: 5.40,
    isc10y: 0.38
  }
];
