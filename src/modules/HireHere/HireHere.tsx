import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { PositionProps } from "../../interfaces/components/GoogleMap";
import { FormContainer } from "./containers/FormContainer";
import { MapContainer } from "./containers/MapContainer";
import { initialValues } from "../../constants/schemas";
import showToast from "../../utils/notificationToast";
import { getAddressById } from "../../services/formRequest";

const HireHere = () => {
  let { id_address } = useParams();
  const [idAddress] = useState<string>(id_address ? id_address : "");
  const [editAddress] = useState<boolean>(id_address ? true : false);

  const [dataInitForm, setDataInitForm] = useState(initialValues);
  const [coords, setCoords] = useState<PositionProps>({
    lat: 21.1454957,
    lng: -101.6907868,
  });

  const getDataById = async (id: string) => {
    try {
      const response = await getAddressById(id);
      if (response.status === 200) {
        setDataInitForm(response.data[0]);
        if (response.data[0].coords.length > 0) {
          setCoords({
            lat: response.data[0].coords[1],
            lng: response.data[0].coords[0],
          });
        }
      }
    } catch (e) {
      showToast(
        "error",
        "Ha ocurrido un error al cargar la dirección, intente de nuevo"
      );
    }
  };

  useEffect(() => {
    if (idAddress !== "") {
      getDataById(idAddress);
    }
  }, [idAddress]);

  return (
    <div className="cont-hire-here">
      <Container>
        <Row>
          <Col sm="12" lg="6">
            <FormContainer
              idAddress={idAddress}
              editAddress={editAddress}
              setCoords={setCoords}
              coords={coords}
              initValues={dataInitForm}
            />
          </Col>
          <Col sm="12" lg="6">
            <MapContainer coords={coords} readOnly setCoords={setCoords} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HireHere;
