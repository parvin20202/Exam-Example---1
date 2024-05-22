import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <section id="footer" className="bg-dark py-4">
      <Container>
        <Row className="row-gap-3">
          <Col sm={12} md={6} lg={3}>
            <div className="logo d-flex">
              <img
                className="img-fluid"
                src="https://preview.colorlib.com/theme/course/images/logo.png"
              />
              <h4 className="text-white">COURSE</h4>
            </div>
            <p className="text-secondary">
              In aliquam, augue a gravida rutrum, ante nisl fermentum nulla,
              vitae tempor nisl ligula vel nunc. Proin quis mi malesuada,
              finibus tortor fermentum, tempor lacus.
            </p>
          </Col>

          <Col sm={12} md={6} lg={3}>
            <h4 className="text-white">Menu</h4>
            <ul>
              <li>
                <NavLink className="text-secondary">Home</NavLink>
              </li>
              <li>
                <NavLink className="text-secondary">About us</NavLink>
              </li>
              <li>
                <NavLink className="text-secondary">Courses</NavLink>
              </li>
              <li>
                <NavLink className="text-secondary">News</NavLink>
              </li>
              <li>
                <NavLink className="text-secondary">Contact</NavLink>
              </li>
            </ul>
          </Col>

          <Col sm={12} md={6} lg={3}>
            <h4 className="text-white">Usefull Links</h4>
            <ul>
              <li>
                <NavLink className="text-secondary">Testimonials</NavLink>
              </li>
              <li>
                <NavLink className="text-secondary">FAQ</NavLink>
              </li>
              <li>
                <NavLink className="text-secondary">Community</NavLink>
              </li>
              <li>
                <NavLink className="text-secondary">Campus Pictures</NavLink>
              </li>
              <li>
                <NavLink className="text-secondary">Tuitions</NavLink>
              </li>
            </ul>
          </Col>

          <Col sm={12} md={6} lg={3}>
            <h4 className="text-white">Contact</h4>
            <ul>
              <li>
                <NavLink className="text-secondary">
                  Blvd Libertad, 34 m05200 Arévalo
                </NavLink>
              </li>
              <li>
                <NavLink className="text-secondary">
                  0034 37483 2445 322
                </NavLink>
              </li>
              <li>
                <NavLink className="text-secondary">hello@company.com</NavLink>
              </li>
            </ul>
          </Col>
        </Row>
        <hr></hr>
        <Row>
          <Col sm={12} md={6} lg={6}>
            <p>
              Copyright ©2024 All rights reserved | This template is made with
              by Colorlib
            </p>
          </Col>
          <Col sm={12} md={6} lg={6}>
            <div className="icons">
              <FaPinterest />
              <FaPinterest />
              <FaPinterest />
              <FaPinterest />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Footer;
