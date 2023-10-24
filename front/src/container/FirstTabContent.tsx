import React from "react";
import Input from "../components/input";
import Button from "../components/button";
import Table from "../components/table";
import { getCurrentPrice } from "../services/endpoints/stock";
import { InformationsArray } from "../interfaces/tableProps";

const FirstTabContent: React.FC = () => {
  const [stockName, setStockName] = React.useState("");
  const [data, setData] = React.useState<InformationsArray>(
    {} as InformationsArray
  );

  const fetchPrice = async () => {
    try {
      const response = await getCurrentPrice(stockName);
      setData(response.data);
      console.log("Fetch realizado com sucesso", response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="w-full flex flex-col gap-10">
      <Input
        label="Insira o nome da ação"
        value={stockName}
        onChange={(e) => setStockName(e.target.value)}
        type="string"
      />
      <Button onClick={fetchPrice} label="Buscar" />
      <div className="w-full">
        <Table stockName={data.stockName} price={data.price} />
      </div>
    </div>
  );
};

export default FirstTabContent;
