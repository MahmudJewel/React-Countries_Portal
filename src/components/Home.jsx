import { useState, useEffect } from "react";
// import SingleContent from "./SingleContent";
import "../assets/home.css";
import CustomPaginations from "./CustomPaginations";
import axios from "axios";
import { Container } from "react-bootstrap";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const fetchData = async () => {
    const { data } = await axios.get(
      `https://restcountries.com/v3.1/all`
      // `https://restcountries.com/v3.1/region/europe`
    );
    setCountries(data);
    // console.log("all countries: ", data);
  };

  useEffect(() => {
    fetchData();
    // console.log('length: ', countries.length)
  }, []);

  return (
    <Container>
      <CustomPaginations posts={countries} />
    </Container>
  );
};

export default Home;
