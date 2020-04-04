import React from 'react';

import { 
    Row,
    Col,
    Card,
    CardHeader
} from 'reactstrap';

import DateToday from '../components/DateToday'
// import talk from './img/talk.svg';
import presidentes from '../img/nova-republica.svg';

class MenuSection extends React.Component {
    constructor(props) {
        super();
    }
    render() {
        
        return(
            <>
                <Col sm="10 mb-4 mt-response text-center">
                    <h4 className="text-color">ELEIÇÕES BRASILEIRAS</h4>
                </Col>
                
                <Col sm="10">
                    
                    <Card className="card">

                    <CardHeader>

                        <Row className="justify-content-md-center mt-5">
                        <Col sm="5">
                            <b className="text-menu-name-dark">
                            PAULO
                            </b>
                            <br/>
                            <i>Apresenta...</i>
                        </Col>
                        <Col sm="3" className="text-center">
                            <b>
                            <a className="link-dark" href="https://paulomoraes.me/data/elections.pdf" target="_blank" rel="noopener noreferrer">
                                paulomoraes.me/data/elections.pdf
                            </a>
                            </b>
                        </Col>
                        </Row>

                        <Row className="justify-content-md-center">
                        <Col sm="5"  className="mt-5">
                            <h5>Eleições brasileiras</h5>
                            <h2><b>Uma análise social</b></h2>
                        </Col>
                        <Col sm="3">
                            <img src={presidentes} className="Menu-logo" alt="icon menu from a populitary" />
                        </Col>
                        </Row>

                        <Row className="justify-content-md-center mt-5">
                        <Col sm="5">
                            <p>
                            Uma pesquisa com dados públicos disponibilizados pelo TSE. <br/>
                            A base contêm dados de 1996 à 2018.
                            </p>
                        </Col>
                        <Col sm="3" className="text-center">
                            <DateToday />
                        </Col>
                        </Row>

                    </CardHeader>

                    </Card>

                    <Row className="mt-5">
                    <Col sm="6" className="align-self-end">
                        <h4 className="text-color">
                        UM DOSSIÊ ANÁLITICO PREDITIVO EM RELAÇÃO
                        AOS DADOS POLÍTICOS SOCIAIS, EXPLICADO
                        ATRAVÉS DA ANÁLISE DE DADOS.
                        </h4>
                    </Col>
                    </Row>

                </Col>
            </>
        );
    }
}

export default MenuSection;