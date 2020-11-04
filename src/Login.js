import React, {useState} from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = e => {
        e.preventDefault()

        // Firebase logic

    }

    const register = e => {
        e.preventDefault()

        // Firebase Register
    }

    return (
        <div className='login'>
            <Link to='/'>
            <img className='login__logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
            alt="Amazon Logo"/>
            </Link>

        <div className="login__container">
            <h1>Sign in</h1>

            <form>
                <h5>E-mail</h5>
                <input 
                    value={email} 
                    onChange={e => setEmail(e.target.value)} type="text"/>

                <h5>Password</h5>
                <input 
                     value={password} 
                     onChange={e => setPassword(e.target.value)} 
                     type="password"/>

                <button 
                type='submit'
                onClick={signIn}
                className='login__signInButton'>Sign In</button>
            </form>

            <p>
                  By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                 see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
            </p>

            <button 
            onClick={register}
            className='login__registerButton'>Create Amazon-Clone Account
            </button>
        </div>

        </div>
    )
}

export default Login
