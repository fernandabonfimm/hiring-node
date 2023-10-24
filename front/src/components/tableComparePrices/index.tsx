import React from "react";
import {InformationsArrayComparePrices } from "../../interfaces/tableProps";

const TableComparePrices: React.FC<InformationsArrayComparePrices> = ({ informations }) => {
    return (
      <div className="bg-white dark:bg-black p-4 rounded-lg shadow-md ">
        <h2 className="text-2xl font-semibold text-gray-800 mb-10 dark:text-white">
          Tabela dos preços das ações
        </h2>
        <table className="table-fixed w-full">
          <thead>
            <tr>
              <th className="w-1/4 border">Nome da ação</th>
              <th className="w-1/4 border">Preço</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(informations).map(([stockName, price]) => (
              <tr className="border-t" key={stockName}>
                <td className="border p-2 ">{stockName}</td>
                <td className="border p-2 ">{price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
export default TableComparePrices;
