import { useState } from "react";
import CoreConcept from "./components/CoreConcept.jsx";
import Header from "./components/Header/Header.jsx";
import { CORE_CONCEPTS, EXAMPLES } from "./data";
import TabButton from "./components/TabButton.jsx";

function App() {
  let [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    // console.log(selectedTopic);
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Our plans</h2>
          <ul>
            {CORE_CONCEPTS.map((blockName) => (<CoreConcept key={blockName.title} {...blockName}/>))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSeleted={selectedTopic === "economy"}
              onSelect={() => {
                handleSelect("economy");
              }}
            >
              Economy
            </TabButton>
            <TabButton isSeleted={selectedTopic === "economyPlus"}
              onSelect={() => {
                handleSelect("economyPlus");
              }}
            >
              Economy Plus
            </TabButton>
            <TabButton isSeleted={selectedTopic === "standart"}
              onSelect={() => {
                handleSelect("standart");
              }}
            >
              Standart
            </TabButton>
            <TabButton isSeleted={selectedTopic === "premium"}
              onSelect={() => {
                handleSelect("premium");
              }}
            >
              Premium
            </TabButton>
          </menu>
          {!selectedTopic && <p>Please choose your plan</p>}

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
      </main>
    </div>
  );
}

export default App;
