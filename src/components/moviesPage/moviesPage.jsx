import React, { Component } from "react";
class MoviesPage extends Component {
  state = {
    movies: [
      {
        id: 1,
        favorite: false,
        title: "The Shawshank Redemption",
        year: 1994,
        genre: "Drama",
        rating: "9.3",
        image:
          "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg",
      },
      {
        id: 2,
        favorite: false,
        title: "The Godfather",
        year: 1972,
        genre: "Crime",
        rating: "9.2",
        image:
          "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR3,0,182,268_AL_.jpg",
      },
      {
        id: 3,
        favorite: false,
        title: "The Godfather: Part II",
        year: 1974,
        genre: "Crime",
        rating: "9.0",
        image:
          "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg",
      },
      {
        id: 4,
        favorite: false,
        title: "The Dark Knight",
        year: 2008,
        genre: "Action",
        rating: "9.0",
        image:
          "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
      },
    ],
  };

  handleDelete(movie) {
    const movies = this.state.movies.filter((m) => m.id !== movie.id);
    this.setState({ movies });
  }

  handleFavorite(movie) {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index].favorite = !movie.favorite;
    this.setState({ movies });
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
                  <img height="80px" src={movie.image} alt="movie" />
                </td>
                <td>{movie.title}</td>
                <td>{movie.year}</td>
                <td>{movie.genre}</td>
                <td>{movie.rating}</td>
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
