import { LOADING_IN_PROCESS, USER_LOGOUT, USER_LOGIN } from "./actionTypes";
import axios from 'axios';

const actionLoading = () => {
  return {
    type: LOADING_IN_PROCESS,
  }
};
const actionLogin = async(formData) => {
  console.log(formData);
  const { data } = await axios.post('api/auth/login', formData);
  console.log('action login: ', data)
  return {
    type: USER_LOGIN,
    payload: data
  }
};
const actionLogout = async () => {
  const { data } = await axios.get('api/auth/logout');
  console.log("Logout: ", data);
  if(data.status !== 'success') return false;
  return {
    type: USER_LOGOUT
  };
};

//composition
const loginUser = async(formData, dispatch) => {
  dispatch(actionLoading())
  dispatch(await actionLogin(formData));
};

const logoutUser = async(dispatch) => {
  dispatch(actionLoading());
  dispatch(await actionLogout());
}; 

export { 
  loginUser,
  logoutUser,
}
