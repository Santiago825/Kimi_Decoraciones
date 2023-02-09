import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AboutImg from "../../../accest/img/aboutLogo.png";
import Map from "../../mapa/Map";
import { motion } from "framer-motion";
import imageVenta from "../../../accest/img/imagen_lugar_venta.jpg";
import {
  RiHandHeartLine,
  RiCake2Line,
  RiCheckDoubleLine,
} from "react-icons/ri";
import "./BannerAbout.css";

function BannerAbout() {
  const mapUrl=`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAo-Iq5F1RoobPRsVRBNF_8wT6e5j9F4h4`
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
      className="mb-5 d-flex flex-wrap justify-content-center col-12    "
    >
      {/* banner principal */}
      <div className="col-lg-8 mx-3 mx-md-4 mx-lg-5 px-5 d-flex flex-wrap mb-5   ">
        <Row>
          <h1 className="d-flex justify-content-start title_principal">Sobre Nosotros</h1>
        </Row>
        <Row>
          <div className="mt-3 col-12 d-flex flex-wrap">
            <div className=" col-sm-12  col-md-6 col-lg-6 d-flex justify-content-center align-items-center">
              <h3 >
                <spa  className="fs-1 text-warning fw-bold">¡Hola!</spa> Gusto
                en conocerte, estámos aqui para ayudarte, asesorarte en todo lo
                que necesites Somos grandes distribuidores en piñateria,
                productos de decoracion y Realizamos decoraciónes para todo tipo
                de evento.
              </h3>
            </div>
            <div className="col-sm-11 col-md-6 col-lg-6 ">
              <img
                alt="logoAbout"
                src={AboutImg}
                className="col-sm-5 col-lg-12 col-md-12 image_principal"
              />
            </div>
          </div>
        </Row>
      </div>

      {/* quienes somos */}
      <div
        style={{ boxShadow: "2px 26px 41px 14px rgba(0,0,0,0.75" }}
        className="container-fluid bg-dark p-lg-5 mb-5  "
      >
        <div className="col-lg-12  d-flex flex-wrap justify-content-between text-white">
          <div className="col-lg-6 col-12  col-md-6  text-start ">
            <Row>
              <h2 className="px-5 pr-4 pt-5 fs-1 tittle ">Quienes Somos ?</h2>
            </Row>
            <Row>
              <p className="px-5  text-abouUs">
                Somos una empresa dedicada a la creación de decoraciones
                personalizadas para eventos especiales. Ofrecemos una amplia
                variedad de opciones para hacer de su bautizo, graduación,
                cumpleaños, primera comunión, 15 años o cualquier otro evento,
                una ocasión inolvidable. Nuestro equipo de diseñadores y
                decoradores trabajan de cerca con nuestros clientes para
                entender sus necesidades y deseos, y crear una decoración única
                y especial que refleje su personalidad y estilo. Desde la
                selección de colores y materiales hasta la disposición de los
                elementos en el espacio, nos aseguramos de que cada detalle esté
                cuidadosamente planificado y ejecutado. Nuestro objetivo es
                ayudar a nuestros clientes a celebrar sus momentos más
                importantes de una manera mágica y memorable. Con nuestras
                decoraciones personalizadas, usted puede sentirse seguro de que
                su evento será un éxito y que sus invitados quedarán
                impresionados. Si está buscando una empresa confiable y
                profesional para decorar su próximo evento, ¡no busque más!
                Contáctenos para discutir cómo podemos ayudarlo a hacer de su
                ocasión especial un sueño hecho realidad.
              </p>
            </Row>
          </div>
          <div className="col-lg-6  col-12 col-md-2 d-flex justify-content-center pb-5 ">
            <img  className="imagen_Negocio" src={imageVenta} alt="" />
          </div>
        </div>
      </div>

      {/* mision y mision */}
      <div
        className="col-11  d-flex flex-wrap gap-5 justify-content-center bg-dark px-3 py-5 rounded-5  text-white   mt-5 mx-3 mb-5   "
        style={{ boxShadow: "2px 26px 41px 14px rgba(0,0,0,0.75" }}
      >
        {/* valores */}
        <div className="col-lg-3 d-flex rounded-5 p-3 justify-content-start  align-items-center border border border-warning  ">
          <div className="col-lg-4  text-warning ">
            <RiHandHeartLine style={{ fontSize: "80px" }} className="" />
          </div>
          <div className="col-8 text-start px-3">
            <h3 className="text-warning fs-5 ">Nuestros valores</h3>
            <p className="cards-Valores">
              Nuestra máxima seña de identidad es el servicio, la calidad, la
              garantía y la atención a nuestros clientes. Para nosotros es lo
              más importante y sin ellos no tendría sentido seguir adelante en
              este mundo tan apasionante del juguete.
            </p>
          </div>
        </div>

        {/* valores */}
        <div className="col-lg-3 d-flex rounded-5 p-3 justify-content-start  align-items-center border border border-warning  ">
          <div className="col-lg-4  text-warning ">
            <RiCake2Line style={{ fontSize: "80px" }} className="" />
          </div>
          <div className="col-8 text-start px-3">
            <h3 className="text-warning fs-5 ">Servicio personalizados</h3>
            <p className="cards-Valores">
              Es por eso que ofrecemos el mejor servicio, el mejor producto y
              atendemos todas las demandas que nos hagan llegar nuestros
              clientes. Intentado conseguir su mayor satisfacción y que sientan
              su importancia para nosotros en cada momento.
            </p>
          </div>
        </div>
        {/* valores */}
        <div className="col-lg-3 d-flex rounded-5 p-3 justify-content-start  align-items-center border border border-warning  ">
          <div className="col-lg-4  text-warning ">
            <RiCheckDoubleLine style={{ fontSize: "80px" }} className="" />
          </div>
          <div className="col-8 text-start px-3">
            <h3 className="text-warning fs-5 ">Nuestros valores</h3>
            <p className="cards-Valores">
              Nuestra máxima seña de identidad es el servicio, la calidad, la
              garantía y la atención a nuestros clientes. Para nosotros es lo
              más importante y sin ellos no tendría sentido seguir adelante en
              este mundo tan apasionante del juguete.
            </p>
          </div>
        </div>
      </div>

   
    </motion.div>
  );
}

export default BannerAbout;
