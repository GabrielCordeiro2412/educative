import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Home from './views/Home/Home';
import Contato from './views/Contato/Contato';
import Espaco from './views/Espaco/Espaco';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/espaco' element={<Espaco />} />
          <Route exact path='/contato' element={<Contato />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
