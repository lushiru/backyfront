import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

export default function Home() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <h1>Home</h1>

      <Button variant="primary" onClick={handleShow}>
        Información
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement="bottom">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Informacion del sitio</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Esta Pagina web fue creada con react + bootstrap + una base de datos
          mongo db
          <br></br>
          <hr></hr>
          La api esta completa y muestra usuarios de una lista
          <br></br>
          <hr></hr>
          al final se agrego un aside barra lateral que muestra ultimos 5
          actualizaciones
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
