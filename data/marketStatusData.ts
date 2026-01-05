
export interface MarketStatItem {
  id: string;
  category: 'FPN' | 'FPA';
  provider: string;
  aderenti: number;
  patrimonio: number;
  comparti?: {
    name: string;
    aderentiPerc: number;
    patrimonioPerc: number;
  }[];
}

export const MARKET_STATUS_DATA: MarketStatItem[] = [
  // --- FPN - FONDI PENSIONE NEGOZIALI (Pagine 4, 5, 6) ---
  {
    id: 'fpn-cometa',
    category: 'FPN',
    provider: 'Cometa',
    aderenti: 502443,
    patrimonio: 15350.55,
    comparti: [
      { name: 'Reddito', aderentiPerc: 63.87, patrimonioPerc: 67.48 },
      { name: 'Crescita', aderentiPerc: 10.44, patrimonioPerc: 12.39 },
      { name: 'Tfr Silente', aderentiPerc: 11.89, patrimonioPerc: 2.98 },
      { name: 'Monetario Plus', aderentiPerc: 8.11, patrimonioPerc: 9.00 }
    ]
  },
  {
    id: 'fpn-prevedi',
    category: 'FPN',
    provider: 'Prevedi',
    aderenti: 1383545,
    patrimonio: 1386.58,
    comparti: [
      { name: 'Bilanciato', aderentiPerc: 87.11, patrimonioPerc: 83.28 },
      { name: 'Sicurezza', aderentiPerc: 12.89, patrimonioPerc: 16.72 }
    ]
  },
  {
    id: 'fpn-perseo-sirio',
    category: 'FPN',
    provider: 'Perseo Sirio',
    aderenti: 255105,
    patrimonio: 803.18,
    comparti: [
      { name: 'Garantito', aderentiPerc: 73.25, patrimonioPerc: 64.59 },
      { name: 'Obbligazionario', aderentiPerc: 22.73, patrimonioPerc: 21.47 },
      { name: 'Azionario', aderentiPerc: 26.56, patrimonioPerc: 13.94 }
    ]
  },
  {
    id: 'fpn-laborfonds',
    category: 'FPN',
    provider: 'Laborfonds',
    aderenti: 143386,
    patrimonio: 4228.31,
    comparti: [
      { name: 'Bilanciato', aderentiPerc: 61.48, patrimonioPerc: 70.22 },
      { name: 'Garantito', aderentiPerc: 13.41, patrimonioPerc: 9.84 },
      { name: 'Prudente-Etica', aderentiPerc: 12.65, patrimonioPerc: 10.32 },
      { name: 'Dinamica', aderentiPerc: 12.46, patrimonioPerc: 9.62 }
    ]
  },
  {
    id: 'fpn-fonchim',
    category: 'FPN',
    provider: 'Fonchim',
    aderenti: 182887,
    patrimonio: 9208.00,
    comparti: [
      { name: 'Stabilità', aderentiPerc: 86.10, patrimonioPerc: 84.41 },
      { name: 'Crescita', aderentiPerc: 10.44, patrimonioPerc: 11.59 },
      { name: 'Garantito', aderentiPerc: 3.46, patrimonioPerc: 4.00 }
    ]
  },
  {
    id: 'fpn-espero',
    category: 'FPN',
    provider: 'Espero',
    aderenti: 108736,
    patrimonio: 1568.68,
    comparti: [
      { name: 'Crescita', aderentiPerc: 76.20, patrimonioPerc: 81.87 },
      { name: 'Garanzia', aderentiPerc: 22.77, patrimonioPerc: 18.12 }
    ]
  },
  {
    id: 'fpn-eurofer',
    category: 'FPN',
    provider: 'Eurofer',
    aderenti: 92843,
    patrimonio: 1669.85,
    comparti: [
      { name: 'Garantito', aderentiPerc: 55.02, patrimonioPerc: 16.97 },
      { name: 'Bilanciato', aderentiPerc: 38.21, patrimonioPerc: 62.07 },
      { name: 'Dinamico', aderentiPerc: 25.86, patrimonioPerc: 20.96 }
    ]
  },
  {
    id: 'fpn-arco',
    category: 'FPN',
    provider: 'Arco',
    aderenti: 84414,
    patrimonio: 855.15,
    comparti: [
      { name: 'Garantito', aderentiPerc: 73.30, patrimonioPerc: 14.32 },
      { name: 'Bilanciato Prudente', aderentiPerc: 24.87, patrimonioPerc: 73.88 },
      { name: 'Bilanciato Dinamico', aderentiPerc: 5.28, patrimonioPerc: 11.80 }
    ]
  },
  {
    id: 'fpn-alifond',
    category: 'FPN',
    provider: 'Alifond',
    aderenti: 53235,
    patrimonio: 1988.60,
    comparti: [
      { name: 'Bilanciato', aderentiPerc: 67.99, patrimonioPerc: 78.86 },
      { name: 'Garantito', aderentiPerc: 18.32, patrimonioPerc: 12.58 },
      { name: 'Dinamico', aderentiPerc: 13.69, patrimonioPerc: 8.56 }
    ]
  },
  {
    id: 'fpn-solidarieta-veneto',
    category: 'FPN',
    provider: 'Solidarietà Veneto',
    aderenti: 164618,
    patrimonio: 2464.82,
    comparti: [
      { name: 'Garantito', aderentiPerc: 51.17, patrimonioPerc: 12.69 },
      { name: 'Reddito', aderentiPerc: 20.63, patrimonioPerc: 41.77 },
      { name: 'Dinamico', aderentiPerc: 23.93, patrimonioPerc: 26.07 }
    ]
  },
  {
    id: 'fpn-fonte',
    category: 'FPN',
    provider: 'Fonte',
    aderenti: 300061,
    patrimonio: 6117.76,
    comparti: [
      { name: 'Conservativo', aderentiPerc: 48.64, patrimonioPerc: 30.46 },
      { name: 'Sviluppo', aderentiPerc: 28.62, patrimonioPerc: 49.18 },
      { name: 'Dinamico', aderentiPerc: 11.41, patrimonioPerc: 10.19 }
    ]
  },

  // --- FPA - FONDI PENSIONE APERTI (Pagine 7, 8) ---
  {
    id: 'fpa-intesasanpaolo',
    category: 'FPA',
    provider: 'Intesa Sanpaolo',
    aderenti: 640109,
    patrimonio: 9109.18
  },
  {
    id: 'fpa-iccrea',
    category: 'FPA',
    provider: 'Iccrea',
    aderenti: 198072,
    patrimonio: 1658.68
  },
  {
    id: 'fpa-amundi',
    category: 'FPA',
    provider: 'Amundi',
    aderenti: 184019,
    patrimonio: 4011.78
  },
  {
    id: 'fpa-allianz',
    category: 'FPA',
    provider: 'Allianz',
    aderenti: 165411,
    patrimonio: 3295.39
  },
  {
    id: 'fpa-itas-vita',
    category: 'FPA',
    provider: 'Itas Vita',
    aderenti: 134533,
    patrimonio: 1647.23
  },
  {
    id: 'fpa-azimut',
    category: 'FPA',
    provider: 'Azimut',
    aderenti: 88946,
    patrimonio: 2219.22
  },
  {
    id: 'fpa-axa',
    category: 'FPA',
    provider: 'Axa',
    aderenti: 85244,
    patrimonio: 1204.49
  },
  {
    id: 'fpa-generali',
    category: 'FPA',
    provider: 'Generali',
    aderenti: 67716,
    patrimonio: 1910.29
  },
  {
    id: 'fpa-anima',
    category: 'FPA',
    provider: 'Anima SGR',
    aderenti: 61560,
    patrimonio: 1516.29
  },
  {
    id: 'fpa-arca',
    category: 'FPA',
    provider: 'Arca',
    aderenti: 231702,
    patrimonio: 5411.90
  },
  {
    id: 'fpa-zurich',
    category: 'FPA',
    provider: 'Zurich',
    aderenti: 3855,
    patrimonio: 106.61
  }
];
