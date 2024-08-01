import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/menu/Menu';
import ListaAutos from './components/autos/ListaAutos';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import "./App.css"
import CrearAuto from './components/autos/CrearAuto';
import Footer from './components/footer/Footer';

function App() {
  return (
    <Router>
    <Container fluid>  
    <Menu />
      <Routes>
            <Route path="/" element={<ListaAutos />} />
            <Route path="/crearauto" element={<CrearAuto />} />
      </Routes>  
    <Footer />  
    </Container>      
    </Router>
  );
}

export default App;
