import Keycloak from 'keycloak-js';

const _kc = new Keycloak('/keycloak.json');

/**
 * Initializes Keycloak instance and calls the provided callback function if successfully authenticated.
 *
 * @param onAuthenticatedCallback
 */
const initKeycloak = (onAuthenticatedCallback) => {
  _kc
    .init({
      onLoad: 'check-sso',
      silentCheckSsoRedirectUri:
        window.location.origin + '/silent-check-sso.html',
    })
    .then((authenticated) => {
      // if (authenticated) {
      onAuthenticatedCallback();
      // } else {
      //   doLogin();
      // }
    })
    .catch((error) => console.log(error));
};

const doLogin = _kc.login;

const doLogout = _kc.logout;

const getToken = () => _kc.token;

const isLoggedIn = () => !!_kc.token;

const updateToken = (successCallback) =>
  _kc.updateToken(5).then(successCallback).catch(doLogin);

const getUsername = () => _kc.tokenParsed?.preferred_username;
const getFirstName = () => _kc.tokenParsed?.given_name;
const getLastName = () => _kc.tokenParsed?.family_name;
const getEmail = () => _kc.tokenParsed?.email;
const getGroupData = () =>
  _kc.tokenParsed?.groups.map((group) => group).join(', ');

const UserService = {
  initKeycloak,
  doLogin,
  doLogout,
  isLoggedIn,
  getToken,
  updateToken,
  getUsername,
  getEmail,
  getFirstName,
  getLastName,
  getGroupData,
};

export default UserService;
