import React from 'react'
import UserService from "../services/UserService";


function Secure() {
    return (
        <>
            <h1>
              Hello {UserService.getFirstName()}, welcome to your Secure React App with Keycloak
            </h1>

            <div>
              <img src='/logo.png' className='App-logo' alt='logo' />
              <img
                src='/keycloak.png'
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
                    <td>{UserService.getFirstName()}</td>
                    <td>{UserService.getLastName()}</td>
                    <td>{UserService.getEmail()}</td>
                    <td>{UserService.getUsername()}</td>
                  </tr>
                </tbody>
              </table>
            </>
            <button className='App-link' onClick={() => UserService.doLogout()}>
              Logout
            </button>
          </>
    )
}

export default Secure
