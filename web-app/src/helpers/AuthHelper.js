import jwtDecode from 'jwt-decode';

const decodeToken = (token) => {
  const decodedToken = jwtDecode(token);

  return {
    id: decodedToken.nameid,
    token: token,
    username: decodedToken.unique_name
  };
};

class AuthHelper {
  static openSession = (token) => {
    const user = decodeToken(token);
    sessionStorage.session = JSON.stringify(user);
  };
}

export default AuthHelper;