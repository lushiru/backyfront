import { Link } from "react-router-dom";
import './Menu.css'



const Menu = () =>{
  return (
    <nav className="nav">
      <ul>
        <li> <Link to ="/" > Inicio </Link> </li>
        <li> <Link to ="/crearauto" > Crear Auto </Link> </li>
      </ul>

    </nav>
  )
}

export default Menu;