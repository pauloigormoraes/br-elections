import React from 'react';

import { 
    Row,
    Col,
    Card,
    CardHeader
} from 'reactstrap';

class FirstSection extends React.Component {
    constructor(props) {
        super();
    }
    render() {
        
        return(
            <>
                <Col sm="1"></Col>

                <Col sm="5" className="mt-5 mb-5">                    
                    <Card className="card">
                        <CardHeader>
                            <Row className="mt-3 mb-3">
                                <Col sm="12" >
                                    <h4>
                                        What is Lorem Ipsum?
                                    </h4>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                    </p>
                                </Col>
                            </Row>
                        </CardHeader>
                    </Card>
                </Col>

                <Col sm="1"></Col>

            </>
        );
    }
}

export default FirstSection;