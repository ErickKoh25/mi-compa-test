import { env } from "../config/config";
console.log(env)
const { api } = env
export const endpoints = {
    states: () => `${api}states`,
    dataByZipCodeAndField: (zipcode: string, field: string) => `${api}zipcodes/code/${zipcode}/${field}`,
    getAddress: () => `${api}directions`,
    getAddressById: (id:string) => `${api}directions/${id}`,
    postDataHireHere: () => `${api}directions`,
    deleteAddress: (id: string) => `${api}directions/${id}`,
    editAddress: (id: string) => `${api}directions/${id}`,
    login: () => `${api}auth/login`
};