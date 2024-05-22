import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { FaEarthOceania } from "react-icons/fa6";
import { FaBook } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { FaEarthAmericas } from "react-icons/fa6";

import "./index.scss";
import { useEffect, useState } from "react";
import { getAllData } from "../../services";
const HomePage = () => {
  const [courses, setCourses] = useState(null);
  useEffect(() => {
    getAllData().then((res) => {
      setCourses(res.data.data);
    });
  }, []);

  return (
    <>
      <section id="hero">
        <Conntainer>
          <h1 className="text-center py-3">Get your Education today</h1>
          <Row className="justify-align-content-between">
            <Col sm={12} md={6} lg={4}>
              <div className="item text-dark d-flex">
                <div className="icon">
                  <FaEarthOceania className="bg-warning" />
                </div>
                <div className="content">
                  <h4 className="text-white fw-bold">Online Course</h4>
                  <h6 className="text-white">View more</h6>
                </div>
              </div>
            </Col>
            <Col sm={12} md={6} lg={4}>
              <div className="item text-dark d-flex">
                <div className="icon">
                  <FaBook className="bg-warning" />
                </div>
                <div className="content">
                  <h4 className="text-white fw-bold">Online Library</h4>
                  <h6 className="text-white">View more</h6>
                </div>
              </div>
            </Col>
            <Col sm={12} md={6} lg={4}>
              <div className="item text-dark d-flex">
                <div className="icon">
                  <GiTeacher className="bg-warning" />
                </div>
                <div className="content">
                  <h4 className="text-white fw-bold">Our Teachers</h4>
                  <h6 className="text-white">View more</h6>
                </div>
              </div>
            </Col>
          </Row>
        </Conntainer>
      </section>
      <section id="courses" className="py-4">
        <Container>
          <hr />
          <h2>Popular Courses</h2>
          <Row>
            {courses &&
              courses.map((c) => {
                return (
                  <Col lg={4} key={c._id}>
                    <div className="course">
                      <img className="img-fluid" src={c.imageUrl} />
                      <h3>{c.name}</h3>
                      <h5>{c.name}</h5>
                      <h6>{c.author}</h6>
                    </div>
                  </Col>
                );
              })}
          </Row>
        </Container>
      </section>
      <section id="register">
        <Container fluid>
          <Row>
            <Col>
              <div className="left py-4 text-center">
                <h2 className="text-white">
                  Register now and get a discount 50% discount until 1 January
                </h2>
                <p className="text-white">
                  In aliquam, augue a gravida rutrum, ante nisl fermentum nulla,
                  vitae tempor nisl ligula vel nunc. Proin quis mi malesuada,
                  finibus tortor fermentum. Aliquam, augue a gravida rutrum,
                  ante nisl fermentum nulla, vitae tempo.
                </p>
                <Button className="bg-dark">REGISTER NOW</Button>
              </div>
            </Col>
            <Col>
              <div className="right text-center py-4">
                <h4>Search for your course</h4>
                <input placeholder="Course Name" />
                <input placeholder="Category" />
                <input placeholder="Degree" />
                <Button className="text-white">SEARCH COURSE</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section id="services" className="py-4">
        <Container>
          <hr className="w-25" />
          <h2 className="text-center">Our Services</h2>
          <Row>
            <Col sm={6} md={4} lg={4}>
              <div className="service">
                <FaEarthAmericas />
                <h3>Online Courses</h3>
                <p className="text-secondary">
                  In aliquam, augue a gravida rutrum, ante nisl fermentum nulla,
                  vitae tempor nisl ligula vel nunc. Proin quis mi malesuada,
                  finibus tortor fermentum.
                </p>
              </div>
            </Col>

            <Col sm={6} md={4} lg={4}>
              <div className="service">
                <FaEarthAmericas />
                <h3>Online Courses</h3>
                <p className="text-secondary">
                  In aliquam, augue a gravida rutrum, ante nisl fermentum nulla,
                  vitae tempor nisl ligula vel nunc. Proin quis mi malesuada,
                  finibus tortor fermentum.
                </p>
              </div>
            </Col>

            <Col sm={6} md={4} lg={4}>
              <div className="service">
                <FaEarthAmericas />
                <h3>Online Courses</h3>
                <p className="text-secondary">
                  In aliquam, augue a gravida rutrum, ante nisl fermentum nulla,
                  vitae tempor nisl ligula vel nunc. Proin quis mi malesuada,
                  finibus tortor fermentum.
                </p>
              </div>
            </Col>

            <Col sm={6} md={4} lg={4}>
              <div className="service">
                <FaEarthAmericas />
                <h3>Online Courses</h3>
                <p className="text-secondary">
                  In aliquam, augue a gravida rutrum, ante nisl fermentum nulla,
                  vitae tempor nisl ligula vel nunc. Proin quis mi malesuada,
                  finibus tortor fermentum.
                </p>
              </div>
            </Col>

            <Col sm={6} md={4} lg={4}>
              <div className="service">
                <FaEarthAmericas />
                <h3>Online Courses</h3>
                <p className="text-secondary">
                  In aliquam, augue a gravida rutrum, ante nisl fermentum nulla,
                  vitae tempor nisl ligula vel nunc. Proin quis mi malesuada,
                  finibus tortor fermentum.
                </p>
              </div>
            </Col>

            <Col sm={6} md={4} lg={4}>
              <div className="service">
                <FaEarthAmericas />
                <h3>Online Courses</h3>
                <p className="text-secondary">
                  In aliquam, augue a gravida rutrum, ante nisl fermentum nulla,
                  vitae tempor nisl ligula vel nunc. Proin quis mi malesuada,
                  finibus tortor fermentum.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section id="events">
        <Container>
          <hr className="bg-warning w-25 m-auto" />
          <h2 className="text-center">Upcoming Events</h2>
          <Row 
          
          
          ></Row>
        </Container>
      </section>
      <section id="subscribe" className="py-3 bg-dark">
        <Container>
          <hr className="bg-warning w-25 m-auto"></hr>
          <h2 className="text-white py-3">Subscribe to newsletter</h2>
          <input className="text-center Email Address"></input>
        </Container>
      </section>
    </>
  );
};

export default HomePage;
