import React, { useEffect, useRef, useState } from "react";
import { Formik, Form, Field, FieldProps, FormikProps } from "formik";
import { Title } from "../../../../components/Title";
import { Col, Container, Row } from "react-bootstrap";
import InputTextIcon from "../../../../components/InputTextIcon/InputTextIcon";
import { HIRE_HERE } from "../../../../constants/constants";
import { formSchema } from "../../../../constants/schemas";
import { ActionButton } from "../../../../components/ActionButton";
import InputSelect from "../../../../components/InputSelect";
import {
  getByZipCodeAndField,
  getStates,
  postAddress,
  saveEditAddress,
} from "../../../../services/formRequest";
import { StandaloneSearchBox, LoadScript } from "@react-google-maps/api";
import { env } from "../../../../config/config";
import {
  FormProps,
  initialProps,
} from "../../../../interfaces/components/FormProps";
import { geocoder } from "../../../../utils/googleMapFunctions";
import {
  closeToast,
  promiseToast,
} from "../../../../utils/notificationToast";
import { useAppContext } from "../../../../context/AppProvider";

const FormContainer = ({
  idAddress,
  editAddress,
  setCoords,
  coords,
  initValues,
}: FormProps) => {
  const [initVals, setInitVals] = useState<initialProps>(initValues);
  const [libraries] = useState(["places"]);
  const [states, setStates] = useState([]);
  const [settlements, setSettlements] = useState([]);
  const [municipalities, setMunicipalities] = useState([]);
  const [cities, setCities] = useState([]);
  const [countrys] = useState(HIRE_HERE.countrys);
  const searchRef = useRef<any>();
  const formikRef = useRef<FormikProps<initialProps>>(null);
  const [disabled, setDisabled] = useState(false);
  const { navigate } = useAppContext();
  const getDataStates = async () => {
    try {
      const response = await getStates();
      if (response.status === 200) {
        let states = response.data.map((state: any) => {
          return { value: state.states, name: state.states };
        });
        setStates(states);
      }
    } catch (e) {}
  };

  const getDataByZipcode = async (code: string, field: string) => {
    try {
      const response = await getByZipCodeAndField(code, field);
      if (response.status === 200) {
        if (response.data.length > 0) {
          let items = response.data.map((item: any) => ({
            value: item._id.value,
            name: item._id.name,
          }));
          if (field === "d_asenta") {
            setSettlements(items);
          } else if (field === "D_mnpio") {
            setMunicipalities(items);
          } else if (field === "d_ciudad") {
            setCities(items);
          }
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  const onPlacesChanged = async () => {
    const results = searchRef.current.getPlaces(); // get the selected place
    if (results[0]) {
      searchCoordsInGeocode(results[0].geometry.location);
    }
  };

  const searchCoordsInGeocode = async (location: any) => {
    let searchGeocoder = await geocoder(location);
    let address = searchGeocoder.results[0];

    let newAddress: initialProps = {
      street: "",
      external_number: "",
      internal_number: "",
      zipcode: "",
      settlement: "",
      municipality: "",
      city: "",
      state: "",
      country: "",
      coords: [],
    };

    if (address) {
      newAddress.coords = [location.lng(), location.lat()];

      if (setCoords) {
        setCoords({
          lat: location.lat(),
          lng: location.lng(),
        });
      }

      for (let i in address.address_components) {
        let components = address.address_components[i];
        for (let c in components.types) {
          switch (components.types[c]) {
            case "street_number":
              newAddress.external_number = components.long_name;
              break;
            case "route":
              newAddress.street = components.long_name;
              break;
            case "sublocality_level_1":
              newAddress.settlement = components.long_name;
              break;
            case "locality":
              newAddress.city = components.long_name;
              break;
            case "administrative_area_level_1":
              newAddress.state = components.long_name;
              break;
            case "country":
              newAddress.country = components.long_name;
              break;
            case "postal_code":
              newAddress.zipcode = components.long_name;
              break;
            default:
              break;
          }
        }
      }
    }
    setInitVals(newAddress);
  };

  const onSearchBoxLoad = (sb: any) => {
    searchRef.current = sb; // assignament of Search Box instance in the searchReaf
  };

  const handleSubmit = async (data: initialProps) => {
    closeToast();
    setDisabled(true);
    if (!editAddress) {
      saveAddress(data, postAddress);
    } else {
      data._id = idAddress;
      saveAddress(data, saveEditAddress);
    }
    setDisabled(false);
  };

  const saveAddress = async (data: object, saveFunction: Function) => {
    try {
      await promiseToast(saveFunction(data), {
        pending: {
          render() {
            let message = editAddress
              ? "Actualizado datos.."
              : "Enviando datos..";
            return message;
          },
        },
        success: {
          render({ data }) {
            resetForm();
            let message = editAddress
              ? "Datos actualizados correctamente, redirigiendo al panel.."
              : "Datos enviados correctamente";
            if (editAddress) redirectPanel();
            return message;
          },
        },
        error: {
          render() {
            return "Ha ocurrido un error, intente de nuevo";
          },
        },
      });
    } catch (e) {
      //showToast("error", "Ha ocurrido un error, intente de nuevo..");
    }
  };
  const resetForm = () => {
    setInitVals({
      street: "",
      external_number: "",
      internal_number: "",
      zipcode: "",
      settlement: "",
      municipality: "",
      city: "",
      state: "",
      country: "",
      coords: [],
    });
  };
  const redirectPanel = () => {
    setTimeout(() => {
      if (navigate) {
        navigate("/panel");
      }
    }, 1500);
  };
  useEffect(() => {
    getDataStates();
  }, []);

  useEffect(() => {
    if (initVals && initVals.zipcode.length === 5) {
      getDataByZipcode(initVals.zipcode, "d_asenta");
      getDataByZipcode(initVals.zipcode, "d_ciudad");
      getDataByZipcode(initVals.zipcode, "D_mnpio");
    }
  }, [initVals]);

  useEffect(() => {
    setInitVals(initValues);
  }, [initValues]);

  return (
    <div className="cont-hire-form">
      <Container>
        <Title
          className="title-form"
          title={`${
            editAddress ? "Editar Dirección" : "¡A UN PASO DE SER COMPA!"
          }`}
        />
        <Row>
          <Col sm="12" lg="12">
            <Formik
              key={`form-address`}
              innerRef={formikRef}
              initialValues={initVals}
              enableReinitialize={true}
              validationSchema={formSchema}
              onSubmit={(values) => {
                handleSubmit(values);
              }}
            >
              {({ values, errors }) => (
                <Form>
                  <Container>
                    <Row>
                      <Col lg="12">
                        <Field name="street">
                          {({
                            field, // { name, value, onChange, onBlur }
                            form: { touched }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                            meta,
                          }: FieldProps) => (
                            <LoadScript
                              googleMapsApiKey={env.mapsApiKey}
                              libraries={libraries}
                            >
                              <StandaloneSearchBox
                                onLoad={(sb: any) => onSearchBoxLoad(sb)} // Executed when the Standalone is initialized
                                onPlacesChanged={onPlacesChanged} // Executed everytime when a place has been selected.
                                bounds={{
                                  south: 14.3895,
                                  west: -118.6523001,
                                  north: 32.7186534,
                                  east: -86.5887,
                                }}
                              >
                                <InputTextIcon
                                  key={field.name}
                                  field={{
                                    label: "Calle principal",
                                    name: "street",
                                    type: "text",
                                    value: values.street,
                                    placeholder: "Ingresa tu dirección!",
                                    hasError:
                                      errors.street !== undefined
                                        ? true
                                        : false,
                                  }}
                                  disabled={false}
                                  onChange={field.onChange}
                                  iconLeft={HIRE_HERE.icons.street}
                                  iconError={HIRE_HERE.icons.error}
                                  error={errors.street}
                                />
                              </StandaloneSearchBox>
                            </LoadScript>
                          )}
                        </Field>
                      </Col>
                      <Col lg="6">
                        <Field name="external_number">
                          {({
                            field, // { name, value, onChange, onBlur }
                            form: { touched }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                            meta,
                          }: FieldProps) => (
                            <InputTextIcon
                              key={field.name}
                              field={{
                                label: "Número exterior",
                                name: "external_number",
                                type: "number",
                                value: values.external_number,
                                placeholder: "453",
                                hasError:
                                  errors.external_number !== undefined
                                    ? true
                                    : false,
                              }}
                              disabled={false}
                              onChange={field.onChange}
                              iconLeft={HIRE_HERE.icons.external}
                              iconError={HIRE_HERE.icons.error}
                              error={errors.external_number}
                            />
                          )}
                        </Field>
                      </Col>
                      <Col lg="6">
                        <Field name="internal_number">
                          {({
                            field, // { name, value, onChange, onBlur }
                            form: { touched }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                            meta,
                          }: FieldProps) => (
                            <InputTextIcon
                              key={field.name}
                              field={{
                                label: "Número interior",
                                name: "internal_number",
                                type: "number",
                                value: values.internal_number,
                                placeholder: "123",
                                hasError:
                                  errors.internal_number !== undefined
                                    ? true
                                    : false,
                              }}
                              disabled={false}
                              onChange={field.onChange}
                              iconLeft={HIRE_HERE.icons.internal}
                              iconError={HIRE_HERE.icons.error}
                              error={errors.internal_number}
                            />
                          )}
                        </Field>
                      </Col>
                      <Col lg="6">
                        <Field name="zipcode">
                          {({
                            field, // { name, value, onChange, onBlur }
                            form: { touched }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                            meta,
                          }: FieldProps) => (
                            <InputTextIcon
                              key={field.name}
                              field={{
                                label: "Código Postal",
                                name: "zipcode",
                                type: "number",
                                value: values.zipcode,
                                placeholder: "23242",
                                hasError:
                                  errors.zipcode !== undefined ? true : false,
                              }}
                              disabled={false}
                              onChange={field.onChange}
                              iconLeft={HIRE_HERE.icons.zipcode}
                              iconError={HIRE_HERE.icons.error}
                              error={errors.zipcode}
                            />
                          )}
                        </Field>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6">
                        <Field name="settlement">
                          {({
                            field, // { name, value, onChange, onBlur }
                            form: { touched }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                            meta,
                          }: FieldProps) => (
                            <InputSelect
                              key={field.name}
                              field={{
                                label: "Colonia",
                                name: "settlement",
                                type: "colonia",
                                value: values.settlement,
                                placeholder: "",
                                hasError:
                                  errors.settlement !== undefined
                                    ? true
                                    : false,
                              }}
                              options={settlements}
                              disabled={false}
                              onChange={field.onChange}
                              iconLeft={HIRE_HERE.icons.settlement}
                              iconRight={HIRE_HERE.icons.arrowDown}
                              iconError={HIRE_HERE.icons.error}
                              error={errors.settlement}
                            />
                          )}
                        </Field>
                      </Col>
                      <Col lg="6">
                        <Field name="municipality">
                          {({
                            field, // { name, value, onChange, onBlur }
                            form: { touched }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                            meta,
                          }: FieldProps) => (
                            <InputSelect
                              key={field.name}
                              field={{
                                label: "Municipio / Delegación",
                                name: "municipality",
                                type: "text",
                                value: values.municipality,
                                placeholder: "",
                                hasError:
                                  errors.municipality !== undefined
                                    ? true
                                    : false,
                              }}
                              options={municipalities}
                              disabled={false}
                              onChange={field.onChange}
                              iconLeft={HIRE_HERE.icons.municipality}
                              iconRight={HIRE_HERE.icons.arrowDown}
                              iconError={HIRE_HERE.icons.error}
                              error={errors.municipality}
                            />
                          )}
                        </Field>
                      </Col>
                      <Col lg="6">
                        <Field name="city">
                          {({
                            field, // { name, value, onChange, onBlur }
                            form: { touched }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                            meta,
                          }: FieldProps) => (
                            <InputSelect
                              key={field.name}
                              field={{
                                label: "Ciudad",
                                name: "city",
                                type: "text",
                                value: values.city,
                                placeholder: "",
                                hasError:
                                  errors.city !== undefined ? true : false,
                              }}
                              options={cities}
                              disabled={false}
                              onChange={field.onChange}
                              iconLeft={HIRE_HERE.icons.city}
                              iconRight={HIRE_HERE.icons.arrowDown}
                              iconError={HIRE_HERE.icons.error}
                              error={errors.city}
                            />
                          )}
                        </Field>
                      </Col>
                      <Col lg="6">
                        <Field name="state">
                          {({
                            field, // { name, value, onChange, onBlur }
                            form: { touched }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                            meta,
                          }: FieldProps) => (
                            <InputSelect
                              key={field.name}
                              field={{
                                label: "Estado",
                                name: "state",
                                type: "text",
                                value: values.state,
                                placeholder: "",
                                hasError:
                                  errors.state !== undefined ? true : false,
                              }}
                              options={states}
                              disabled={false}
                              onChange={field.onChange}
                              iconLeft={HIRE_HERE.icons.state}
                              iconRight={HIRE_HERE.icons.arrowDown}
                              iconError={HIRE_HERE.icons.error}
                              error={errors.state}
                            />
                          )}
                        </Field>
                      </Col>
                      <Col lg="6">
                        <Field name="country">
                          {({
                            field, // { name, value, onChange, onBlur }
                            form: { touched }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                            meta,
                          }: FieldProps) => (
                            <InputSelect
                              field={{
                                label: "País",
                                name: "country",
                                type: "text",
                                value: values.country,
                                placeholder: "",
                                hasError:
                                  errors.country !== undefined ? true : false,
                              }}
                              options={countrys}
                              iconLeft={HIRE_HERE.icons.country}
                              iconRight={HIRE_HERE.icons.arrowDown}
                              error={errors.country}
                              iconError={HIRE_HERE.icons.error}
                              disabled={false}
                              onChange={field.onChange}
                            />
                          )}
                        </Field>
                      </Col>
                    </Row>
                  </Container>
                  <div className="cont-form-btn">
                    <ActionButton
                      type="submit"
                      title={`${editAddress ? "Guardar cambios" : "Enviar"}`}
                      className="form-btn"
                      disabled={disabled}
                    />
                  </div>
                </Form>
              )}
            </Formik>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FormContainer;
