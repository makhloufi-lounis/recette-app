import React from 'react'

const Login = ({ authenticate }) => {
    return (
        <div className='login'>
            <h2>Espace Admin</h2>
            <button onClick={ authenticate } className='facebook-button'>
                Me connecter avec Facebook
            </button>
        </div>
    )
}

export default Login