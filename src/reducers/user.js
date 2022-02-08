export default function userReducer(isLoggedIn = false, action) {
  switch (action.type) {
    case "LOGIN":
      return true;
    case "LOGOUT":
      return false;
    default:
      return isLoggedIn;
  }
}
