import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Container, Row } from "react-bootstrap";

export default function ContactForm() {
  return (
    <div>
      {" "}
      <Container className="d-flex flex-wrap border border-warning p-5 col-5 shadow p-3 mb-5 bg-white rounded">

        <Row>
          <h2>llena tus datos acontinucion</h2>
        </Row>
        <Row>
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque,
            vel voluptatum suscipit exercitationem non magnam est soluta earum
            voluptas nobis qui dicta ad atque deleniti officia sit, distinctio
            eum iste.{" "}
          </p>
        </Row>
        <Row className="gap-3">
          <TextField
            error
            id="standard-error-helper-text"
            label="Tu Nombre"
            defaultValue="Hello World"
            helperText="Incorrect entry."
            variant="standard"
          />
          <TextField
            error
            id="standard-error-helper-text"
            label="Correo Electronico"
            defaultValue="Hello World"
            helperText="Incorrect entry."
            variant="standard"
          />
          <TextField
            error
            id="standard-error-helper-text"
            label="Numero telefonico"
            defaultValue="Hello World"
            helperText="Incorrect entry."
            variant="standard"
          />
          <TextField
            id="outlined-multiline-static"
            label="Descripcion de tu peticion"
            multiline
            rows={4}
            defaultValue="Default Value"
          />
                  <Row className="col-12 d-flex  gap-3 justify-content-between">
          <Button className="col-5" variant="contained" color="error">Cerrar</Button>
          <Button className="col-5" variant="contained" color="success">Enviar</Button>
        </Row>
        </Row>

      </Container>
    </div>
  );
}
