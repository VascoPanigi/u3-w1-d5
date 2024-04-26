import { Container, Row, Col, ButtonGroup, Dropdown } from "react-bootstrap";
import { BiGrid } from "react-icons/bi";
import tvShow1 from "../assets/1.png";
import tvShow2 from "../assets/2.png";

const Homepage = () => (
  <Container fluid className="px-4 mt-5" data-bs-theme="dark">
    <div className="d-flex justify-content-between" data-bs-theme="dark">
      <div className="d-flex">
        <h2 className="mb-4 section-title">TV Shows</h2>
        <ButtonGroup className="ms-4 mt-1">
          <Dropdown>
            <Dropdown.Toggle variant="secondary" size="sm" className="rounded-0" style={{ backgroundColor: "#221f1f" }}>
              Genres
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#">Comedy</Dropdown.Item>
              <Dropdown.Item href="#">Drama</Dropdown.Item>
              <Dropdown.Item href="#">Thriller</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </ButtonGroup>
      </div>
      <div>
        <BiGrid className="icons" />
        <BiGrid className="icons" />
      </div>
    </div>
    <h4 className="section-title mb-3">Trending Now</h4>
    <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
      {/* <Col className="mb-2 text-center px-1">
        <img className="img-fluid" src={tvShow1} alt="TV show" />
      </Col>
      <Col className="mb-2 text-center px-1">
        <img className="img-fluid" src={tvShow2} alt="TV show" />
      </Col>
      <Col className="mb-2 text-center px-1">
        <img className="img-fluid" src={tvShow2} alt="TV show" />
      </Col>
      <Col className="mb-2 text-center px-1">
        <img className="img-fluid" src={tvShow2} alt="TV show" />
      </Col>
      <Col className="mb-2 text-center px-1">
        <img className="img-fluid" src={tvShow2} alt="TV show" />
      </Col>
      <Col className="mb-2 text-center px-1">
        <img className="img-fluid" src={tvShow2} alt="TV show" />
      </Col>
    </Row> */}
    <h4 className="section-title mb-3">Watch it Again</h4>
    <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
      {/* <Col className="mb-2 text-center px-1">
        <img className="img-fluid" src={tvShow1} alt="TV show" />
      </Col>
      <Col className="mb-2 text-center px-1">
        <img className="img-fluid" src={tvShow2} alt="TV show" />
      </Col>
      <Col className="mb-2 text-center px-1">
        <img className="img-fluid" src={tvShow2} alt="TV show" />
      </Col>
      <Col className="mb-2 text-center px-1">
        <img className="img-fluid" src={tvShow2} alt="TV show" />
      </Col>
      <Col className="mb-2 text-center px-1">
        <img className="img-fluid" src={tvShow2} alt="TV show" />
      </Col>
      <Col className="mb-2 text-center px-1">
        <img className="img-fluid" src={tvShow2} alt="TV show" />
      </Col> */}
    </Row>
    <h4 className="section-title mb-3">New Releases</h4>
    <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
      {/* <Col className="mb-2 text-center px-1">
        <img className="img-fluid" src={tvShow1} alt="TV show" />
      </Col>
      <Col className="mb-2 text-center px-1">
        <img className="img-fluid" src={tvShow2} alt="TV show" />
      </Col>
      <Col className="mb-2 text-center px-1">
        <img className="img-fluid" src={tvShow2} alt="TV show" />
      </Col>
      <Col className="mb-2 text-center px-1">
        <img className="img-fluid" src={tvShow2} alt="TV show" />
      </Col>
      <Col className="mb-2 text-center px-1">
        <img className="img-fluid" src={tvShow2} alt="TV show" />
      </Col>
      <Col className="mb-2 text-center px-1">
        <img className="img-fluid" src={tvShow2} alt="TV show" />
      </Col> */}
    </Row>
  </Container>
);

export default Homepage;
