import React from "react";
import { Container, Row, Card } from "react-bootstrap";

import Carousel from "react-grid-carousel";
import {decoraciones} from '../../data/decoraciones'

import "./carruselProductos.css";

function CarruselProductos() {
  const data =decoraciones.Bouquets[0];



  return (
    <Container className="my-5">
      <Row className="mx-3 ">
h        <div className="linea-productos"></div>
      </Row>

      <Row>
        <Carousel cols={3} rows={1} gap={15} loop autoplay className="bg-secondary float-left  " >
          {data.productos.map((data)=>(
            <Carousel.Item className="bg-secondary mr-sm-4  " >
              <div style={{ width: "18rem",height:"32rem" }} className="">
                <Card.Img variant="top" src={data.src} />
                <Card.Body>
                  <Card.Title>{data.title}</Card.Title>
                  <Card.Text>{data.description}</Card.Text>
                </Card.Body>
              </div>
            </Carousel.Item>
          ))}
          {/* {data.productos.map((data) => (
            
          ))} */}
        </Carousel>
      </Row>
    </Container>
  );
}

export default CarruselProductos;
