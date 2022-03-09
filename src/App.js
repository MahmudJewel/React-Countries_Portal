import './assets/App.css';
import Navigation from './components/Navigation'
import Footer from './components/Footer'

import { Container } from '@material-ui/core';
import { BrowserRouter, Routes } from 'react-router-dom';
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
              {/* <Route path="/" element={<Trending />} />
              <Route path="/movies" element={<Movies />} />
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
