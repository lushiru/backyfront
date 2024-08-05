import React from "react";
import Button from "react-bootstrap/Button";
import "./auto.css";
import { useParams } from "react-router-dom";

export default function EliminarAuto() {
  const { id } = useParams();

  const handleDelete = async () => {
    try {
      const response = await fetch(
        `http://localhost:5001/api/automovil/${id}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        window.location.href = "/";
      } else {
        console.error("Error al eliminar auto");
      }
    } catch (error) {
      console.error("Error al eliminar automovil:", error);
    }
  };

  const handleVolver = () => {
    window.location.href = "/";
  };

  return (
    <div>
      <h1>Eliminar Auto</h1>
      <p>Esta Seguro de Eliminar auto?</p>
      <Button variant="primary" type="button" onClick={handleDelete}>
        Si
      </Button>{" "}
      <Button variant="outline-danger" type="button" onClick={handleVolver}>
        No
      </Button>
    </div>
  );
}
