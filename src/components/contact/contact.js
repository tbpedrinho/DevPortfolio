// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card, Input, Button } from 'react-materialize';
// Importando o componenet UserProfile
import UserProfile from '../user_profile/user_profile';
//Importando a imagem das redes sociais
import faceicone from '../../images/faceicone.png';
import instaicone from '../../images/instaicone.png';
import wppicone from '../../images/wppicone.png';
import giticon from '../../images/giticon.png';
const Contact = () => (
  <Row>
    <Col m={3} s={12}>
      <UserProfile />
    </Col>
    <Col m={8} s={12}>
        <h5>Contact</h5>
        <Card>
          <Row>
              <Input placeholder="E-mail" type="email" label="Email" s={12} />
              <Input placeholder="Assunto" label="Mensagem" s={12} />
            <Col s={8} m={8}> 
              <tr>
              <td><a href="https://www.facebook.com/pedrohenrique.teixeirabraga"><img src={faceicone} class="img-circle" alt="Responsive" width="40" height="40"/></a></td>
              <td><a href="https://www.instagram.com/tbpedrinho"><img src={instaicone} class="img-circle" alt="Responsive" width="40" height="40"/></a></td>
              <td><a href="http://api.whatsapp.com/send?1=pt_BR&phone=5521972806876"><img src={wppicone} class="img-circle" alt="Responsive" width="40" height="40"/></a></td>
              <td><a href="https://github.com/tbpedrinho"><img src={giticon} class="img-circle" alt="Responsive" width="40" height="40"/></a></td>
              </tr>
            </Col>
            <Col s={1} m={1}>
            <th><Button waves='light' className="right grey darken-2">Enviar</Button></th>
            </Col>
          </Row>
        </Card>
    </Col>
  </Row>
);

export default Contact;