import React from "react";
import TabPane from "../../components/tabpane";
import FirstTabContent from "../../container/FirstTabContent";

const CalculatorPage: React.FC = () => {
  return (
    <div className="flex w-screen h-screen flex-col bg-white gap-10 p-10 dark:bg-black">
      <TabPane
        FirstTabContent={<FirstTabContent />}
        SecondTabContent={<></>}
        ThirdTabContent={<></>}
        FourTabContent={<></>}
      />
    </div>
  );
};
export default CalculatorPage;
