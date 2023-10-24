import api from "../api";

export async function getCurrentPrice(stockName: string) {
  return await api.get(`/stock/${stockName}/quote`);
}

export async function comparePrices(
  stockName: string,
  symbolsToCompare: string | string[]
) {
  let symbolList: string[];

  if (typeof symbolsToCompare === "string") {
    symbolList = symbolsToCompare.split(",");
  } else if (Array.isArray(symbolsToCompare)) {
    symbolList = symbolsToCompare;
  } else {
    symbolList = [];
  }

  const queryString = symbolList.join(",");

  return await api.get(
    `/stocks/${stockName}/compare?symbolsToCompare=${queryString}`
  );
}
