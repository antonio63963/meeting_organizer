import { 
  LOADING_IN_PROCESS, 
  LOADING_IS_FAILED,
  USER_LOGOUT, 
  USER_LOGIN, 
  INIT_ACCOUNT,
  EDIT_PROFILE,
  ADD_NEW_TAGS,
  GET_ALL_TAGS,
  GET_ALL_MEETINGS
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

const actionAddNewTags = async (tags) => {
  const { data } = await axios.post('api/admin/addTags', tags);
  console.log("newTag: ", data);
  return {
    type: ADD_NEW_TAGS,
    payload: data
  }
};

const actionGetAllTags = async() => {
  const { data } = await axios.get('api/admin/getTags');
  return {
    type: GET_ALL_TAGS,
    payload: data
  }
};

const actionGetAllMeetings = async() => {
  const { data } = await axios.get('api/account/getMeetingList');
  return {
    type: GET_ALL_MEETINGS,
    payload: data
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
  // dispatch(await actionGetAllMeetings())
};

const editProfile = async(userData, dispatch) => {
  dispatch(actionLoading());
  dispatch(await actionEditProfile(userData));
};

const changeUserAvatar = async(userAvatar, dispatch) => {
  dispatch(actionLoading());
  dispatch(await actionEditUserAvatar(userAvatar));
};

const addNewTags = async(tags, dispatch) => {
  dispatch(await actionAddNewTags(tags))
};

const getAllTags = async(dispatch) => {
  dispatch(await actionGetAllTags());
}


export { 
  loginUser,
  logoutUser,
  initAccount,
  editProfile,
  changeUserAvatar,
  addNewTags,
  getAllTags
}
