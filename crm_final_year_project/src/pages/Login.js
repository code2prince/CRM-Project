import React, {useState} from 'react';
import '../styles/Styles.css';

function Login() {
    const [showSignUp, setShowSignUp] = useState(false);

    const toggleSignUp=() =>{
        setShowSignUp(!showSignUp)
    }
  return (
    <div className='container'>
        
        <div className='card'>
        <h3>Login</h3>
            <div className='row'>
                <div className='col'>
                    {
                        !showSignUp ? 
                        (<div className='login'>
                            <form>
                                <div className='input-group'>
                                    <input type="text" className='form-control' placeholder='User-Id'/>
                                </div>

                                <div className='input-group'>
                                    <input type="password" className='form-control' placeholder='Password'/>
                                </div>

                                <div className='input-group'>
                                    <input type="submit" className='form-control btn btn-primary'  value='login'/>
                                </div>
                                <div className='text-info'>
                                    Don't have an account ? signUp
                                </div>
                            </form>
                        </div>
                        ) :  (
                        <div className='signUp'>everyone</div>)
                    }
                </div>
            </div>


        </div>
    </div>
  )
}

export default Login;