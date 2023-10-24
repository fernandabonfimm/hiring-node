const axios = require("axios");
const API_KEY = process.env.API_KEY;

exports.getCurrentPrice = async (req, res) => {
  try {
    const stockName = req.params.stockName;
    const response = await axios.get(
      `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${stockName}&interval=1min&apikey=${API_KEY}`
    );

    const timeSeries = response.data["Time Series (1min)"];
    const lastUpdatedTime = Object.keys(timeSeries)[0];
    const currentPrice = timeSeries[lastUpdatedTime]["1. open"];

    res.status(202).json({ stockName: stockName, price: currentPrice });
  } catch (err) {
    res.status(404).json({ error: "Erro ao consultar preço atual." });
  }
};

exports.getHistoricalPrice = async (req, res) => {
  try {
    const symbol = req.params.symbol;
    const from = req.query.from; // Data inicial
    const to = req.query.to; // Data final

    const response = await axios.get(
      `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}&apikey=${API_KEY}`
    );

    const data = response.data["Time Series (Daily)"];
    console.log(data);

    const historicalPrices = Object.keys(data)
      .filter((date) => {
        return date >= from && date <= to;
      })
      .map((date) => {
        return {
          date,
          price: data[date]["4. close"],
        };
      });

    res.status(202).json(historicalPrices);
  } catch (err) {
    console.error(err);
    res.status(404).json({ error: "Erro ao consultar preço histórico." });
  }
};

exports.projectEarnings = async (req, res) => {
  try {
    const stockName = req.params.stockName;
    const purchasedAt = req.query.purchasedAt;
    const amount = req.query.purchasedAmount;

    const alphaVantageResponse = await axios.get(
      `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${stockName}&apikey=${API_KEY}`
    );

    const alphaVantageData = alphaVantageResponse.data["Time Series (Daily)"];

    const purchasedPrice = alphaVantageData[purchasedAt]["4. close"];

    const lastAvailableDate = Object.keys(alphaVantageData)[0];
    const lastPrice = alphaVantageData[lastAvailableDate]["4. close"];

    const earnings = (lastPrice - purchasedPrice) * amount;

    res.json({ stockName, purchasedAt, amount, lastPrice, earnings });
  } catch (err) {
    res.status(404).json({ error: "Erro ao projetar ganhos." });
  }
};

exports.comparePrices = async (req, res) => {
  try {
    const stockName = req.params.stockName;
    const symbolsToCompare = req.query.symbolsToCompare.split(",");
    const prices = {};

    const responseMain = await axios.get(
      `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${stockName}&interval=5min&apikey=${API_KEY}`
    );
    const dataMain = responseMain.data["Time Series (5min)"];

    if (dataMain) {
      const lastUpdateMain = Object.keys(dataMain)[0];
      prices[stockName] = dataMain[lastUpdateMain]["1. open"];
    } else {
      return res
        .status(404)
        .json({ error: "Dados da ação principal não encontrados" });
    }

    if (Array.isArray(symbolsToCompare)) {
      for (const symbol of symbolsToCompare) {
        const response = await axios.get(
          `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${API_KEY}`
        );
        const data = response.data["Time Series (5min)"];

        if (data) {
          const lastUpdate = Object.keys(data)[0];
          prices[symbol] = data[lastUpdate]["1. open"];
        } else {
          prices[symbol] = "Dados não encontrados";
        }
      }
    } else {
      const response = await axios.get(
        `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbolsToCompare}&interval=5min&apikey=${API_KEY}`
      );
      const data = response.data["Time Series (5min)"];

      if (data) {
        const lastUpdate = Object.keys(data)[0];
        prices[symbolsToCompare] = data[lastUpdate]["1. open"];
      } else {
        prices[symbolsToCompare] = "Dados não encontrados";
      }
    }

    res.json(prices);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao comparar preços" });
  }
};
