import { Link } from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap";

const NotFound = () => {
  return (
    <div className="not-found">
      <Container style={{ paddingTop: "5%", marginTop: "5%" }}>
        <Row>
          <Col>
            <div
              style={{
                width: "auto ",
                height: "50px",
              }}
            >
              <h2 style={{ textAlign: "center" }}>404</h2>
              <h1 style={{ textAlign: "center" }}>PAGE NOT FOUND</h1>
              <p style={{ textAlign: "center" }}>
                Please Return to the homepage
              </p>
              <Link to="/">
                <button className="button">Home</button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NotFound;
