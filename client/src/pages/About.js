import React, { Component } from "react";
import Card from "../components/Card";
import { Container, Row, Col } from "../components/Grid";
import Selfie from "../utils/img/selfie.jpeg";

class About extends Component {

  // Handles updating component state when the user types into the input field

  render() {
    return (
      <Container>
        <Row>
            <Card
              img={Selfie}
            >
              Welcome to my profile page. My name is Raymond He and I am a full stack developer currently looking for
              a front end or back end developer position. I have completed my full stack web development course and
              I am eager learn more about software development.
                  <br />
                  My current skill set involves HTML5, CSS3, JavaScript, jQuery, Bootstrap, Node.js, MySQL, MongoDB,
                  Express, React.js, Git, and Firebase.
                  <br />
                  I am currently learning Java for a stronger back-end language.
                  <br />
                  Feel free to reach out to me on my contact page if you know of any opportunities in software development.
       </Card>
       
        </Row>
      </Container>
    );
  }
}

export default About;
