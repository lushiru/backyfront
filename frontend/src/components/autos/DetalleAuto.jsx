import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

export default function DetalleAuto() {
  const { id } = useParams();
  const [imagen, setImagen] = useState(null);
  const [nombre, setNombre] = useState(null);
  const [descripcion, setDescripcion] = useState(null);
  const [anio, setAnio] = useState(null);
  const [color, setColor] = useState(null);

  useEffect(() => {
    const fetchAuto = async () => {
      try {
        const response = await fetch(
          `http://localhost:5001/api/automovil/${id}`
        );
        const data = await response.json();

        setImagen(`http://localhost:5001/imagenes/${data.imagen}`);
        setNombre(data.nombre);
        setDescripcion(data.descripcion);
        setAnio(data.anio);
        setColor(data.color);
      } catch (error) {
        console.error("Error al obtener hechizo:", error);
      }
    };

    fetchAuto();
  }, [id]);

  return (
    <div>
      <h1>Detalle Auto</h1>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={imagen} />
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>
            <ListGroup.Item>Descripción = {descripcion}</ListGroup.Item>
            <ListGroup.Item>Año = {anio}</ListGroup.Item>
            <ListGroup.Item>Color = {color}</ListGroup.Item>
          </Card.Text>
          <Button variant="outline-primary" href={`/editar/${id}`}>
            Editar
          </Button>{" "}
          <Button variant="outline-danger" href={`/eliminar/${id}`}>
            Eliminar
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
