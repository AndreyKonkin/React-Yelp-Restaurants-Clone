/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useContext } from 'react';
// import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavbarText,
} from 'reactstrap';
import { UserContext } from '../Context/UserContex';

function MyNavBar() {
  const { user } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const navigate = useNavigate();

  const links = ['Registration', 'Authorization', 'Cafes', 'Effects', 'Admin'];
  return (
    <div>
      <Navbar
        className="my-2"
        color="secondary"
        dark
      >
        <NavbarBrand href="/">
          <img
            alt="logo"
            src="/logo192.png"
            style={{
              height: 38,
              width: 38,
              marginRight: 10,
              fixed: 'top',
            }}
          />
          Reactstrap
        </NavbarBrand>
        {links?.map((link) => (
          <Button key={link} onClick={(e) => { e.preventDefault(); navigate(`/${link}`); }}>
            {link}
          </Button>
        ))}
        <NavbarText>{user.name}</NavbarText>
        <NavbarToggler onClick={toggle} />
      </Navbar>
    </div>
  );
}

export default MyNavBar;
