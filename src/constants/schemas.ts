/* eslint-disable import/prefer-default-export */
import * as Yup from "yup";
const regExp = /\b\d{5}\b/;
export const initialValues = {
  street: "",
  external_number: "",
  internal_number: "",
  zipcode: "",
  settlement: "",
  municipality: "",
  city: "",
  state: "",
  country: "",
  coords: [21.1455737,-101.6909461]
};

export const initValuesAuth = {
  email: "",
  password: "",
}
const errorText = {
  minMount: " El monto es muy corto",
  emptyMount: " Requerido",
  zipcode: "Máximo 5 dígitos",
  required: "Requerido",
  numberTypeError: "Debe ingresar un número"
};

export const formSchema = Yup.object().shape({
  street: Yup.string().nullable(true).required(errorText.required),
  external_number: Yup.string().nullable(true).required(errorText.required),
  internal_number: Yup.string().nullable(true),
  zipcode: Yup.string().nullable(true).matches(regExp, { message: 'Debe ingresar 5 carácteres' }).required(errorText.required),
  settlement: Yup.string().nullable(true).required(errorText.required),
  municipality: Yup.string().nullable(true).required(errorText.required),
  city: Yup.string().nullable(true).required(errorText.required),
  state: Yup.string().nullable(true).required(errorText.required),
  country: Yup.string().nullable(true).required(errorText.required),
});

export const formAuth = Yup.object().shape({
  email: Yup.string().nullable(true).email('Email inválido').required(errorText.required),
  password: Yup.string().nullable(true).min(6, "Minimo 6 carácteres").max(12,"Máximo 12 carácteres").required(errorText.required)
});
