import { useState } from "react";
import TabButton from "./TabButton";
import { EXAMPLES } from "../data";
import Tabs from "./Tabs.jsx";

export default function Examples() {
  let [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    // console.log(selectedTopic);
  }

  let tabContent;

  return (
    <section title="Examples" id="examples">
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === "economy"}
              onClick={() => {
                handleSelect("economy");
              }}
            >
              Economy
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "economyPlus"}
              onClick={() => {
                handleSelect("economyPlus");
              }}
            >
              Economy Plus
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "standart"}
              onClick={() => {
                handleSelect("standart");
              }}
            >
              Standart
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "premium"}
              onClick={() => {
                handleSelect("premium");
              }}
            >
              Premium
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>

      {!selectedTopic && <p id="choose-plan">Please choose your plan</p>}

      {selectedTopic && (
        <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </div>
      )}
    </section>
  );
}
