import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './App.css';
import axios from 'axios';
import Choice from '../src/components/Choice';
import Result from '../src/components/Result';

export default function App() {
  const [result, setResult] = useState("");
  const [resultState, getResult] = useState(false);

  const handleSelectChoice = (event, decision) => {
    console.log(decision);
    event.preventDefault();
    const choice = {
      choice: decision,
    };

    const headers = {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }

    axios.post(`http://localhost:8844/setChoice`, choice, { headers: headers })
      .then(res => {
        setResult(res.data.result);
        getResult(true);
        console.log(res.data);
      })
      .catch((error) => {
        console.log("axios error:", error);
      })
  };

  const selectedPage = (
    <Col>
      <Row className="py-5">
        <Col>
          <Row>
            <Col xl={4} md={4} xs={12}><Choice choiceName="rock" func={(e) => handleSelectChoice(e, "Rock")}></Choice></Col>
            <Col xl={4} md={4} xs={12}><Choice choiceName="scissors" func={(e) => handleSelectChoice(e, "Scissors")}></Choice></Col>
            <Col xl={4} md={4} xs={12}><Choice choiceName="paper" func={(e) => handleSelectChoice(e, "Paper")}></Choice></Col>
          </Row>
        </Col>
        {/* {resultState === true ? <Result result={result} /> :
        selectedPage} */}
      </Row>
      <Row className="pb-5">
        <Col>
          <p className="normal-text">
            Make your decision
        </p>
        </Col>
      </Row>
    </Col>
  );

  return (
    <>
      <Container>
        <Row className="bg-white mt-3">
          <Col>
            <h1 id="title">
              Rock Scissors Paper
            </h1>
          </Col>
        </Row>
        <Row id="content-container" className="mt-5">
          {resultState === true ? <Result result={result} /> :
            selectedPage}
        </Row>
      </Container>
    </>
  );
}

