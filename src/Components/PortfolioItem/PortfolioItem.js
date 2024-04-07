import "./PortfolioItem.css";

export default function PortfolioItem({img, alt, anker, atext}) {
  return (
    <>
      <a href="##">
        <img src={img} alt={alt} />
      </a>

      <p>
        <a href={anker} className="portfolio_link">
          {atext}
        </a>
      </p>
    </>
  );
}
