import { useState } from "react";
import Tab from "./Tab";

function Tabs() {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div className="container mx-auto h-screen max-w-5xl mt-36">
      <div className="flex flex-col h-[50%]">
        <div className="flex w-full justify-between">
          <h1
            className={`w-full border border-black/65 p-3 cursor-pointer ${
              activeTab === 1 && "text-red-400"
            }`}
            onClick={() => setActiveTab(1)}
          >
            Tab 1
          </h1>
          <h1
            className={`w-full border border-black/65 p-3 cursor-pointer ${
              activeTab === 2 && "text-red-400"
            }`}
            onClick={() => setActiveTab(2)}
          >
            Tab 2
          </h1>
          <h1
            className={`w-full border border-black/65 p-3 cursor-pointer ${
              activeTab === 3 && "text-red-400"
            }`}
            onClick={() => setActiveTab(3)}
          >
            Tab 3
          </h1>
        </div>

        <div className="h-full border border-black/65">
          <Tab activeTab={activeTab} />
        </div>
      </div>
    </div>
  );
}

export default Tabs;
