import React from "react";
import { Container, Jumbotron, Row } from "react-bootstrap";
import "./styles.css";

class MovieGallery extends React.Component {
  state = {
    movies: [],
    isLoading: true,
    error: null,
  };
  //https://www.omdbapi.com/?apikey=2beaba4d&s=${this.props.category}
  async getMovies() {
    try {
      let res = await fetch(
        `${process.env.REACT_APP_BE_URL}/medias`
      ); /*2beaba4d&s */
      let data = await res.json();
      console.log(data);
      this.setState({ movies: data });
      this.setState({ isLoading: false });
      if (data.Error) {
        this.setState({ error: "something went wrong" });
      }
    } catch (error) {
      this.setState({ error: "something went wrong" });
    }
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    return (
      <>
        <div className="root">
          {this.state.isLoading ? <p>loading</p> : null}
          {this.state.error ? <p>{this.state.error}</p> : null}
          <div>
            {this.state.movies
              ? this.state.movies.map((movie) => {
                  return (
                    <img
                      key={movie.imdbID}
                      src={movie.poster}
                      alt={movie.title}
                    />
                  );
                })
              : null}
          </div>
        </div>
      </>
    );
  }
}
export default MovieGallery;
