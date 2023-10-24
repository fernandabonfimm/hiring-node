import api from "../api";

export async function getCurrentPrice(stockName: string) {
  return await api.get(`/stock/${stockName}/quote`);
}

export async function comparePrices(stockName: string, symbolsToCompare: string[]) {
  return await api.get(`/stocks/${stockName}/compare`, {
    params: { stockName, symbolsToCompare },
  });
}

