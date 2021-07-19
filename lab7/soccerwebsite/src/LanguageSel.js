import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import React from "react";

const LanguageSel = () => {
  const [lang, setLang] = useState("en");

  const handleChange = (event) => {
    let newlang = event.target.value;
    setLang(newlang);
    window.lang = newlang;
    console.log(window.lang);
  };

  return (
    <nav className="langbar">
      <Row>
        <Col>
          <label
            style={{
              color: "white",
            }}
          >
            Select Language:
          </label>
        </Col>
      </Row>
      <Col>
        <form action="">
          <select
            style={{
              width: "110px",
              color: "white",
            }}
            onChange={handleChange}
          >
            <option value="en">English</option>
            <option value="fr">Français</option>
          </select>
        </form>
      </Col>
    </nav>
  );
};

export default LanguageSel;
