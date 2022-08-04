import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { If, Then, When } from "react-if";
import { BoxProps } from "../../interfaces/components/BoxProps";
import { ActionButton } from "../ActionButton";

const Box = ({
  className,
  title,
  titleButton,
  text,
  action,
  images,
}: BoxProps) => {
  return (
    <Card className={className}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <When condition={text}>
          <Card.Text>{text}</Card.Text>
        </When>
        <When condition={images !== undefined && images?.length > 0}>
          <Container>
            <Row>
              {images?.map((img, i) => (
                <Col
                  key={`Col-${i}`}
                  sm="12"
                  md="12"
                  lg="6"
                  className="content-img"
                >
                  <img
                    key={`${img.alt}-${i}`}
                    alt={img.alt}
                    src={img.src}
                    className="d-inline-block align-top img-box"
                  />
                </Col>
              ))}
            </Row>
          </Container>
        </When>
        <If condition={action && titleButton}>
          <Then>
            <ActionButton
              type="button"
              className="action-btn"
              title={titleButton}
              action={action}
            />
          </Then>
        </If>
      </Card.Body>
    </Card>
  );
};
export default Box;
