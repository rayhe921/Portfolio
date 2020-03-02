import React, { Component } from "react";
import Card from "../components/Card";
import {Container, Row, Col} from "../components/Grid";
import Selfie from "../utils/img/selfie.jpeg";

class About extends Component {

  // Handles updating component state when the user types into the input field

  render() {
    return (
      <Container>
       <Card
        title="About"
        img={Selfie}
        summary="Hi! My name is Raymond He. I am currently taking this full stack course in hopes to change my career field. So far, this course has been challenging but at the same time I feel a sense of belonging in this field. I guess that makes me feel optimistic about my future in computer sciences. Outside of this class I am currently working as an Assistant Living Facility Manager in the International District of Seattle, so my commutes to class are not so bad.
        When I am not working or studying I am most likely at a bar playing boardgames with friends. My hobbies include playing boardgames, cooking, hiking, and trying to get better at racquetball."
       ></Card>
      </Container>
    );
  }
}

export default About;
