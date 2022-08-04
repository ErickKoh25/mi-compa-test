import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AiTwotoneThunderbolt } from "react-icons/ai";
import { BiWinkSmile } from "react-icons/bi";
import { GiPayMoney } from "react-icons/gi";

const SecondContainer = () => {
  return (
    <div className="second-container">
      <Container>
        <Row>
          <Col sm="12" md="4" lg="4">
            <div className="content-icons">
              <GiPayMoney />
            </div>
            <label className="title-icons">Paga tu seguro en efectivo</label>
          </Col>
          <Col sm="12" md="4" lg="4">
            <div className="content-icons">
              <BiWinkSmile />
            </div>
            <label className="title-icons">Contrátalo a meses</label>
          </Col>
          <Col sm="12" md="4" lg="4">
            <div className="content-icons">
              <AiTwotoneThunderbolt />
            </div>
            <label className="title-icons">Contrata en tan solo 30 segundos</label>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SecondContainer;
