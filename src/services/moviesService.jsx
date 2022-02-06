import httpService from "./httpService";

export function GetAllMovies() {
  return httpService.get("todos");
}

export function GetMovie(id) {
  return httpService.get(`todos/${id}`);
}

export function SaveMovie(movie) {
  if (movie._id) {
    const body = { ...movie };
    delete body._id;
    return httpService.put(`todos/${movie._id}`, body);
  }

  return httpService.post("todos", movie);
}
export function DeleteMovie(id) {
  return httpService.del(`todos/${id}`);
}
