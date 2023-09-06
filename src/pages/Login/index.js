import React, { useState, useEffect } from "react";
import { Button } from "react-mazer-ui";
import { useNavigate } from "react-router-dom";
import { clearSession, getSession, setSession } from "../../utils/session";
import { useSelector, connect,useDispatch } from "react-redux";
import { ALL_ACTION, REDUCER, USE_GLOBAL_STATE } from "../../redux";
import { useForm } from "react-hook-form";
// import { doLogin } from "./store";
import { GlobalLoadingBlock, CustomInput } from "../../components";
import { LOGIN_FORM_SCHEMA } from "./store/schema_form";
import useValidationSchema from "../../utils/resolver";
import { LOGIN_ACTION } from "./store";
import { showToast } from "../../utils/global_store";
function Login({dispatch}) {
  const navigate = useNavigate();
  const resolver = useValidationSchema(LOGIN_FORM_SCHEMA);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver });
  
  const state = useSelector((state) =>
    USE_GLOBAL_STATE(state[REDUCER.GLOBAL_REDUCER])
  );
  useEffect(() => {
    console.log(LOGIN_FORM_SCHEMA);
    clearSession();
  }, []);
  
  const doLogin = async form => {
  console.log(form);
  // dispatch({ type: ALL_ACTION.GLOBAL_ACTION.GLOBAL_LOADING_TRUE });
  // dispatch({ type: LOGIN_ACTION.LOGIN_REQUEST });
  // try {
  //   console.log(form);
  //   const resp = { hoax: "name" }; // FOR API
  //   dispatch({ type: LOGIN_ACTION.LOGIN_SUCCESS, payload: resp });
  // } catch (error) {
  //   showToast({ message: error.message, type: "error" });
  //   dispatch({ type: LOGIN_ACTION.LOGIN_FAILED, payload: error });
  // }
  // showToast({message:"hohohoho"})
  // setTimeout(() => {
  //   dispatch({ type: ALL_ACTION.GLOBAL_ACTION.GLOBAL_LOADING_FALSE });
  // }, 4000);
  };
  return (
    <div id="auth">
      {console.log(errors)}
      {state.is_loading && <GlobalLoadingBlock />}
      <div className="row h-100">
        <div className="col-lg-5 col-12">
          <div id="auth-left">
            <div className="auth-logo">
              <a href="index.html">
                {/* <img src="assets/images/logo/logo.png" alt="Logo"/> */}
                {/* Logo */}
              </a>
            </div>
            <h1 className="auth-title">Log in.</h1>

            <form>
              <CustomInput
                type="email"
                control={control}
                placeholder="Email"
                classname="form-control"
                name="email"
                required={true}
                label="Email"
                errors={errors.email}
                id="email"
                />
              <CustomInput
                type="password"
                control={control}
                placeholder="Password"
                classname="form-control validate-error"
                name="password"
                required={true}
                errors={errors.password}
                label="Password"
                id="password"
              />

              <Button
                status="primary"
                size="large"
                className="btn-block shadow-lg mt-5"
                label="Login"
                type="button"
                onClick={handleSubmit(doLogin)}
              />
            </form>
          </div>
        </div>
        <div className="col-lg-7 d-none d-lg-block">
          <div id="auth-right"></div>
        </div>
      </div>
    </div>
  );
}

export default connect()(Login);
