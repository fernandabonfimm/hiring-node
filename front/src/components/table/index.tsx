import React from "react";
import { InformationsArray } from "../../interfaces/tableProps";

const Table: React.FC<InformationsArray> = ({ stockName, price }) => {
  return (
    <div className="bg-white dark:bg-black p-4 rounded-lg shadow-md ">
      <h2 className="text-2xl font-semibold text-gray-800 mb-10 dark:text-white">
        Tabela de preços atual da ação
      </h2>
      <table className="table-fixed w-full">
        <thead>
          <tr>
            <th className="w-1/4 border">Nome da ação</th>
            <th className="w-1/4 border">Preços</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t">
            <td className="border p-2 ">{stockName}</td>
            <td className="border p-2 ">{price}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Table;
