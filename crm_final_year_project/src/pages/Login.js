import React, {useState} from 'react';
import '../styles/Styles.css';
import {Dropdown, DropdownButton} from 'react-bootstrap';
import {userSignup} from '../api/auth'; 
import {login} from '../api/auth';

function Login() {
    const [showSignUp, setShowSignUp] = useState(false);
    const [userType, setUserType] = useState("Customer");
    const [userSignUpData, setUserSignUpData] = useState({});

    const toggleSignUp=() =>{
        setShowSignUp(!showSignUp)
    }
    const handleSelect=(e)=>{
        setUserType(e)
    }
  return (
    <div className='container'>
        
        <div className='card'>
        
            <div className='row'>
                <div className='col'>
                    {
                        !showSignUp ? 
                        (<div className='login'>
                            <h3>Login</h3>
                            <form>
                                <div className='input-group'>
                                    <input type="text" className='form-control' placeholder='User-Id' id="userId"/>
                                </div>

                                <div className='input-group'>
                                    <input type="password" className='form-control' placeholder='Password' id='password'/>
                                </div>

                                <div className='input-group'>
                                    <input type="submit" className='form-control btn btn-primary'  value='login'/>
                                </div>
                                <div className='text-info' onClick={toggleSignUp}>
                                    Don't have an account ? signUp
                                </div>
                            </form>
                        </div>
                        ) :  (
                            
                        <div className='signUp'>
                            <h3>Sign up</h3>
                             <form>
                                {/* <div className='input-group m-1 '> */}
                                    <input type="text" className='form-control m-1' placeholder='User Full Name' id='userName'/>
                                {/* </div> */}

                                {/* <div className='input-group m-1 '> */}
                                    <input type="text" className='form-control m-1' placeholder='Email' id='userId'/>
                                {/* </div> */}

                                {/* <div className='input-group m-1'> */}
                               
                                    <input type="password" className='form-control m-1' placeholder='Password' id='password'/>
                                {/* </div> */}

                                {/* <div className='input-group m-1'> */}
                                    <input type="password" className='form-control m-1' m-1 placeholder='Confirm Password' id='confirmPassword'/>
                                {/* </div> */}

                                <div className='input-group m-1'>
                                    <span className='text-muted'>User Type </span>
                                    <DropdownButton 
                                    align="end"
                                    title={userType}
                                    varient="Light"
                                    className="mx-1" 
                                        onSelect={handleSelect} >
                                        <Dropdown.Item eventKey="customer">Customer</Dropdown.Item>
                                        <Dropdown.Item eventKey="Engineer">Engineer</Dropdown.Item>
                                    </DropdownButton>

                                    
                                </div>

                                <div className='input-group m-1'>
                                    <input type="submit" className='form-control btn btn-primary'  value='Sign Up'/>
                                </div>
                                <div className='text-info' onClick={toggleSignUp}>
                                    Already have an account ? Login
                                </div>
                            </form>
                        </div>)
                    }
                </div>
            </div>


        </div>
    </div>
  )
}

export default Login;