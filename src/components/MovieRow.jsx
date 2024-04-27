import { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Alert, Spinner } from "react-bootstrap";

import SingleMovieCard from "./SingleMovieCard";
import Slider from "react-slick";

class MovieRow extends Component {
  state = {
    movies: [],
    isLoading: false,
    isError: false,
  };

  fetchMovies = async () => {
    this.setState({ isLoading: true });

    try {
      console.log("fetching your data...");
      const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=f56391e1&s=${this.props.name}`);

      if (!response.ok) {
        throw new Error("error during fetching");
      }

      console.log("fetch successful");
      const movies = await response.json();
      // console.log(movies);
      this.setState({ movies });
    } catch (err) {
      console.log(err);
      this.setState({ isError: true });
    } finally {
      this.setState({ isLoading: false });
    }
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
            slidesToShow: 6,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
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
      <>
        {this.state.isLoading && <Spinner animation="grow" variant="danger" />}

        {this.state.isError && (
          <Alert variant="danger">
            Error during fetch, try again and if the error persists please contact the support.
          </Alert>
        )}
        {!this.state.isError && (
          <Slider {...settings} className="ms-2 me-2">
            {this.state.movies.Search?.slice(0, 7).map((movie) => (
              <SingleMovieCard key={movie.imdbID} movie={movie} />
            ))}
          </Slider>
        )}
      </>
    );
  }
}

export default MovieRow;
