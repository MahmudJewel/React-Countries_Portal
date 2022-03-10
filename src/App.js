import "./assets/App.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="app">
          <div className="row nav-fixed-top">
            <Navigation />
          </div>
          <Container className="">
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/movies" element={<Movies />} />
              <Route path="/series" element={<Series />} />
              <Route path="/search" element={<Search />} /> */}
            </Routes>
          </Container>
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
