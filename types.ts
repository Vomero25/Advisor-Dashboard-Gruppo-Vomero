
export enum PensionType {
  FPN = 'FP Negoziale',
  FPA = 'FP Aperto',
  PIP = 'PIP'
}

export enum LineCategory {
  GAR = 'Garantito',
  OBB = 'Obbligazionario',
  BIL = 'Bilanciato',
  AZN = 'Azionario'
}

export interface PensionLine {
  id: string;
  provider: string;
  productName: string;
  lineName: string;
  type: PensionType;
  category: LineCategory;
  return2024: number;
  return3y: number;
  return5y: number;
  return10y: number;
  isc10y?: number; // Synthetic Cost Indicator at 10 years
}

export interface ComparisonResult {
  target: PensionLine;
  competitors: PensionLine[];
}
