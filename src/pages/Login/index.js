import React, { useState, useEffect } from "react";
import { Button } from "react-mazer-ui";
import { useNavigate } from "react-router-dom";
// import { doLogin } from "../../providers/auth";
import { routes_name } from "../../route/static_route";
import { clearSession, getSession, setSession } from "../../utils/session";
import { useSelector, connect } from "react-redux";
import { SESSION } from "../../utils/constants";
import { ALL_ACTION, REDUCER, USE_GLOBAL_STATE } from "../../redux";
import {doLogin} from "./store"
import GlobalLoadingBlock from "../../components/Loading";
function Login({dispatch}) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showDialog, setShowDialog] = useState(false);
  const state = useSelector((state) =>
    USE_GLOBAL_STATE(state[REDUCER.GLOBAL_REDUCER])
  );
  useEffect(() => {
    clearSession();
  }, []);
  return (
    <div id="auth">
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

            <div className="form-group position-relative has-icon-left mb-4">
              <input
                type="email"
                className="form-control form-control-xl"
                placeholder="Email"
                value={email}
                onChange={(val) => setEmail(val.target.value)}
              />
              <div className="form-control-icon">
                <i className="bi bi-envelope"></i>
              </div>
            </div>
            <div className="form-group position-relative has-icon-left mb-4">
              <input
                type="password"
                className="form-control form-control-xl"
                placeholder="Password"
                value={password}
                onChange={(val) => setPassword(val.target.value)}
              />
              <div className="form-control-icon">
                <i className="bi bi-shield-lock"></i>
              </div>
            </div>

            <Button
              status="primary"
              size="large"
              className="btn-block shadow-lg mt-5"
              label="Login"
              onClick={()=>doLogin({username:"a",password:"a"},dispatch)}
            />
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
