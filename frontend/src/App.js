import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/menu/Menu';
import ListaAutos from './components/autos/ListaAutos';
import "./App.css"
import CrearAuto from './components/autos/CrearAuto';

function App() {
  return (
    <Router>
    <div className='container'>  
    <Menu />
      <Routes>
            <Route path="/" element={<ListaAutos />} />
            <Route path="/crearauto" element={<CrearAuto />} />
      </Routes>  
    </div>      
    </Router>
  );
}

export default App;
