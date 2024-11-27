import reactImg from "../../assets/pocketwifi1.png";
import './Header.css';


const reactDescriptions = ["Fast", "Lots of", "Unlimited"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export function Header() {
  const description = reactDescriptions[genRandomInt(2)];
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>Choose your subscription</h1>
      <p>
        {reactDescriptions[genRandomInt(2)]} data for a seamless internet surfing! 
      </p>
    </header>
  );
};

export default Header;
