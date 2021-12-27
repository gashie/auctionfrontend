import React from 'react'
import { BrowserRouter as Router, Routes,
  Route } from 'react-router-dom'

import { Container } from 'react-bootstrap';

import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from './screens/ProductScreen';



function App() {
  return (
    <Router>
    <Header/>
    <main>
      <Container>
      <Routes>
      <Route exact path="/" element={<HomeScreen/>}/>
      <Route exact path="/product/:id" element={<ProductScreen/>}/>
  
     </Routes>
      </Container>
    </main>
    <Footer/>
    </Router>
  );
}

export default App;
