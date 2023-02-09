import React from "react";
import { Container } from "react-bootstrap";
import { CDBFooter, CDBFooterLink, CDBBtn, CDBIcon, CDBBox } from "cdbreact";
import logo from "../../accest/img/logo.png";

function Footer () {

    return (
      <Container fluid className="mt-5 bg-dark text-light" >
        <CDBFooter className="shadow "  >
          <CDBBox
            display="flex"
            flex="column"
            className="mx-auto py-5"
            style={{ width: "100%" }}
          >
            <CDBBox
              display="flex"
              justifyContent="center gap-5"
              className="flex-wrap "
            >
              <CDBBox>
                <a href="/" className="d-flex align-items-center p-0 text-dark">
                  <img alt="logo" src={logo} width="50px" />
                  <span className="ml-3 h5 font-weight-bold text-light">
                    KIMI Decoraciones
                  </span>
                </a>
                <p className="my-3" style={{ width: "250px" }}>
                  Almacén de regalos, detalles, decoramos y diseñamos el
                  ambiente que le desees regalar a esa persona especial
                </p>
              </CDBBox>
              <CDBBox>
                <p className="h5 mb-4 " style={{ fontWeight: "600" }}>
                  KIMI
                </p>
                <CDBBox
                  className="mx-5"
                  flex="column"
                  display="flex"
                  style={{ cursor: "pointer", padding: "0" }}
                >
                  <CDBFooterLink >Eventos</CDBFooterLink>
                  <CDBFooterLink >About Us</CDBFooterLink>
                  <CDBFooterLink >Contact</CDBFooterLink>
                  <CDBFooterLink >Accesorios</CDBFooterLink>
                </CDBBox>
              </CDBBox>
              <CDBBox>
                <p className="h5 mb-4" style={{ fontWeight: "600" }}>
                  Contatos
                </p>
                <CDBBox
                  className="mx-5 "
                  flex="column"
                  display="flex"
                  style={{ cursor: "pointer", padding: "0" }}
                >
                  <CDBFooterLink>
                    Dirrecion: Cl. 68a #111C-30, Bogotá, Colombia
                  </CDBFooterLink>
                  <CDBFooterLink>Tel: 350 4315123</CDBFooterLink>
                  <CDBBox
                    display="flex"
                    justifyContent="center"
                    style={{ width: "100%" }}
                    className="mx-auto mt-4"
                  >
                    <CDBBtn
                      flat
                      color="dark"
                      className="p-2 fs-4 bg-primary text-decoration-none"
                      href="https://www.facebook.com/profile.php?id=100076530120427"
                    >
                      <CDBIcon fab icon="facebook-f" />
                    </CDBBtn>
                    <CDBBtn
                      flat
                      color="dark"
                      className="mx-3 p-2 fs-4 bg-success text-decoration-none"
                      href="https://api.whatsapp.com/send?phone=3504135122&text=Buenos%20dias"
                    >
                      <CDBIcon fab icon="whatsapp" />
                    </CDBBtn>
                    <CDBBtn
                      flat
                      color="dark"
                      className="p-2 fs-4 bg-danger text-decoration-none"
                      href="https://www.instagram.com/fiestaskimi/"
                    >
                      <CDBIcon fab icon="instagram" />
                    </CDBBtn>
                  </CDBBox>
                </CDBBox>
              </CDBBox>

            </CDBBox>

            <small className="text-center mt-5">
              &copy; KIMI, 2022. All rights reserved.
            </small>
          </CDBBox>
        </CDBFooter>
      </Container>
    );
  }


export default Footer;
