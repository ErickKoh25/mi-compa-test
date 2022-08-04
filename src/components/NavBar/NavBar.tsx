import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../assets/img/micompalogo.webp";
import { NavLink } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage";
import { Else, If, Then } from "react-if";
import { useAppContext } from "../../context/AppProvider";
import { useDispatch, useSelector } from "react-redux";
import { removeLogin } from "../../redux/slices";
import { selectGeneral } from "../../redux/store";

const NavBar = () => {
  const [token, setToken] = useLocalStorage("token", null);
  const {
    login: { token: tokenRedux },
  } = useSelector(selectGeneral);
  const dispatch = useDispatch();
  const { navigate } = useAppContext();

  const logout = () => {
    setToken(null);
    dispatch(removeLogin());
    if (navigate) {
      navigate("/");
    }
  };
  return (
    <Navbar collapseOnSelect fixed="top" expand="lg" bg="light" variant="light">
      <Container>
        <NavLink to="">
          <Navbar.Brand href="#home" className="navbar-brand">
            <img
              alt="mi-compa-logo"
              src={logo}
              className="d-inline-block align-top"
            />
            <label>Seguros</label>
          </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <If condition={token || tokenRedux}>
              <Then>
                <NavLink to="" className="nav-link">
                  Inicio
                </NavLink>
                <NavLink to="panel" className="nav-link">
                  Panel
                </NavLink>
                {/* <NavLink to="">Logout</NavLink> */}
                <Nav.Link onClick={logout} className="nav-link">
                  {" "}
                  Logout{" "}
                </Nav.Link>
              </Then>
              <Else>
                <NavLink to="login" className="nav-link">
                  Login
                </NavLink>
              </Else>
            </If>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
