// Importantando o React
import React from "react";
// Importando os components necessárias da lib react-materialize
import { Navbar, NavItem, Row} from 'react-materialize';
// Importando o Component NavLink da nossa lib de rotas
import { NavLink } from 'react-router-dom'


const Header = () => (
  <Row>  
    <Navbar className="grey darken-2">
      <li><NavLink to="/">Página Inicial</NavLink></li>
      <li><NavLink to="contact">Contato</NavLink></li>
    </Navbar>
  </Row>
);

export default Header;