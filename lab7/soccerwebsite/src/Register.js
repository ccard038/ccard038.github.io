import image from "./images/soccerfieldv.jpg";
import { Container, Row, Col } from "react-bootstrap";
import { useEffect } from "react";

const Register = () => {
  //teams add some css for this, also doesnt belong on this page, so add to more info page when doing routing, also utilzing props for this
  let register = "League Registration";
  let name = "Name";
  let surname = "Surname";
  let email = "Email";
  let phone = "Phone Number";
  let league = "League";
  let reg = "Registration Type";
  let payment = "Payment Type";
  let submit = "Register";
  let Individual = "Individual";
  let Group = "Group";
  let Credit = "Credit Card";
  let Sunday = "Sunday";
  let Wednesday = "Wednesday";
  let Male = "Male";
  let coed = "Co-ed";
  if (window.lang === "fr") {
    register = "Inscription à la ligue";
    name = "Nom";
    surname = "Nom de Famille";
    email = "Email";
    phone = "Numéro de téléphone";
    league = "Ligue";
    reg = "Type d'inscription";
    payment = "Type de Paiement";
    submit = "S'inscrire";
    Individual = "Individuel";
    Group = "Grouper";
    Credit = "Carte de crédit";
    Sunday = "Dimanche";
    Wednesday = "Mercredi";
    Male = "Mâle";
    coed = "Mixte";
  }
  if (window.lang === "en") {
    register = "League Registration";
    name = "Name";
    surname = "Surname";
    email = "Email";
    phone = "Phone Number";
    league = "League";
    reg = "Registration Type";
    payment = "Payment Type";
    submit = "Register";
    Individual = "Individual";
    Group = "Group";
    Credit = "Credit Card";
    Sunday = "Sunday";
    Wednesday = "Wednesday";
    Male = "Male";
    coed = "Co-ed";
  }

  return (
    <div className="register">
      <Container style={{ padding: "25px", backgroundColor: "white" }}>
        <Row>
          <Col>
            <h2>{register}</h2>
            <div className="register-border"></div>
            <form>
              <label>{name}</label>
              <input type="text" required placeholder="John" />
              <label>{surname}</label>
              <input type="text" required placeholder="Doe" />
              <label>{email}</label>
              <input type="text" required placeholder="johndoe@email.com" />
              <label>{phone}</label>
              <input type="text" required placeholder="(555)-555-5555" />
              <label>{league}</label>
              <select>
                <option value="77s">
                  7 v 7 {coed} - {Sunday}
                </option>
                <option value="77w">
                  7 v 7 {coed} - {Wednesday}
                </option>
                <option value="11cs">
                  11 v 11 {coed} - {Sunday}
                </option>
                <option value="11ms">
                  11 v 11 {Male} - {Sunday}
                </option>
              </select>
              <label>{reg}</label>
              <select>
                <option value="individual">{Individual}</option>
                <option value="group">{Group}</option>
              </select>
              <label>{payment}</label>
              <select>
                <option value="credit">{Credit} </option>
                <option value="transfer">e-Transfer</option>
                <option value="Cheque">Cheque</option>
              </select>
              <button type="submit">{submit}</button>
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
