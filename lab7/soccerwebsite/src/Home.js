import image from "./images/soccerfieldh.jpeg";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

let para = "";
const Home = () => {
  return (
    <div className="home">
      <Container style={{ padding: "25px", backgroundColor: "white" }}>
        <Row>
          <Image src={image} fluid></Image>
          <div className="mycontainer">
            <div className="homeh">
              <h2>Sandy Hill Recreational Soccer</h2>{" "}
              <div className="home-border"></div>
            </div>
          </div>
        </Row>
        <Row>
          <h2>About Sandy Hill Recreational Soccer</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae
            congue mauris rhoncus aenean vel elit scelerisque. Integer eget
            aliquet nibh praesent. Pulvinar mattis nunc sed blandit libero
            volutpat. Sit amet commodo nulla facilisi nullam. Augue neque
            gravida in fermentum et. In nibh mauris cursus mattis molestie a
            iaculis at erat. Sodales neque sodales ut etiam. Egestas congue
            quisque egestas diam in arcu cursus. Sit amet justo donec enim diam.
            Sit amet nisl purus in mollis nunc sed. Id semper risus in hendrerit
            gravida rutrum. Adipiscing at in tellus integer feugiat scelerisque.
            Dictum fusce ut placerat orci nulla. Arcu dui vivamus arcu felis
            bibendum. Vulputate enim nulla aliquet porttitor lacus luctus
            accumsan. Felis eget velit aliquet sagittis id consectetur purus.
            Felis eget nunc lobortis mattis. Pellentesque elit eget gravida cum
            sociis.
          </p>
        </Row>
        <div className="center">
          <Link to="learnmore">
            <button className="button">Learn More</button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Home;
