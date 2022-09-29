import axios from 'axios';

const BASE_URL = process.env.REACT_APP_SERVER_URL;

export async function userSignup(data){
    return await axios.post(`${BASE_URL}/crm/api/v1/auth/signUp`,data);
}

export async function userLogin(data){
    return await axios.post(`${BASE_URL}/crm/api/v1/auth/login`,data);
}