import React from "react";
import Input from "../components/input";
import Button from "../components/button";
import { comparePrices } from "../services/endpoints/stock";
import TableComparePrices from "../components/tableComparePrices";

const ThirdTabContent: React.FC = () => {
  const [stockName, setStockName] = React.useState("");
  const [symbolsToCompare, setSymbolsToCompare] = React.useState("");
  const [result, setResult] = React.useState<Record<string, string>>({});

  const handleSubmit = async () => {
    try {
      const symbols = symbolsToCompare
        .split(",")
        .map((symbol) => symbol.trim());
      const response = await comparePrices(stockName, symbols);
      setResult(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full flex flex-col gap-10">
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Nome da ação"
          value={stockName}
          onChange={(e) => setStockName(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Símbolos para comparar (separados por vírgula)"
          value={symbolsToCompare}
          onChange={(e) => setSymbolsToCompare(e.target.value)}
        />
        <Button onClick={handleSubmit} label="Comparar Preços"/>
      </form>
      {Object.keys(result).length > 0 && (
        <TableComparePrices informations={result} />
      )}
    </div>
  );
};

export default ThirdTabContent;
