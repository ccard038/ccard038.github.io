import { useState } from "react";
import TeamList from "./TeamList";
import { Accordion } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const LearnMore = () => {
  let learn = "Learn More";
  let history = "History of the League";
  let leagues = "Leagues";
  let costs = "Costs and Regulations";
  let Sunday = "Sunday";
  let Wednesday = "Wednesday";
  let Male = "Male";
  let coed = "Co-ed";
  let line1 = "Dates: June - August";
  let line2 = "Time: 7:00pm ";
  let line3 = "Location: Matt Anthony/Lees Turf ";
  let line4 = "Divisons: Beginner";
  let line5 = "Availability: Beginner 4 Spots";
  let Registration = "Registration";
  if (window.lang === "fr") {
    history = "Histoire de la Ligue";
    leagues = "Ligues";
    costs = "Coûts et règlements";
    Sunday = "Dimanche";
    Wednesday = "Mercredi";
    Male = "Mâle";
    coed = "Mixte";
    line1 = "Dates : Juin - Août ";
    line2 = "Heure : 19h00";
    line3 = "Lieu : Matt Anthony/Lees Turf";
    line4 = "Divisions : Débutant";
    line5 = "Disponibilité : Débutant 4 Places";
    Registration = "Inscription";
    learn = "Apprendre encore plus";
  }
  if (window.lang === "en") {
    history = "History of the League";
    leagues = "Leagues";
    costs = "Costs and Regulations";
    Sunday = "Sunday";
    Wednesday = "Wednesday";
    Male = "Male";
    coed = "Co-ed";
    line1 = "Dates: June - August";
    line2 = "Time: 7:00pm ";
    line3 = "Location: Matt Anthony/Lees Turf ";
    line4 = "Divisons: Beginner";
    line5 = "Availability: Beginner 4 Spots";
    Registration = "Registration";
    learn = "Learn More";
  }

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
            <h2>{learn}</h2>
            <div className="learn-border"></div>
            <br />
            <h4>{history}</h4>
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
            <h4>{leagues}</h4>
            <div className="learn-border"></div>
            <Accordion>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                  7 v 7 {coed} - {Sunday}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    {line1}
                    <br />
                    {line2} <br />
                    {line3}
                    <br />
                    {line4} <br />
                    {line5}
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                  7 v 7 {coed} - {Wednesday}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    {line1}
                    <br />
                    {line2} <br />
                    {line3}
                    <br />
                    {line4} <br />
                    {line5}y
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="2">
                  11 v 11 {coed} - {Sunday}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                    {line1}
                    <br />
                    {line2} <br />
                    {line3}
                    <br />
                    {line4} <br />
                    {line5}
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="3">
                  11 v 11 {Male} - {Sunday}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="3">
                  <Card.Body>
                    {line1}
                    <br />
                    {line2} <br />
                    {line3}
                    <br />
                    {line4} <br />
                    {line5}
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
            <br />

            <h4>{costs}</h4>
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
              <button className="button">Registration</button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LearnMore;
