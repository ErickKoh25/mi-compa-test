import { Field, FieldProps, Form, Formik } from "formik";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
// import { useDispatch } from "react-redux";
import { useAppContext } from "../../../context/AppProvider";
import { ActionButton } from "../../../components/ActionButton";
import InputTextIcon from "../../../components/InputTextIcon/InputTextIcon";
import { LOGIN } from "../../../constants/constants";
import { formAuth, initValuesAuth } from "../../../constants/schemas";
import useLocalStorage from "../../../hooks/useLocalStorage";
import { setLogin } from "../../../redux/slices";
import { authService } from "../../../services/formRequest";
import showToast, { closeToast } from "../../../utils/notificationToast";
import { useDispatch } from "react-redux";

const FormContainer = () => {
  const { navigate } = useAppContext();
  const [token, setToken] = useLocalStorage("token", null);
  const dispatch = useDispatch();

  const handleSubmit = async (data: object) => {
    closeToast();
    try {
      let response = await authService(data);
      if (response.status === 201) {
        setToken(response.data.password);
        dispatch(
          setLogin({
            name: response.data.name,
            email: response.data.email,
            token: response.data.password,
          })
        );
        if (navigate) {
          navigate("/panel");
        }
      }
    } catch (e: any) {
      if (e.response.data.message === "USER_NOT_FOUND") {
        console.log("email no existe");
        showToast("error", "El email ingresado no existe");
      } else if (e.response.data.message === "PASSWORD_INCORRECT") {
        console.log("contraseña incorrecta");
        showToast("error", "Contraseña Incorrecta");
      }
    }
  };
  return (
    <div className="cont-login-form">
      <Formik
        initialValues={initValuesAuth}
        validationSchema={formAuth}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
      >
        {({ values, errors }) => (
          <Form>
            <Container className="cont-form-formik">
              <Row>
                <Col lg="12">
                  <Field name="email">
                    {({
                      field, // { name, value, onChange, onBlur }
                      form: { touched }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                      meta,
                    }: FieldProps) => (
                      <InputTextIcon
                        key={field.name}
                        field={{
                          label: "Email",
                          name: "email",
                          type: "text",
                          value: values.email,
                          placeholder: "Ingresa tu email",
                          hasError: errors.email !== undefined ? true : false,
                        }}
                        disabled={false}
                        onChange={field.onChange}
                        iconLeft={LOGIN.icons.email}
                        iconError={LOGIN.icons.error}
                        error={errors.email}
                      />
                    )}
                  </Field>
                </Col>
                <Col lg="12">
                  <Field name="password">
                    {({
                      field, // { name, value, onChange, onBlur }
                      form: { touched }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                      meta,
                    }: FieldProps) => (
                      <InputTextIcon
                        key={field.name}
                        field={{
                          label: "Password",
                          name: "password",
                          type: "password",
                          value: values.password,
                          placeholder: "Ingresa tu contraseña",
                          hasError:
                            errors.password !== undefined ? true : false,
                        }}
                        disabled={false}
                        onChange={field.onChange}
                        iconLeft={LOGIN.icons.password}
                        iconError={LOGIN.icons.error}
                        error={errors.password}
                      />
                    )}
                  </Field>
                </Col>
              </Row>
              <Row>
                <Col lg="12" className="cont-login-btn">
                  <ActionButton
                    type="submit"
                    title="Login"
                    className="form-btn"
                    disabled={false}
                  />
                </Col>
              </Row>
            </Container>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormContainer;
