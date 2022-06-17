import React from "react";
import { Container } from "react-bootstrap";
import {Tracking} from "../components";


export const ExternalApi = () => {
  return (
    <Container className="mb-5">
    <h1>SoundMap{" "}<small>v0.1</small></h1>
    <Tracking />
    <h6>
    <p>
        Kindly <b>Disable your AdBlocker</b> and <b>Allow Permissions for Location and Microphone.</b>
      </p>
      <br />Please wait for a some time before stopping the process. 
      <br />You are encouranged to walk around whist this app is scanning</h6>
      <br/> 
      This will help us get an accurate data.
      <p className="text-align: center">This section is still in <code>beta</code> mode. Thank You!</p>
</Container>
  );
}

export default ExternalApi;
