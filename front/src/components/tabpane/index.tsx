import React, { useState } from "react";

// Defina uma enumeração para identificar os diferentes painéis
enum Tab {
  FIRST = "first",
  SECOND = "second",
  THIRD = "third",
  FOUR = "four",
}

interface FirstTabContentProps {
  FirstTabContent: JSX.Element;
  SecondTabContent: JSX.Element;
  ThirdTabContent: JSX.Element;
  FourTabContent: JSX.Element;
}

const TabPane: React.FC<FirstTabContentProps> = ({
  FirstTabContent,
  SecondTabContent,
  ThirdTabContent,
}) => {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.FIRST);

  const switchTab = (tab: Tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="w-full max-w-screen-md mx-auto p-4">
      <ul className="flex">
        <li
          className={`cursor-pointer px-4 py-2 ${
            activeTab === Tab.FIRST ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => switchTab(Tab.FIRST)}
        >
          Preço atual
        </li>
        <li
          className={`cursor-pointer px-4 py-2 ${
            activeTab === Tab.SECOND ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => switchTab(Tab.SECOND)}
        >
          Preço histórico
        </li>
        <li
          className={`cursor-pointer px-4 py-2 ${
            activeTab === Tab.THIRD ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => switchTab(Tab.THIRD)}
        >
          Preço atual em comparação a outras ações
        </li>
        <li
          className={`cursor-pointer px-4 py-2 ${
            activeTab === Tab.FOUR ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => switchTab(Tab.FOUR)}
        >
          Projeção de ganhos com compra em data específica{" "}
        </li>
      </ul>
      <div className="border p-4 mt-4">
        {activeTab === Tab.FIRST && FirstTabContent}
        {activeTab === Tab.SECOND && SecondTabContent}
        {activeTab === Tab.THIRD && ThirdTabContent}
        {activeTab === Tab.FOUR && ThirdTabContent}
      </div>
    </div>
  );
};

export default TabPane;
