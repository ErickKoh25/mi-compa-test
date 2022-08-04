import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Box } from "../../../../components/Box";
import image from "../../../../assets/img/resource1.webp";
import tsuru from "../../../../assets/img/tsuru.webp";
import platina from "../../../../assets/img/platina.webp";
import atlas from "../../../../assets/img/segurosatlas.png";
import qualitas from "../../../../assets/img/qualitas.webp";
import { useAppContext } from "../../../../context/AppProvider";

const FirstContainer = () => {
  const images = [
    { src: qualitas, alt: "qualitas" },
    { src: atlas, alt: "seguros-atlas" },
  ];
  const { navigate } = useAppContext();
  const redirectHireHere = () => {
    if (navigate) {
      navigate("/hire-here");
    }
  };

  return (
    <Container className="first-block">
      <Row>
        <Col className="resources-block">
          <img
            alt="mi-compa-logo"
            src={tsuru}
            className="d-inline-block align-top img-tsuru"
          />
          <img
            alt="mi-compa-logo"
            src={platina}
            className="d-inline-block align-top img-platina"
          />
          <img
            alt="mi-compa-logo"
            src={image}
            className="d-inline-block align-top"
          />
        </Col>
      </Row>
      <Row>
        <Col className="content-hire-here">
          <Box
            className={"hire-here"}
            title="LAS ASEGURADORAS MÁS CHIDAS NOS RESPALDAN"
            titleButton={"CONTRATA AQUÍ"}
            action={redirectHireHere}
            images={images}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default FirstContainer;
