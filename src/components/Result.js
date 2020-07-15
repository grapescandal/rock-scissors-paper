import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Col from 'react-bootstrap/Col'

export default function Result(props) {

    const result = props.result;

    return (
        <>
            <Col className={result + " text-center"}>
                <h1>{result}</h1>
            </Col>
        </>
    );
}

