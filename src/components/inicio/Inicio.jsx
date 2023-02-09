import React from "react";
import Banner from "../bannerPagePrincipal/banner/banner";
import { Container, Row } from "react-bootstrap";
import CarruselProductos from "../carruselProductos/carruselProductos";
import { motion } from "framer-motion";
import ContactForm from "../ContactForm/ContactForm ";
import {makeStyles} from '@material-ui/core/styles'

function Inicio() {
  const UseStyles=makeStyles((theme)=>({
    modal:{
      position:"absolute",
      backgroundColor:"white",
      border:"2px solid black",
      boxShadow:theme.shadows[5],
      padding:theme.spacing(2,4,3,4),
      top:"50%",
      left:"50%",
      transform:"translate(-50%,-50%)",

    }
  }))



  return (
    <Container>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.2 } }}
      >
        <Row>
          <Banner />
        </Row>
        <Row className="visually-hidden">
          <div>
            <ContactForm />
          </div>
        </Row>
        <Row>
          <CarruselProductos />
        </Row>
      </motion.div>
    </Container>
  );
}

export default Inicio;
