import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as moviesService from "../../services/moviesService";
class MoviesPage extends Component {
  state = {
    movies: [],
  };

  async handleDelete(movie) {
    const index = this.state.movies.indexOf(movie);
    const movies = this.state.movies.filter((m) => m.id !== movie.id);
    this.setState({ movies });
    try {
      await moviesService.DeleteMovie(movie.id);
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        alert("This movie has already been deleted");
      }
      movies.splice(index, 0, movie);
      this.setState({ movies });
    }
  }

  handleFavorite(movie) {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index].favorite = !movie.favorite;
    this.setState({ movies });
  }
  async getData() {
    var { data: movies } = await moviesService.GetAllMovies();
    this.setState({ movies });
  }
  async componentDidMount() {
    await this.getData();
  }

  render() {
    return (
      <div className="container">
        <h5>Showing {this.state.movies.length} movies in the database</h5>
        <table className="table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Year</th>
              <th>Genre</th>
              <th>Rating</th>
              <th>Love</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <tr key={movie.id}>
                <td>
                  {/* <img height="80px" src={movie.image} alt="movie" /> */}
                </td>
                <td>
                  <Link to={movie.id.toString()}>{movie.title}</Link>
                </td>
                <td>{movie.id}</td>
                <td>{movie.title}</td>
                <td>{movie.userId}</td>
                <td>
                  <i className="fa fa-heart"></i>
                </td>
                <td>
                  <button
                    onClick={() => this.handleDelete(movie)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default MoviesPage;
