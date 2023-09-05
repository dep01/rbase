import * as yup from "yup";

export const LOGIN_FORM_SCHEMA = {
  username: yup.string().required("Required"),
  password: yup.string().required("Required"),
};