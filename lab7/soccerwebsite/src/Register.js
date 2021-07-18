import image from "./images/soccerfieldv.jpg";
import { Container, Row, Col } from "react-bootstrap";
const Register = () => {
  //teams add some css for this, also doesnt belong on this page, so add to more info page when doing routing, also utilzing props for this

  let register = "League Registration";

  return (
    <div className="register">
      <Container style={{ padding: "25px", backgroundColor: "white" }}>
        <Row>
          <Col>
            <h2>{register}</h2>
            <div className="register-border"></div>
            <form>
              <label>Name</label>
              <input type="text" required />
              <label>Surname</label>
              <input type="text" required />
              <label>Email</label>
              <input type="text" required />
              <label>Phone-Number</label>
              <input type="text" required />
              <label>League</label>
              <select>
                <option value="77s">7 v 7 Adult Co-ed - Sunday</option>
                <option value="77w">7 v 7 Adult Co-ed - Wednesday</option>
                <option value="11cs">11 v 11 Adult Co-ed - Sunday</option>
                <option value="11ms">11 v 11 Adult Male - Sunday</option>
              </select>
              <label>Registration type</label>
              <select>
                <option value="individual">Individual</option>
                <option value="group">Group</option>
              </select>
              <label>Payment Type</label>
              <select>
                <option value="credit">Credit Card</option>
                <option value="transfer">e-Transfer</option>
                <option value="Cheque">Cheque</option>
              </select>
              <button type="submit">Register</button>
            </form>
          </Col>
          <Col>
            <img className="soccerimage" src={image} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
