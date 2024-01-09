import Header from './partials/header';
import Footer from './partials/footer';
import Home from './pages/home/home';
import Logement from './pages/logement/logement';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>                           
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logement/:id" element={<Logement />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
      </>
  );
}

export default App;
