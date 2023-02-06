
import { Container, Col, Row } from "react-bootstrap";
import Login from "./login";
import Register from "./Register";

function App() {
  return (
    <Container>
      <Row>
        <Col xs={12} sm={12} md={6} lg={6}>
          <Register />
        </Col>

        <Col xs={12} sm={12} md={6} lg={6}>
          <><br></br><br></br><br></br></>
        <Login/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
