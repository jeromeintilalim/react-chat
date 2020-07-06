import React, { useState } from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'

function DetailsDropdown(props) {
    const [name, setName] = useState("");

    return (
        <div>
            <Container>
                <Form style={{ padding: "0px 25px 0px 25px", marginTop: "15px" }}>
                    <Form.Group>
                        <Row>
                            <Col sm={3} className="visible" >
                                <Form.Label htmlFor={props.title} style={{ margin: "0px" }}>{props.title}:</Form.Label>
                            </Col>
                            <br className="break" />
                            <Col sm={9} className="visible">
                                <Form.Control
                                    id={props.title}
                                    value={name}
                                    onChange={(event) => {
                                        setName(event.target.value)
                                    }}
                                    type={props.type}
                                    placeholder={props.placeholder} />
                            </Col>
                        </Row>
                    </Form.Group>
                </Form>
            </Container>
        </div>
    )
}

export default DetailsDropdown