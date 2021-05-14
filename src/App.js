import React, { useState } from 'react';
import logo from './logo.png';
import keycloaklogo from './keycloak.png';

import './App.css';

import * as Keycloak from 'keycloak-js';
import Unauthorized from './components/Unauthorized';

let _kc = Keycloak('./keycloak.json');

function App() {
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const loadKeylcoak = () => {
    _kc
      .init({ onLoad: 'login-required' })
      .success((auth) => {
        if (!auth) {
          window.location.reload();
        } else {
          console.info('Authenticated');
          setUsername(_kc.idTokenParsed.preferred_username);
          setFirstName(_kc.idTokenParsed.given_name);
          setLastName(_kc.idTokenParsed.family_name);
          setEmail(_kc.idTokenParsed.email);
        }
        localStorage.setItem('react-token', _kc.token);
        localStorage.setItem('react-refresh-token', _kc.refreshToken);

        setTimeout(() => {
          _kc
            .updateToken(70)
            .success((refreshed) => {
              if (refreshed) {
                console.debug('Token refreshed' + refreshed);
              } else {
                console.warn(
                  'Token not refreshed, valid for ' +
                    Math.round(
                      _kc.tokenParsed.exp +
                        _kc.timeSkew -
                        new Date().getTime() / 1000
                    ) +
                    ' seconds'
                );
              }
            })
            .error(() => {
              console.error('Failed to refresh token');
            });
        }, 60000);
      })
      .error(() => {
        console.error('Authenticated Failed');
      });
  };

  const Logout = () => {
    _kc.logout();
  };

  return (
    <div className='App'>
      <header className='App-header'>
        {_kc.token ? (
          <>
            <h1>
              Hello {firstName}, welcome to your Secure React App with Keycloak
            </h1>

            <div>
              <img src={logo} className='App-logo' alt='logo' />
              <img
                src={keycloaklogo}
                className='Keycloak-logo'
                alt='keycloaklogo'
                width='180px'
              />
            </div>
            <>
              <table className='user'>
                <thead>
                  <tr>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>Email</th>
                    <th>Username</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{firstName}</td>
                    <td>{lastName}</td>
                    <td>{email}</td>
                    <td>{username}</td>
                  </tr>
                </tbody>
              </table>
            </>
            <button className='App-link' onClick={Logout}>
              Logout
            </button>
          </>
        ) : (
          <Unauthorized loadKeylcoak={loadKeylcoak} />
        )}
      </header>
    </div>
  );
}

export default App;
