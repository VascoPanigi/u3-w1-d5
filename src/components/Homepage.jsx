import { Component } from "react";
import { Container, Row, ButtonGroup, Dropdown } from "react-bootstrap";
import { BiGrid } from "react-icons/bi";
import SingleMovieCard from "./SingleMovieCard";
import MovieRow from "./MovieRow";

class Homepage extends Component {
  render() {
    // console.log(this.state.movies);
    // console.log(this.state.movies.Search);
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
            <BiGrid className="icons" />
            <BiGrid className="icons" />
          </div>
        </div>
        <h4 className="section-title mb-3 mt-3">Trending Now</h4>
        <MovieRow name="Pirates-of-the-Caribbean" />
        <h4 className="section-title mb-3 mt-3">Watch it Again</h4>
        <MovieRow name="Harry-Potter" />

        <h4 className="section-title mb-3 mt-3">New Releases</h4>
        <MovieRow name="Batman" />
      </Container>
    );
  }
}
export default Homepage;
