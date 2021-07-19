import Table from "react-bootstrap/Table";
import { Container, Row, Col } from "react-bootstrap";

const Standings = () => {
  //teams add some css for this, also doesnt belong on this page, so add to more info page when doing routing, also utilzing props for this

  let standing = "Standings";
  let red = "Red";
  let blue = "Blue";
  let green = "Green";
  let yellow = "Yellow";
  let Team = "Team";
  let Played = "Played";
  let Won = "Won";
  let Lost = "Lost";
  let Draw = "Draw";
  let Sunday = "Sunday";
  let Wednesday = "Wednesday";
  let Male = "Male";
  let coed = "Co-ed";
  if (window.lang === "fr") {
    standing = "Classement";
    red = "Rouge";
    blue = "Bleu";
    green = "Vert";
    yellow = "Jaune";
    Team = "Équipe";
    Played = "Joué";
    Won = "Gagné";
    Lost = "Perdu";
    Draw = "Nul";
    Sunday = "Dimanche";
    Wednesday = "Mercredi";
    Male = "Mâle";
    coed = "Mixte";
  }
  if (window.lang === "en") {
    standing = "Standing";
    red = "Red";
    blue = "Blue";
    green = "Green";
    yellow = "Yellow";
    Team = "Team";
    Played = "Played";
    Won = "Won";
    Lost = "Lost";
    Draw = "Draw";
    Sunday = "Sunday";
    Wednesday = "Wednesday";
    Male = "Male";
    coed = "Co-ed";
  }
  return (
    <div className="standings">
      <Container style={{ padding: "25px", backgroundColor: "white" }}>
        <Row>
          <Col>
            <h2>{standing}</h2>
            <div className="learn-border"></div>
            <br />
            <h2>
              7 v 7 {coed} - {Sunday}
            </h2>
            <div className="learn-border"></div>
            <br />
            <Table responsive>
              <thead>
                <tr>
                  <th>{Team}</th>
                  <th>{Played}</th>
                  <th>{Won}</th>
                  <th>{Lost}</th>
                  <th>{Draw}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{red}</td>
                  <td>4</td>
                  <td>3</td>
                  <td>0</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>{blue}</td>
                  <td>4</td>
                  <td>2</td>
                  <td>1</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>{green}</td>
                  <td>4</td>
                  <td>1</td>
                  <td>1</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>{yellow}</td>
                  <td>4</td>
                  <td>0</td>
                  <td>3</td>
                  <td>1</td>
                </tr>
              </tbody>
            </Table>

            <h2>
              7 v 7 {coed} - {Wednesday}
            </h2>
            <div className="learn-border"></div>
            <br />
            <Table responsive>
              <thead>
                <tr>
                  <th>{Team}</th>
                  <th>{Played}</th>
                  <th>{Won}</th>
                  <th>{Lost}</th>
                  <th>{Draw}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{red}</td>
                  <td>4</td>
                  <td>3</td>
                  <td>0</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>{blue}</td>
                  <td>4</td>
                  <td>2</td>
                  <td>1</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>{green}</td>
                  <td>4</td>
                  <td>1</td>
                  <td>1</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>{yellow}</td>
                  <td>4</td>
                  <td>0</td>
                  <td>3</td>
                  <td>1</td>
                </tr>
              </tbody>
            </Table>

            <h2>
              11 v 11 {coed} - {Sunday}
            </h2>
            <div className="learn-border"></div>
            <br />
            <Table responsive>
              <thead>
                <tr>
                  <th>{Team}</th>
                  <th>{Played}</th>
                  <th>{Won}</th>
                  <th>{Lost}</th>
                  <th>{Draw}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{red}</td>
                  <td>4</td>
                  <td>3</td>
                  <td>0</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>{blue}</td>
                  <td>4</td>
                  <td>2</td>
                  <td>1</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>{green}</td>
                  <td>4</td>
                  <td>1</td>
                  <td>1</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>{yellow}</td>
                  <td>4</td>
                  <td>0</td>
                  <td>3</td>
                  <td>1</td>
                </tr>
              </tbody>
            </Table>

            <h2>
              11 v 11 {Male} - {Sunday}
            </h2>
            <div className="learn-border"></div>
            <br />
            <Table responsive>
              <thead>
                <tr>
                  <th>{Team}</th>
                  <th>{Played}</th>
                  <th>{Won}</th>
                  <th>{Lost}</th>
                  <th>{Draw}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{red}</td>
                  <td>4</td>
                  <td>3</td>
                  <td>0</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>{blue}</td>
                  <td>4</td>
                  <td>2</td>
                  <td>1</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>{green}</td>
                  <td>4</td>
                  <td>1</td>
                  <td>1</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>{yellow}</td>
                  <td>4</td>
                  <td>0</td>
                  <td>3</td>
                  <td>1</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Standings;
