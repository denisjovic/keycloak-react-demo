import React from 'react'
import UserService from "../services/UserService";


function Secure() {

  console.log(UserService.getGroupData())
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href='!#'>
            <img src='/logo.png' alt='logo' width={200} id='logo' />
          </a>
          <div className='alignRight'>
            <span id='userName'>Welcome, {UserService.getFirstName()}</span>
            <button className="btn btn-outline-success" onClick={() => UserService.doLogout()}>Log out</button>
          </div>
        </div>
      </nav>

      <div className='main'>
        <table className='user'>
          <thead>
            <tr>
              <th>First name</th>
              <th>Last name</th>
              <th>Email</th>
              <th>Username</th>
              <th>Groups</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{UserService.getFirstName()}</td>
              <td>{UserService.getLastName()}</td>
              <td>{UserService.getEmail()}</td>
              <td>{UserService.getUsername()}</td>
              <td>{UserService.getGroupData()}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Secure
