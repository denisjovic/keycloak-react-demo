import React from 'react'

export default function Unauthorized({loadKeylcoak}) {
    return (
        <div>
            <h1>Hello anomymous user, please log in to see the content</h1>
            <button className='App-link' onClick={loadKeylcoak}>
                Log in
            </button>{' '}
        </div>
    )
}

