import { useState } from "react";
import TeamList from "./TeamList";
import { Accordion } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const LearnMore = () => {
  let history = "History of the League";
  let leagues = "Leagues";
  let costs = "Costs and Regulations";
  //let name = "mario";
  //usestate demo
  const [name, setName] = useState("mario");

  //teams add some css for this, also doesnt belong on this page, so add to more info page when doing routing, also utilzing props for this
  const [teams, setTeams] = useState([
    { name: "Green", players: 4, coach: "Tim Rogers", id: 1 },
    { name: "Blue", players: 11, coach: "Clarance Baker", id: 2 },
    { name: "Red", players: 9, coach: "Steven Smith", id: 3 },
  ]);

  return (
    <div className="learnmore">
      <Container style={{ padding: "25px", backgroundColor: "white" }}>
        <Row>
          <Col>
            <h2>{history}</h2>
            <div className="learn-border"></div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium eveniet consectetur libero voluptatum dolore, nulla
              modi laborum nemo? Expedita nam sit minima perferendis ullam ipsum
              fugit maiores aperiam omnis laborum? Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Nulla optio, illo eaque fugiat
              atque dignissimos quo, maiores molestiae beatae quas autem ex
              dolor quam praesentium dicta eligendi, sunt harum tenetur! Lorem
              ipsum dolor sit amet consectetur, adipisicing elit. Quisquam rerum
              pariatur voluptatibus, suscipit incidunt assumenda veniam hic
              labore repellendus, aperiam doloribus sint quam. Repudiandae sit
              soluta perspiciatis, tenetur magnam nesciunt.
            </p>
            <h2>{leagues}</h2>
            <div className="learn-border"></div>
            <Accordion>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                  7 v 7 Adult Co-ed - Sunday
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>This is first tab body</Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                  7 v 7 Adult Co-ed - Wednesday
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>This is second tab body</Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="2">
                  11 v 11 Adult Co-ed - Sunday
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>This is third tab body</Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="3">
                  11 v 11 Adult Male- Sunday
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="3">
                  <Card.Body>This is fourth tab body</Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
            <br />

            <h2>{costs}</h2>
            <div className="learn-border"></div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium eveniet consectetur libero voluptatum dolore, nulla
              modi laborum nemo? Expedita nam sit minima perferendis ullam ipsum
              fugit maiores aperiam omnis laborum? Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Nulla optio, illo eaque fugiat
              atque dignissimos quo, maiores molestiae beatae quas autem ex
              dolor quam praesentium dicta eligendi, sunt harum tenetur! Lorem
              ipsum dolor sit amet consectetur, adipisicing elit. Quisquam rerum
              pariatur voluptatibus, suscipit incidunt assumenda veniam hic
              labore repellendus, aperiam doloribus sint quam. Repudiandae sit
              soluta perspiciatis, tenetur magnam nesciunt.
            </p>
            {/*<TeamList teams={teams} />*/}
            <Link to="/register">
              <button className="button">Register</button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LearnMore;
