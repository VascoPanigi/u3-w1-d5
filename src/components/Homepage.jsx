import { Component } from "react";
import { Container, ButtonGroup, Dropdown } from "react-bootstrap";
import { BiGridAlt, BiSolidGridAlt } from "react-icons/bi";
import MovieRow from "./MovieRow";

class Homepage extends Component {
  render() {
    return (
      <Container fluid className="px-4 mt-5" data-bs-theme="dark">
        <div className="d-flex justify-content-between" data-bs-theme="dark">
          <div className="d-flex">
            <h2 className="mb-4 section-title">TV Shows</h2>
            <ButtonGroup className="ms-4 mt-1">
              <Dropdown>
                <Dropdown.Toggle
                  variant="secondary"
                  size="sm"
                  className="rounded-0"
                  style={{ backgroundColor: "#221f1f" }}
                >
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
            <BiGridAlt className="icons" style={{ color: "#f5f5f1", width: "20px", height: "20px" }} />
            <BiSolidGridAlt className="icons" style={{ color: "#f5f5f1", width: "20px", height: "20px" }} />
          </div>
        </div>
        <h4 className="section-title mb-3 mt-5">Pirates world</h4>
        <MovieRow name="Pirates-of-the-Caribbean" />
        <h4 className="section-title mb-3 mt-5">Magical adventures</h4>
        <MovieRow name="Harry-Potter" />

        <h4 className="section-title mb-3 mt-5">Just a Batman section</h4>

        <MovieRow name="Batman" />
        <h4 className="section-title mb-3 mt-5">Looking for adventure?</h4>

        <MovieRow name="Adventure" />
        <h4 className="section-title mb-3 mt-5">Up for a ride?</h4>

        <MovieRow name="Car" />
      </Container>
    );
  }
}
export default Homepage;
