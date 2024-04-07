import "./PortfolioSection.css";
import PortfolioItem from "../PortfolioItem/PortfolioItem";
import levis from "./img/levis.jpg";
import reebok from "./img/reebok.jpg";
import braun from "./img/braun.jpg";

export default function PortfolioSection() {
  return (
    <section className="portfolio grey" id="portfolio">
      <h2>Portfolio</h2>
      <PortfolioItem
        img={levis}
        alt="сайт компании levis"
        anker="#"
        atext="Online fashion store - Homepage"
      />
      <PortfolioItem
        img={reebok}
        alt="сайт компании reebok"
        anker="##"
        atext="Reebok Store - Concept"
      />
      <PortfolioItem
        img={braun}
        alt="сайт компании braun"
        anker="###"
        atext="Braun Landing Page - Concept"
      />
    </section>
  );
}
