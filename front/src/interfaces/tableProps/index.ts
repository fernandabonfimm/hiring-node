export interface TableProps {
  stockName: number;
  price: number;
}

export interface InformationsArray {
  informations: TableProps[];
}

export interface InformationsArrayComparePrices {
  informations: Record<string, string>;
}
