import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/menu/Menu';
import ListaAutos from './components/autos/ListaAutos';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import "./App.css"
import CrearAuto from './components/autos/CrearAuto';
import Footer from './components/footer/Footer';
import DetalleAuto from './components/autos/DetalleAuto';
import EditarAuto from './components/autos/EditarAuto';
import EliminarAuto from './components/autos/EliminarAuto';
import Home from './components/home/Home';
import ApiExterna from './components/apiexterna/ApiExterna';

function App() {
  return (
    <Router>
    <Container fluid>  
    <Menu />
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/listaautos" element={<ListaAutos />} />
            <Route path="/crearauto" element={<CrearAuto />} />
            <Route path="/detalle/:id" element={<DetalleAuto />} />
            <Route path="/editar/:id" element={<EditarAuto />} />
            <Route path="/eliminar/:id" element={<EliminarAuto />} />
            <Route path="/apiexterna" element={<ApiExterna />} />
      </Routes>  
    <Footer />  
    </Container>      
    </Router>
  );
}

export default App;
