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
          Tendra acceso una api externa ...
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
