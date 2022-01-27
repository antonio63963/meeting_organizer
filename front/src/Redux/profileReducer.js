import update from 'immutability-helper';
import { 
  LOADING_IN_PROCESS,
  USER_LOGOUT, 
  USER_LOGIN, 
  INIT_ACCOUNT,
  CHANGE_USER_AVATAR,
  CHANGE_USER_TIMEZONE,
  CHANGE_USER_COUNTRY 
} from "./actionTypes";

const initState = {
  user: {}
};

const reducer = (state = initState, action) => {
  switch(action.type) {
    case LOADING_IN_PROCESS: {
      const user = {isLoading: false}
      return update(state, { user: { $set: user}})
    };
    case CHANGE_USER_AVATAR: {
      if(action.payload.status === 'error') return state;
      const newState = update(state, {
        user: {avatar: {$set: action.payload.payload.avatar} } 
      });
      return newState;
    };
    default: 
      return state;
  }
}