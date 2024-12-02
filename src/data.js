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
      "3GB of high-speed data, then enjoy unlimited browsing at 2 Mbps.",
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
    description: "Traveling light? Then this tariff is definitely for you! 2GB of unlimited data will allow you to send text messages through your favorite messenger and navigate through local maps.",
    code: `
10.000 KRW per 7 days`,
  },
  economyPlus: {
    title: "Economy Plus",
    description: "Want to share some favorite moments with your closest ones during the trip? Then choose this tariff! Additionally to text messages and maps you can share some photos and enjoy special moments together.",
    code: `
15.000 KRW per 7 days`,
  },
  standart: {
    title: "Standart",
    description: "Satndart plan will allow you to surf on the internet and upload the content to Instagram or Tiktok during your trip without any troubles!",
    code: `
20.000 KRW per 7 days`,
  },
  premium: {
    title: "Premium",
    description: "With this amount of data you can conquer the universe:)",
    code: `
25.000 KRW per 7 days`,
  },
};
