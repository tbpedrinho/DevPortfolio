// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card } from 'react-materialize';
// Importando o componenet UserProfile
import UserProfile from '../user_profile/user_profile'
// Importando o component Experience
import Experience from '../experience/experience'
// Importando o avatar da empresa 1
import company_avatar from '../../images/logo.png';
// Importando o avatar da empresa 1
import company_avatar2 from '../../images/medlogo.png';

const Home = () => (
  <Row>
    <Col m={3} s={12}>
      <UserProfile />
    </Col>
    <Col m={8} s={12}>
        <h5 className="subtitle">Sobre mim</h5>
        <Card>
          <div>
            <p><b>Entusiasta</b></p>
            <p>"Gosto de absorver novos conhecimentos sempre que possível. Então me mantenho sempre atualizado nas novas tendências do mercado. Aficcionado por tecnologia de todas as formas, desde a história da programação em cartões até BioProgramação. O importante é se manter aprendendo em progressão sempre."</p>
            <br/>
            <p><b>Incansável</b></p>
            <p>"O problema de escrever sobre mim mesmo é que sempre parece que to puxando sardinha. Mas a realidade é que problemas não são obstáculos permanentes pra mim, às vezes me travam mas eventualmente chegam ao fim e consigo um desfecho."</p>
          </div>
        </Card>
        <h5 className="subtitle">Experiência</h5>
   

        {/* Passando os parâmetros title, company, description e avatar para o component Experience */}
        <Experience title="Pedro Braga"
                    company="Freelancer"
                    description="Como estou a um tempo fora do mercado formal me mantive atualizado fazendo pequenos serviços freelancers ora aqui outra ali. E em variadas linguagens também. Estou constamente fornecendo novos materias no meu Github. Vale a pena dar uma olhada."
                    avatar={company_avatar}
        />
        <Experience title="Estagiário de Desenvolvimento"
                    company="MEDGRUPO"
                    description="Auxiliva os times de desenvolvimento com as tarefas e rotinas do dia a dia. Com soluções de problemas e até implementação de um projeto. Majoritariamente em NodeJS, ExpressJS, MongoDB, .NET, SQL, HTML5, CSS3, PureJS, Angular e ReactJS"
                    avatar={company_avatar2}                    
        /> 
    </Col>
  </Row>
);

export default Home;