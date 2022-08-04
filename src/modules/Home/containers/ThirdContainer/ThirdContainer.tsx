import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import flag from "../../../../assets/img/bandera.webp";
import micomparespalda from "../../../../assets/img/micomparespalda.webp";
import { Title } from "../../../../components/Title";

const ThirdContainer = () => {
  return (
    <div className="third-container">
      <Container>
        <Row>
          <Col sm="12" md="6" className="cont-flag">
            <div>
              <img src={flag} alt="bandera-mi-compa" />
            </div>
            <div>
              <img src={micomparespalda} alt="mi-compa-respalda" />
            </div>
          </Col>
          <Col sm="12" md="6" className="text-info">
            <Title
              title="MÁS DE 4,000 PÓLIZAS VENDIDAS"
              className="title-polizas"
            />
            <p>
              Somos representantes de muchas aseguradoras cuyo objetivo es
              ofrecer seguros para autos sin importar el modelo o si son
              legalizados. Ofrecemos servicio en todo el país.
            </p>
            <p>
              Estamos dispuestos a explicarte hasta que no queden dudas para que
              contrates tu seguro con toda la información que necesites, lo que
              más nos importa es que no gastes altas cantidades de dinero en
              licenciados, ni en pagar los daños a los carros de otras personas.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ThirdContainer;
