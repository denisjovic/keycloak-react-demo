import React from 'react'
import UserService from "../services/UserService";


export default function Unauthorized() {
    return (
        <div>
            <h1>Hello anomymous user, please log in to see the content</h1>
            <button className='App-link' onClick={() => UserService.doLogin()}>
                Log in
            </button>{' '}
        </div>
    )
}

