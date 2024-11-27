import componentsImg from "./assets/components.png";
import propsImg from "./assets/config.png";
import jsxImg from "./assets/jsx-ui.png";
import stateImg from "./assets/state-mgmt.png";

export const CORE_CONCEPTS = [
  {
    image: componentsImg,
    title: "Components",
    description:
      "The core UI building block - compose the user interface by combining multiple components.",
  },
  {
    image: jsxImg,
    title: "JSX",
    description:
      "Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.",
  },
  {
    image: propsImg,
    title: "Props",
    description:
      "Make components configurable (and therefore reusable) by passing input data to them.",
  },
  {
    image: stateImg,
    title: "State",
    description:
      "React-managed data which, when changed, causes the component to re-render & the UI to update.",
  },
];

export const EXAMPLES = {
  economy: {
    title: "Economy",
    description: "Information about the economy plan.",
    code: `
Here goes the price`,
  },
  economyPlus: {
    title: "Economy Plus",
    description: "Information about the Economy Plus plan",
    code: `
Here goes the price`,
  },
  standart: {
    title: "Standart",
    description: "Information about the Standart plan.",
    code: `
Here goes the price`,
  },
  premium: {
    title: "Premium",
    description: "Information about the Premium plan.",
    code: `
Here goes the price`,
  },
};
