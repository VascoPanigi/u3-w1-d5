import { Component } from "react";
import { Container, Row, ButtonGroup, Dropdown } from "react-bootstrap";
import { BiGrid } from "react-icons/bi";
import SingleMovieCard from "./SingleMovieCard";

class Homepage extends Component {
  state = {
    movies: [],
    isLoading: false,
    isError: false,
  };

  fetchMovies = () => {
    console.log("fetch in corso...");
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=f56391e1&s=Harry-Potter`)
      .then((response) => {
        if (response.ok) {
          console.log("fetch conclusa");
          return response.json();
        } else {
          throw new Error("Errore nella fetch");
        }
      })
      .then((movies) => {
        console.log(movies);
        this.setState({ movies });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ isError: true });
      })
      .finally(() => this.setState({ isLoading: false }));
  };

  componentDidMount() {
    this.fetchMovies();
  }

  render() {
    console.log(this.state.movies);
    console.log(this.state.movies.Search);
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
        <h4 className="section-title mb-3">Trending Now</h4>
        <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
          <div id="Pirates-of-the-caribbean">
            {this.state.movies.Search?.slice(0, 6).map((movie) => (
              //versione precedente del codice prima di creare una componente a parte
              //   <Col key={movie.imdbID} className="mb-2 text-center px-1">
              //     <img className="img-fluid" src={movie.Poster} alt={movie.Title} />
              //   </Col>
              <SingleMovieCard key={movie.imdbID} movie={movie} />
            ))}
          </div>
        </Row>
        <h4 className="section-title mb-3">Watch it Again</h4>
        <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4"></Row>
        <h4 className="section-title mb-3">New Releases</h4>
        <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4"></Row>
      </Container>
    );
  }
}
export default Homepage;
