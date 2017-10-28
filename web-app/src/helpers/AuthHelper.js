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

  static getSession = () => {
    if(!sessionStorage.session) return;
    const user = JSON.parse(sessionStorage.session);
    return user;
  };

  static getToken = () => {
    const user = AuthHelper.getSession();
    if(user) return user.token;
    return;
  };
}

export default AuthHelper;