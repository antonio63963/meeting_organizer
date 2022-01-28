import { 
  LOADING_IN_PROCESS, 
  LOADING_IS_FAILED,
  USER_LOGOUT, 
  USER_LOGIN, 
  INIT_ACCOUNT,
  EDIT_PROFILE,
  ADD_NEW_TAG
} from "./actionTypes";
import axios from 'axios';

const actionLoading = () => {
  return {
    type: LOADING_IN_PROCESS,
  }
};
const actionInitAccount = async () => {
  console.log(`im in init`);
  const { data } = await axios.get('/api/account');
  return {
    type: INIT_ACCOUNT,
    payload: data
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
  if(data.status !== 'success') console.log('Logout is error!!!');
  return {
    type: USER_LOGOUT,
    payload: {}
  };
};

const actionEditProfile = async (userData) => {
  const { data } = await axios.post('api/account/editProfile', userData);
  console.log(data);
  return {
    type: EDIT_PROFILE,
    payload: data
  }
};

const actionEditUserAvatar = async (avatar) => {
  const { data } = await axios.post('api/profile/changeAvatar', avatar);
  console.log("Avatar action: ", data);
  return {
    type: EDIT_PROFILE,
    payload: data
  };
};

const actionAddNewTag = async (tag) => {
  const { data } = await axios.post('api/admin/addTag');
  console.log("newTag: ", data);
  return {
    type: ADD_NEW_TAG,
  }
}

//composition
const loginUser = async(formData, dispatch) => {
  dispatch(actionLoading())
  dispatch(await actionLogin(formData));
};

const logoutUser = async(dispatch) => {
  dispatch(actionLoading());
  dispatch(await actionLogout());
}; 

const initAccount = async(dispatch) => {
  dispatch(await actionInitAccount());
};

const editProfile = async(userData, dispatch) => {
  dispatch(actionLoading());
  dispatch(await actionEditProfile(userData));
};

const changeUserAvatar = async(userAvatar, dispatch) => {
  dispatch(actionLoading());
  dispatch(await actionEditUserAvatar(userAvatar));
};

const addNewTag = async(tag, dispatch) => {
  dispatch(actionAddNewTag(tag))
}


export { 
  loginUser,
  logoutUser,
  initAccount,
  editProfile,
  changeUserAvatar,
  addNewTag
}
