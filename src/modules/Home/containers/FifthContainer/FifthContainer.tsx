import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { When } from "react-if";
import { Title } from "../../../../components/Title";
import { NEWS_PAPERS } from "../../../../constants/constants";

const FifthContainer = () => {
  const [newsPapers] = useState(NEWS_PAPERS);
  return (
    <div className="fifth-container">
      <Container>
        <Row>
          <Col lg="12">
            <Title title="ELLOS HABLAN DE MI COMPA" className="title-compas" />
          </Col>
        </Row>
        <Row>
          <Col lg="12" className="cont-img-news">
            <When condition={newsPapers && newsPapers.length > 0}>
              {newsPapers.map((item) => (
                <img className="img-news-papers" key={item.alt} alt={item.alt} src={item.image} />
              ))}
            </When>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FifthContainer;
