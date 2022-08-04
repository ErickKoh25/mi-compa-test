import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { When } from "react-if";
import { ArrayOfferProps } from "../../interfaces/components/OfferBox";
import { CardBox } from "../CardBox";

const OfferBox = ({ objectIcons }: ArrayOfferProps) => {
  return (
    <Container className="content-icons">
      <Row>
        <When condition={objectIcons && objectIcons.length > 0}>
          {objectIcons.map((item, i) => (
            <Col key={`item-${i}`} sm="3" md="4" lg="4">
              <CardBox index={`item-${i}`} item={item} />
            </Col>
          ))}
        </When>
      </Row>
    </Container>
  );
};

export default OfferBox;
