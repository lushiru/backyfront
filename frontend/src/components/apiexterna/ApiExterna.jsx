import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import axios from "axios";
import Button from "react-bootstrap/Button";

export default function ApiExterna() {
  const [picture, setPicture] = useState("");
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [cell, setCell] = useState("");

  useEffect(() => {
    const fetch = async () => {
      try {
        const ruta = "https://randomuser.me/api/";
        const response = await axios.get(ruta);
        if (response) {
          const res = response.data.results[0];
          setNombre(res.name.first + " " + res.name.last);
          setEmail(res.email);
          setCell(res.cell);
          setPicture(res.picture.large);
        }
      } catch (error) {
        console.error("Error al obtener dato api externa:", error);
      }
    };
    fetch();
  }, []);

  return (
    <div>
      <h1>Api Externa random usuario</h1>

      <Card style={{ width: "16rem" }}>
        <Card.Img variant="top" src={picture} />
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>
            <ListGroup.Item>Email = {email}</ListGroup.Item>
            <ListGroup.Item>cell = {cell}</ListGroup.Item>
          </Card.Text>
        </Card.Body>
      </Card>
      <Button variant="outline-primary" href="/apiexterna">
        Siguiente
      </Button>
    </div>
  );
}
