import React, { useState } from 'react'
import './LoginScreen.css'
import SignupScreen from './SignupScreen';

function LoginScreen() {
    const [signIn, setSignIn] = useState(false);
    const [emailget, setEmail] = useState('');

    const changeEmail = (e) =>{
        setEmail(e.target.value);   
    }

    return (
        <div className='loginScreen'>
            <div className='loginScreen_background'>
                <img 
                    className='loginScreen_logo'
                    src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
                    alt='' />
                {!signIn?<button 
                    onClick = {() => setSignIn(true)} className='loginScreen_button'>Sign In</button>:''}
                <div className="loginScreen_gradient" />
            </div>

            <div className="loginScreen_body">
                {signIn ? <SignupScreen emailget = {emailget} /> :
                    <>
                        <h1>Unlimited movies, TV shows and more.</h1>
                        <h2>Watch anywhere. Cancel anytime.</h2>
                        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                        <div className='loginScreen_input'>
                            <form>
                                <input
                                    type='email'
                                    placeholder='Email Address'
                                    value = {emailget}
                                    onChange = {changeEmail} />
                                <button type = 'submit'
                                onClick = {() => setSignIn(true)}
                                className='loginScreen_getStarted'>{`GET STARTED >`}</button>
                            </form>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

export default LoginScreen
