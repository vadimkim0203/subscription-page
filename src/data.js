import componentsImg from "./assets/components.png";
import propsImg from "./assets/config.png";
import jsxImg from "./assets/jsx-ui.png";
import stateImg from "./assets/state-mgmt.png";

export const CORE_CONCEPTS = [
  {
    image: componentsImg,
    title: "Economy",
    description:
      "2GB of high-speed data, then enjoy unlimited browsing at 1 Mbps.",
  },
  {
    image: jsxImg,
    title: "Economy Plus",
    description:
      "2GB of high-speed data, then enjoy unlimited browsing at 2 Mbps.",
  },
  {
    image: propsImg,
    title: "Standart",
    description:
      "5GB of high-speed data, then enjoy unlimited browsing at 5 Mbps.",
  },
  {
    image: stateImg,
    title: "Premium",
    description:
      "10GB of high-speed data, then enjoy unlimited browsing at 5 Mbps.",
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
