import React, {useState} from 'react';
import '../styles/Styles.css';
import {Dropdown, DropdownButton} from 'react-bootstrap';
import {userSignup, userSignin} from '../api/auth'; 
//import {userSignin} from '../api/auth';

function Login() {
    const [showSignUp, setShowSignUp] = useState(false);
    const [userType, setUserType] = useState("Customer");
    const [userSignUpData, setUserSignUpData] = useState({});
    const [message, setMessage] = useState('');


    const toggleSignUp=() =>{
        setShowSignUp(!showSignUp)
    }
    const handleSelect=(e)=>{
        setUserType(e)
    }
    const updateSignUpData= (e)=>{
        userSignUpData[e.target.id]=e.target.value;
        console.log(userSignUpData);
    }
    const signUpFn =(e)=>{
        const userName = userSignUpData.userName;
        const userId = userSignUpData.userId;
        const password = userSignUpData.password;
        const confirmPassword = userSignUpData.confirmPassword;

        const data={
            userName:userName,
            userId: userId,
            password: password,
            confirmPassword:confirmPassword,
            userType:userType
        }
        console.log("Data",data);

        e.preventDefault();
        userSignup(data).then(function(response){
            if(response.status===201){
                window.location.href = '/'
            }
        })
        .catch(function(error){
            if(error.response.status===400){
                setMessage(error.response.data.message);
            }else{
                console.log(error);
            }
        })
    }

    const loginFn=(e)=>{
        const userId= document.getElementById("userId").value;
        const password= document.getElementById('password').value;

        const data={
            userId:userId,
            password:password
        }

        userSignin(data).then(function(response){
            console.log(response);
            if(response.status===200){
                localStorage.setItem("name", response.data.name);
            }
            //customer,engineer,admin u have to create
            if(response.data.userType==="Customer"){
                window.location.href= "/Customer"
            }
        }).catch(function(error){
            if(error.response.status===400){
                setMessage(error.response.data.message);
            }else{
                console.log(error);
            }
        })
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
                            <form onSubmit={loginFn}>
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
                             <form onSubmit={signUpFn}>
                                {/* <div className='input-group m-1 '> */}
                                    <input type="text" className='form-control m-1' placeholder='User Full Name' id='userName' onChange={updateSignUpData}/>
                                {/* </div> */}

                                {/* <div className='input-group m-1 '> */}
                                    <input type="text" className='form-control m-1' placeholder='Email' id='userId' onChange={updateSignUpData}/>
                                {/* </div> */}

                                {/* <div className='input-group m-1'> */}
                               
                                    <input type="password" className='form-control m-1' placeholder='Password' id='password' onChange={updateSignUpData}/>
                                {/* </div> */}

                                {/* <div className='input-group m-1'> */}
                                    <input type="password" className='form-control m-1' m-1 placeholder='Confirm Password' id='confirmPassword' onChange={updateSignUpData}/>
                                {/* </div> */}

                                <div className='input-group m-1'>
                                    <span className='text-muted'>UserType </span>
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
                                <div className='text-danger'>{message}</div>
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