import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  LatestPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("Latest");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "Latest",
      title: "Latest"
    },
    {
      id: "web",
      title: "Web App"
    },
    {
      id: "mobile",
      title: "Mobile App"
    },
    {
      id: "design",
      title: "Design"
    },
    {
      id: "content",
      title: "Content"
    }
  ];

  useEffect(() => {
    switch (selected) {
      case "Latest":
        setData(LatestPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      case "content":
        setData(contentPortfolio);
        break;
      default:
        setData(LatestPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map(item => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map(d => (
          <div className="item">
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
