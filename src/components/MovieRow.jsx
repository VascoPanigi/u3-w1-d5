import { Component } from "react";
import { Row } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SingleMovieCard from "./SingleMovieCard";
import Slider from "react-slick";

class MovieRow extends Component {
  state = {
    movies: [],
    isLoading: false,
    isError: false,
  };

  fetchMovies = () => {
    console.log("fetch in corso...");
    // console.log(this.props.name);
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=f56391e1&s=${this.props.name}`)
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
    const settings = {
      infinite: true,
      speed: 1000,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      centerMode: true,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      //   <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
      <Slider {...settings} className="ms-2 me-2">
        {this.state.movies.Search?.slice(0, 7).map((movie) => (
          //versione precedente del codice prima di creare una componente a parte
          //   <Col key={movie.imdbID} className="mb-2 text-center px-1">
          //     <img className="img-fluid" src={movie.Poster} alt={movie.Title} />
          //   </Col>
          <SingleMovieCard key={movie.imdbID} movie={movie} />
        ))}
      </Slider>
      // </Row>
    );
  }
}

export default MovieRow;
