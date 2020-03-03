import React, { Component } from "react";
import Collection from "../components/Collection";
import {Container, Row, Col} from "../components/Grid";
import resume from "../utils/Raymond_He_Resume.pdf";

class About extends Component {

  // Handles updating component state when the user types into the input field

  render() {
    return (
      <Container>
       <Collection
        header="Contact"
        email="Email"
        github="Github"
        linkedIn="LinkedIn"
        resume="Resume"
        linkOne="mailto:rayhe921@gmail.com"
        linkTwo="https://github.com/rayhe921"
        linkThree="https://www.linkedin.com/in/raymond-he-7086545a"
        linkFour={resume}
       >
       </Collection>
      </Container>
    );
  }
}

export default About;
