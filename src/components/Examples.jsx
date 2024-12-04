import { useState } from "react";
import TabButton from "./TabButton";
import { EXAMPLES } from "../data";

export default function Examples() {
  let [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    // console.log(selectedTopic);
  }
  return (
    <section title="Examples" id="examples">
      <menu>
        <TabButton
          isSeleted={selectedTopic === "economy"}
          onClick={() => {
            handleSelect("economy");
          }}
        >
          Economy
        </TabButton>
        <TabButton
          isSeleted={selectedTopic === "economyPlus"}
          onClick={() => {
            handleSelect("economyPlus");
          }}
        >
          Economy Plus
        </TabButton>
        <TabButton
          isSeleted={selectedTopic === "standart"}
          onClick={() => {
            handleSelect("standart");
          }}
        >
          Standart
        </TabButton>
        <TabButton
          isSeleted={selectedTopic === "premium"}
          onClick={() => {
            handleSelect("premium");
          }}
        >
          Premium
        </TabButton>
      </menu>
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
