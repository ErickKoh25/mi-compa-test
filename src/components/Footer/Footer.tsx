import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../../assets/img/micompalogo.webp";
import { IconsFooterProps } from "../../interfaces/components/Footer";
import {FOOTER_CONSTANTS} from "../../constants/constants"

const Footer = () => {
  const [icons] = useState<IconsFooterProps>(FOOTER_CONSTANTS)
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col sm="12" lg="4" className="footer-contact">
            <div>
              <span>
                <icons.phone />
              </span>
              (477) 206 8741
            </div>
            <div>
              <span>
                <icons.marker />
              </span>
              Av Paseo del Moral 221-3, Jardines del Moral, 37160. León, Gto.,
              México
            </div>
          </Col>
          <Col sm="12" lg="4" className="footer-logo">
            <img alt="logo-mi-compa" src={logo} />
            <div>AVISO DE PRIVACIDAD</div>
            <div>© 2021 by Mi Compa</div>
          </Col>
          <Col sm="12" lg="4" className="footer-social-media">
            <div>
              <span>
                <icons.fb />
              </span>
              <span>
                <icons.in />
              </span>
              <span>
                <icons.insta />
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
