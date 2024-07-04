import React, { useState } from "react";
import Tab from "./Tab";
import "./tabGroup.css";

function TabGroup() {
  const tabsInfo = [
    { name: "Tab1", text: "Lorem ipsum dolor sit amet" },
    { name: "Tab2", text: "Consectetur adipiscing elit" },
    { name: "Tab3", text: "Sed do eiusmod tempor incididunt" },
  ];

  // State to hold the name of the currently active tab
  const [activeTab, setActiveTab] = useState(tabsInfo[0].name);

  const toggleTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="container">
      {tabsInfo.map((tab) => (
        <Tab
          key={tab.name}
          name={tab.name}
          text={tab.text}
          toggle={() => toggleTab(tab.name)}
          isActive={activeTab === tab.name} // Pass true if this tab should be visible
        />
      ))}
    </div>
  );
}

export default TabGroup;
