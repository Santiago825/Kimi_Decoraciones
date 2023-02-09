import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

import Slideshow from "../Slideshow/slideshow";
import "./banner.css";

const collection = [
  {
    src: "https://raw.githubusercontent.com/Santiago825/villaplast/main/src/img/fiestaskimi-20221130-0013.jpg",
  },
  {
    src: "https://raw.githubusercontent.com/Santiago825/villaplast/main/src/img/fiestaskimi-20221130-0012.webp",
  },
  {
    src: "https://raw.githubusercontent.com/Santiago825/villaplast/main/src/img/fiestaskimi-20221130-0011.jpg",
  },
  {
    src: "https://raw.githubusercontent.com/Santiago825/villaplast/main/src/img/fiestaskimi-20221130-0014.jpg",
  },
];

class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container className="d-flex flex-wrap justify-content-center gap-5">
        <Col className="d-flex flex-wrap align-items-center   " xs={10} xl={5}>
          <Row className="align-items-center  ">
            <h1 className="tittle">
              EL MEJOR REGALO PARA TU PERSONA ESPECIAL{" "}
            </h1>
            <p className=" mt-5 fw-bold text-warning fs-5">
              Fiestas KIMI te trae estás súper decoraciones, nos adaptamos a tu
              presupuesto y tú gusto
            </p>
            <div className="d-flex justify-content-center mt-3">

              <Button className=" fs-5 " variant="contained" color="warning" endIcon={<SendIcon />}>
                Contactanos
              </Button>
            </div>
          </Row>
        </Col>
        <Col xs={12} xl={6}>
          <Slideshow
            input={collection}
            ratio={`4:2`}
            mode={`automatic`}
            timeout={`3000`}
          />
        </Col>
      </Container>
    );
  }
}

export default Banner;
