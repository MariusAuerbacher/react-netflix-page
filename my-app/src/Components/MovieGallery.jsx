import React from "react";
import { Container, Jumbotron, Row } from "react-bootstrap";
import "./styles.css";

class MovieGallery extends React.Component {
  state = {
    movies: [],
    isLoading: true,
    error: null,
  };

  async getMovies() {
    try {
      let res = await fetch(
        `https://www.omdbapi.com/?apikey=2beaba4d&s=${this.props.category}`
      ); /*2beaba4d&s */
      let data = await res.json();
      console.log(data);
      this.setState({ movies: data.Search });
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
          <h2>{this.props.category}</h2>
          {this.state.isLoading ? <p>loading</p> : null}
          {this.state.error ? <p>{this.state.error}</p> : null}
          <div>
            {this.state.movies
              ? this.state.movies.map((movie) => {
                  return (
                      <Jumbotron>
                      <Container>
                        <Row>
                          <img
                            key={movie.imdbID}
                            src={movie.Poster}
                            alt={movie.Title}
                          />
                        </Row>
                      </Container>
                      </Jumbotron>
         
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
