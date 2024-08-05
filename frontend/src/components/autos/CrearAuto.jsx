import { useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./auto.css";
import axios from "axios";

export default function CrearAuto() {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [anio, setAnio] = useState("");
  const [color, setColor] = useState("");
  const [imagen, setImagen] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const nuevoAuto = new FormData();
      nuevoAuto.append("nombre", nombre);
      nuevoAuto.append("descripcion", descripcion);
      nuevoAuto.append("anio", anio);
      nuevoAuto.append("color", color);
      nuevoAuto.append("imagen", imagen);

      const data = await axios.post(
        "http://localhost:5001/api/automovil",
        nuevoAuto,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (data) {
        window.location.href = "/";
      }
    } catch (error) {
      console.error("Error al crear el auto:", error);
    }
  };

  return (
    <div>
      <h1>Formulario Crear Auto</h1>
      <Form onSubmit={handleSubmit} encType={"multipart/form-data"}>
        <Row>
          <Col sm={8} lg={6}>
            <Form.Group className="mb-3">
              <Form.Label>Nombre Auto</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nombre auto"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                autoComplete="off"
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col sm={8} lg={6}>
            <Form.Group className="mb-3">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                type="text"
                placeholder="Descripción"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                autoComplete="off"
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col sm={8} lg={6}>
            <Form.Group className="mb-3">
              <Form.Label>Año</Form.Label>
              <Form.Control
                type="number"
                placeholder="Año"
                value={anio}
                onChange={(e) => setAnio(e.target.value)}
                autoComplete="off"
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col sm={8} lg={6}>
            <Form.Group className="mb-3">
              <Form.Label>Color</Form.Label>
              <Form.Control
                type="text"
                placeholder="Color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                autoComplete="off"
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col sm={8} lg={6}>
            <Form.Group className="mb-3">
              <Form.Label>Imagen</Form.Label>
              <Form.Control
                type="file"
                name="imagen"
                onChange={(e) => setImagen(e.target.files[0])}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col sm={8} lg={6}>
            <Button variant="primary" type="submit">
              Crear Auto
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
