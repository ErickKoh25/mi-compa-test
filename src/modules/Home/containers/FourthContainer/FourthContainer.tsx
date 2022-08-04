import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { OfferBox } from "../../../../components/OfferBox";
import { Title } from "../../../../components/Title";
import { BsBraces } from "react-icons/bs";
import { OfferBoxProps } from "../../../../interfaces/components/OfferBox";
import { BENEFITS_ICONS } from "../../../../constants/constants";
import { Tag } from "../../../../components/Tag";
import { ActionButton } from "../../../../components/ActionButton";
import { useAppContext } from "../../../../context/AppProvider";

const FourthContainer = () => {
  const [benefitsIcons] = useState<Array<OfferBoxProps>>(BENEFITS_ICONS);
  const { navigate } = useAppContext();
  const redirectHireHere = () => {
    if (navigate) {
      navigate("/hire-here");
    }
  };
  return (
    <>
      <Container className="cont-best-package">
        <Tag className="offer-tag" title="POR SOLO $249" />
        <Row>
          <Col lg="4" className="first-col">
            <div className="cont-title">
              <Title className="title-package" title="EL MEJOR PAQUETE" />
              <Title className="title-price" title="AL MEJOR PRECIO" />
            </div>
          </Col>
          <Col lg="8" className="cont-offer-box">
            <div className="after-icon">
              <BsBraces />
            </div>
            <OfferBox objectIcons={benefitsIcons} />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col lg="12" className="cont-btn-hire-here">
            <ActionButton
              type="button"
              className="action-btn"
              title="CONTRATA AQUÍ"
              action={redirectHireHere}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default FourthContainer;
