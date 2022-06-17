import React from "react";

// import contentData from "../utils/content-data";
import { Col, Row } from "react-bootstrap";

const Content = () => (
  <div className="next-steps my-5">
    <h2 className="my-5 text-center">Our Mission</h2>
    <p className="text-center">
    Our mission is to raise awareness and mindfulness amongst people about noise pollution and educate them about the negative impact it can have.
    Furthermore we want to give people suggestions or alternative tips on how to reduce noise pollution in their environment.
    </p>
    <br />
    <hr />
    <h2 className="my-5 text-center">The Problem</h2>
    <p>
    There are many problems, such as:  </p> <br />
    <ul>
    <Row className="d-flex justify-content-between">
      <Col>
      <li>Productivity Losses</li>
      <li>Stress</li>
      <li>Sleep Deprivation</li>
      <li>Poor Concentration</li>
      </Col>
      <Col>
      <li>Hearing Loss</li>
      <li>Tinnitus</li>
      <li>Cardiovascular Disease</li>
      <li>Cardiovascular Disease</li>
      </Col>
      </Row>
    </ul>
   
    <br />
    <hr />
    <h2 className="my-5 text-center"> And how can we collect large sums of data on noise pollution 
    with as little effort as possible?</h2>
    <p className="text-center">
    Implement crowdsourcing contribution to encourage and maintain long term participation from the public.
    </p>
    <br />
    <hr />
    <h2 className="my-5 text-center">  How can we make people more aware of noise pollution?</h2>
    <p className="text-center">
    By visualizing noise and informing them on the potential noise levels surrounding them.
    </p>
    <br />
    <hr />
  </div>
);

export default Content;
