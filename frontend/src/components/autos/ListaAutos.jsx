import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import "./auto.css";

export default function ListaAutos() {
  const [autos, setAutos] = useState([]);

  useEffect(() => {
    const fetchAutos = async () => {
      try {
        const response = await axios.get("http://localhost:5001/api/automovil");
        setAutos(response.data);
      } catch (error) {
        console.error("Error al obtener los automoviles:", error);
      }
    };

    fetchAutos();
  }, []);

  return (
    <div>
      <h1>Lista autos</h1>

      <Table striped="columns" responsive>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>año</th>
            <th>color</th>
            <th>Imagen</th>
            <th>Detalle</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {autos.map((auto) => (
            <tr key={auto._id}>
              <td>{auto.nombre}</td>
              <td>{auto.descripcion}</td>
              <td>{auto.anio}</td>
              <td>{auto.color}</td>
              <td>{auto.imagen}</td>
              <td>
                <Link to={`/detalle/${auto._id}`}>Ver Detalle</Link>
              </td>
              <td>
                <Link to={`/editar/${auto._id}`}>Editar</Link>
              </td>
              <td>
                <Link to={`/eliminar/${auto._id}`}>Eliminar</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
