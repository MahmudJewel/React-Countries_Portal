import pic from "../ax.png";
import { Container, Row } from "react-bootstrap";
import "../assets/singleContent.css";

const SingleContent = ({
  name,
  region,
  capital,
  population,
  flags,
  area,
  languages,
}) => {
  return (
    <div className="bg-dark m-1 border15 shadow p-3">
      <h3 className="text-center text-primary">{name.common}</h3>
      <img src={flags.png} alt="" />
      <div className="mt-3">
        Continent: {region} <br />
        Capital: {capital} <br />
        Population: {population} <br />
        Area: {area} <br />
      </div>
    </div>
  );
};

export default SingleContent;
