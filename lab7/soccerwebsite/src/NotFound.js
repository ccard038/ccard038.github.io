import { Link } from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap";

const NotFound = () => {
  let notfound = "PAGE NOT FOUND";
  let please = "Please return to the homepage";
  let Home = "Home";
  if (window.lang === "fr") {
    notfound = "PAGE NON TROUVÉE";
    please = "Veuillez retourner à la page d'accueil";
    Home = "Domicile";
  }
  if (window.lang === "en") {
    notfound = "PAGE NOT FOUND";
    please = "Please return to the homepage";
    Home = "Home";
  }
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
              <h1 style={{ textAlign: "center" }}>{notfound}</h1>
              <p style={{ textAlign: "center" }}>{please}</p>
              <Link to="/">
                <button className="button">{Home}</button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NotFound;
