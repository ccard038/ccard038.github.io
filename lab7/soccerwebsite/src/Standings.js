import Table from "react-bootstrap/Table";
import { Container, Row, Col } from "react-bootstrap";

const Standings = () => {
  //teams add some css for this, also doesnt belong on this page, so add to more info page when doing routing, also utilzing props for this

  let standing = "Standings";

  return (
    <div className="standings">
      <Container style={{ padding: "25px", backgroundColor: "white" }}>
        <Row>
          <Col>
            <h2>{standing}</h2>
            <div className="learn-border"></div>
            <br />
            <h2>7 v 7 Co-ed - Sunday</h2>
            <div className="learn-border"></div>
            <br />
            <Table responsive>
              <thead>
                <tr>
                  <th>Team</th>
                  <th>Played</th>
                  <th>Won</th>
                  <th>Lost</th>
                  <th>Draw</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Red</td>
                  <td>4</td>
                  <td>3</td>
                  <td>0</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>Blue</td>
                  <td>4</td>
                  <td>2</td>
                  <td>1</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>Green</td>
                  <td>4</td>
                  <td>1</td>
                  <td>1</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>Yellow</td>
                  <td>4</td>
                  <td>0</td>
                  <td>3</td>
                  <td>1</td>
                </tr>
              </tbody>
            </Table>

            <h2>7 v 7 Co-ed - Wednesday</h2>
            <div className="learn-border"></div>
            <br />
            <Table responsive>
              <thead>
                <tr>
                  <th>Team</th>
                  <th>Played</th>
                  <th>Won</th>
                  <th>Lost</th>
                  <th>Draw</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Red</td>
                  <td>4</td>
                  <td>3</td>
                  <td>0</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>Blue</td>
                  <td>4</td>
                  <td>2</td>
                  <td>1</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>Green</td>
                  <td>4</td>
                  <td>1</td>
                  <td>1</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>Yellow</td>
                  <td>4</td>
                  <td>0</td>
                  <td>3</td>
                  <td>1</td>
                </tr>
              </tbody>
            </Table>

            <h2>11 v 11 Co-ed - Sunday</h2>
            <div className="learn-border"></div>
            <br />
            <Table responsive>
              <thead>
                <tr>
                  <th>Team</th>
                  <th>Played</th>
                  <th>Won</th>
                  <th>Lost</th>
                  <th>Draw</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Red</td>
                  <td>4</td>
                  <td>3</td>
                  <td>0</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>Blue</td>
                  <td>4</td>
                  <td>2</td>
                  <td>1</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>Green</td>
                  <td>4</td>
                  <td>1</td>
                  <td>1</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>Yellow</td>
                  <td>4</td>
                  <td>0</td>
                  <td>3</td>
                  <td>1</td>
                </tr>
              </tbody>
            </Table>

            <h2>11 v 11 Male - Sunday</h2>
            <div className="learn-border"></div>
            <br />
            <Table responsive>
              <thead>
                <tr>
                  <th>Team</th>
                  <th>Played</th>
                  <th>Won</th>
                  <th>Lost</th>
                  <th>Draw</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Red</td>
                  <td>4</td>
                  <td>3</td>
                  <td>0</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>Blue</td>
                  <td>4</td>
                  <td>2</td>
                  <td>1</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>Green</td>
                  <td>4</td>
                  <td>1</td>
                  <td>1</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>Yellow</td>
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
