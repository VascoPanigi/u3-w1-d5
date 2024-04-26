import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../assets/logo.png";
import { BiSearch, BiBell, BiUserCircle } from "react-icons/bi";

const MyNavbar = () => (
  <Navbar expand="lg" className="my-navbar" data-bs-theme="dark" style={{ backgroundColor: "#221f1f" }}>
    <Container>
      <Navbar.Brand href="#Home">
        <img src={logo} alt="Netflix logo" style={{ width: "100px", height: "55px" }} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home" className="fw-bold">
            Home
          </Nav.Link>
          <Nav.Link href="#tvshows" className="fw-bold">
            TV Shows
          </Nav.Link>
          <Nav.Link href="#movies" className="fw-bold">
            Movies
          </Nav.Link>
          <Nav.Link href="#recentlyadded" className="fw-bold">
            Recently Added
          </Nav.Link>
          <Nav.Link href="#mylist" className="fw-bold">
            My List
          </Nav.Link>
        </Nav>
        <div className="d-flex gap-3 align-items-center" data-bs-theme="dark">
          <BiSearch className="icons" fill="#f5f5f1" />
          <div id="kids" className="fw-bold" style={{ color: "#f5f5f1" }}>
            KIDS
          </div>
          <BiBell className="icons" fill="#f5f5f1" />
          <BiUserCircle className="icons" fill="#f5f5f1" />
        </div>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default MyNavbar;
