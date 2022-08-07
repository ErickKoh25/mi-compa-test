import axios from "axios";
import { endpoints } from "../constants/urls";

export const getByZipCodeAndField = (zipcode: string, field: string) => {
  const config = {
    method: "get",
    url: endpoints.dataByZipCodeAndField(zipcode, field),
  };
  return axios(config);
};

export const getStates = () => {
  const config = {
    method: "get",
    url: endpoints.states(),
    headers: {
      "Access-Control-Allow-Origin" : "*"
    }
  };
  return axios(config);
};

export const getAddress = () => {
  const config = {
    method: "get",
    url: endpoints.getAddress(),
    headers: {
      "Access-Control-Allow-Origin" : "*"
    }
  };
  return axios(config);
};

export const getAddressById = (id: string) => {
  const config = {
    method: "get",
    url: endpoints.getAddressById(id),
    headers: {
      "Access-Control-Allow-Origin" : "*"
    }
  };
  return axios(config);
};

export const postAddress = (data: any) => {
  const config = {
    method: "post",
    url: endpoints.postDataHireHere(),
    data,
    headers: {
      "Access-Control-Allow-Origin" : "*"
    }
  };
  return axios(config);
};

export const saveEditAddress = (data: any) => {
  console.log(data);
  const config = {
    method: "patch",
    url: endpoints.editAddress(data._id),
    data,
    headers: {
      "Access-Control-Allow-Origin" : "*"
    }
  };

  return axios(config);
};

export const deleteAddress = (id: string) => {
  const config = {
    method: "delete",
    url: endpoints.deleteAddress(id),
    headers: {
      "Access-Control-Allow-Origin" : "*"
    }
  };

  return axios(config);
};

export const authService = (data: object) => {
  const config = {
    method: "post",
    url: endpoints.login(),
    data,
    headers: {
      "Access-Control-Allow-Origin" : "*"
    }
  };

  return axios(config);
};
