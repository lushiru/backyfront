import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";
import "./auto.css";

export default function ListaAutos() {
  const [autos, setAutos] = useState([]);

  useEffect(() => {
    const fetchAutos = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5001/api/automovil/ultimos"
        );
        setAutos(response.data);
      } catch (error) {
        console.error("Error al obtener los automoviles:", error);
      }
    };

    fetchAutos();
  }, []);

  return (
    <div className="aside">
      <h1>Ultimos autos</h1>

      <Table>
        <thead>
          <tr>
            <th>Imagenes</th>
          </tr>
        </thead>
        <tbody>
          {autos.map((auto) => (
            <tr key={auto._id}>
              <td>
                <Image
                  src={`http://localhost:5001/imagenes/${auto.imagen}`}
                  width="250px"
                  rounded
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
