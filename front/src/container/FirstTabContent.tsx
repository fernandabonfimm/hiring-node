import React from "react";
import Input from "../components/input";
import Button from "../components/button";
import Table from "../components/table";
import {getCurrentPrice} from "../services/endpoints/stock";

const FirstTabContent: React.FC = () => {
  const [stockName, setStockName] = React.useState("");
  const [data, setData] = React.useState([]);

  const fetchPrice = async () => {
    try {
      const response = await getCurrentPrice(stockName);
      const data = response.data;
      setData(data);
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
      <div className="w-full">{data.length > 0 && <Table informations={data} />}</div>
    </div>
  );
};

export default FirstTabContent;
