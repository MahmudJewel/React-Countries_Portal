import { useState, useEffect } from "react";
import SingleContent from "./SingleContent";
import '../assets/home.css'
import axios from "axios";
import { Container } from "@material-ui/core";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const fetchData = async () => {
    const { data } = await axios.get(
      // `https://restcountries.com/v3.1/all`
      `https://restcountries.com/v3.1/region/europe`
    );
    setCountries(data);
    console.log("all countries: ", data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <div className="home">
        {countries &&
          countries.map((item) => (
            <SingleContent
              key={item.population}
              name={item.name}
              region={item.region}
              capital={item.capital}
              population={item.population}
              flags = {item.flags}
            />
          ))}
      </div>
    </Container>
  );
};

export default Home;
