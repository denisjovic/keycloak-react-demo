import React from 'react'
import UserService from "../services/UserService";


export default function Unauthorized() {
    return (

        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href='!#'>
                    <img src='/logo.png' alt='logo' width={200} id='logo' />
                </a>
                <button className="btn btn-outline-success" onClick={() => UserService.doLogin()}>Log in</button>
            </div>
        </nav>

    )
}


