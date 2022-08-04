import React, { useEffect, useState } from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import { Else, If, Then, When } from "react-if";
import { CardAddress } from "../../../../components/CardAddress";
import { initialProps } from "../../../../interfaces/components/FormProps";
import { useAppContext } from "../../../../context/AppProvider";
import showToast, { promiseToast } from "../../../../utils/notificationToast";
import { deleteAddress } from "../../../../services/formRequest";
import useFetchAddressList from "../../../../hooks/useFetchAddressList";
import { CardSkeleton } from "../../../../components/CardSkeleton";
import { Title } from "../../../../components/Title";

const CardContainer = () => {
  const {
    data: dataFetch,
    loading: loadingListFetch,
    error: errorListFetch,
  } = useFetchAddressList();

  const [cardsData, setCardsData] = useState<Array<initialProps>>([]);
  const [loading, setLoading] = useState(true)
  const [show, setShow] = useState(false);
  const [addressSelectd, setAddressSelected] = useState<string>("");
  const [arraySkeleton] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);

  const { navigate } = useAppContext();

  useEffect(() => {
    if (dataFetch && dataFetch.length > 0) {
      setTimeout(() => {
        setCardsData(dataFetch);
        setLoading(loadingListFetch)
      }, 1500);
    }
  }, [dataFetch]);

  const redirectEditAddress = (id: string) => {
    if (navigate) {
      navigate(`/panel/edit-address/${id}`);
    }
  };
  const removeAddress = async (id: string) => {
    try {
      await promiseToast(deleteAddress(id), {
        pending: {
          render() {
            return "Eliminando dirección";
          },
        },
        success: {
          render({ data }) {
            setShow(false);
            setCardsData(cardsData.filter((c) => c._id !== id));
            return "Dirección eliminada correctamente";
          },
        },
        error: {
          render() {
            return "Ha ocurrido un error, intente de nuevo";
          },
        },
      });
    } catch (e) {
      showToast("error", "No se pudo realizar la acción, intente de nuevo");
    }
  };

  useEffect(() => {
    if (errorListFetch) {
      showToast(
        "error",
        "Ha ocurrido un error al cargar las direcciones, recargue la página.."
      );
    }
  }, [errorListFetch]);
  return (
    <>
      <div className="card-container">
        <Container>
          <Row>
            <When condition={loading}>
              {arraySkeleton.map((item) => (
                <Col key={`col-skeleton-${item}`} sm="12" lg="3">
                  <CardSkeleton key={`skeleton-${item}`} />
                </Col>
              ))}
            </When>

            <If condition={cardsData && cardsData.length > 0}>
              <Then>
                {cardsData.map((item: initialProps, i: number) => (
                  <Col key={i} lg="3">
                    <CardAddress
                      address={item}
                      editAddress={() => {
                        if (item._id) {
                          redirectEditAddress(item._id);
                        }
                      }}
                      removeAddress={() => {
                        setShow(true);
                        if (item._id) {
                          setAddressSelected(item._id);
                        }
                      }}
                    />
                  </Col>
                ))}
              </Then>
              <Else>
                <When condition={!loading && cardsData.length === 0}>
                  <Title
                    className=""
                    title="No hay direcciones registradas"
                  ></Title>
                </When>
              </Else>
            </If>
          </Row>
        </Container>
      </div>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header>
          <Modal.Title>
            ¿Está seguro que desea eliminar esta dirección?
          </Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Container>
            <Row>
              <Col lg="6">
                <Button
                  variant="primary"
                  onClick={() => {
                    removeAddress(addressSelectd);
                  }}
                >
                  Eliminar
                </Button>
              </Col>
              <Col lg="6">
                <Button variant="secondary" onClick={() => setShow(false)}>
                  Cancelar
                </Button>
              </Col>
            </Row>
          </Container>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CardContainer;
