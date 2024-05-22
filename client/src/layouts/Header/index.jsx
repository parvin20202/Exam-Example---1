import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink } from "react-router-dom";
import { CiPhone } from "react-icons/ci";


const Header = () => {
  return (
    <section id='header' className='bg-warning'>
      <Container>
        <Row>
          <Col md={12} lg={4}>
            <div className='header-logo d-flex'>
              <img className='img fluid' src='https://preview.colorlib.com/theme/course/images/logo.png' />
              <h2>Course</h2>
            </div></Col>
          <Col md={12} lg={4}>
            <nav>
              <ul className='list-unstyled column-gap-3'>
                <NavLink className="text-dark text-decoration-none">HOME</NavLink>
                <NavLink className="text-dark text-decoration-none">ABOUT US </NavLink>
                <NavLink className="text-dark text-decoration-none">COURSES </NavLink>
                <NavLink className="text-dark text-decoration-none">ELEMENTS </NavLink>
                <NavLink className="text-dark text-decoration-none">NEWS </NavLink>
                <NavLink className="text-dark text-decoration-none">CONTACT </NavLink>
              </ul>
            </nav>
          </Col>
          <Col sm={12} md={4} lg={4}>
            <div>
              <NavLink className="text-dark text-decoration-none"><CiPhone />
                +43 4566 7788 2457</NavLink>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Header
