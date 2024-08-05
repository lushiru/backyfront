import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/menu/Menu';
import ListaAutos from './components/autos/ListaAutos';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./App.css"
import CrearAuto from './components/autos/CrearAuto';
import Footer from './components/footer/Footer';
import DetalleAuto from './components/autos/DetalleAuto';
import EditarAuto from './components/autos/EditarAuto';
import EliminarAuto from './components/autos/EliminarAuto';
import Home from './components/home/Home';
import ApiExterna from './components/apiexterna/ApiExterna';
import UltimosAutos from "./components/autos/UltimosAutos";

function App() {
  return (
    <Router>
    <Container fluid>  
    <Menu />
      <Row>
      <Col sm={8}>  
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/listaautos" element={<ListaAutos />} />
            <Route path="/crearauto" element={<CrearAuto />} />
            <Route path="/detalle/:id" element={<DetalleAuto />} />
            <Route path="/editar/:id" element={<EditarAuto />} />
            <Route path="/eliminar/:id" element={<EliminarAuto />} />
            <Route path="/apiexterna" element={<ApiExterna />} />
      </Routes>
      </Col>
      <Col sm={4}> <UltimosAutos /> </Col>
      </Row>  
    <Footer />  
    </Container>      
    </Router>
  );
}

export default App;
