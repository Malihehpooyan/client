import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/login.css";


const Login = ({ login }) => {
  return (
    <section
      className="about__section"
      style={
       login === "login"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;