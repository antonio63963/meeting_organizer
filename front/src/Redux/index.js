import update from 'immutability-helper';
import { 
  LOADING_IN_PROCESS,
  USER_LOGOUT, 
  USER_LOGIN, 
  INIT_ACCOUNT,
  EDIT_PROFILE
} from "./actionTypes";

const initState = {
  user: {}
};

const reducer = (state = initState, action) => {


  switch(action.type) {
    case LOADING_IN_PROCESS: {
      const user = {isLoading: false}
      return update(state, { user: {isLoading: {$set: false}}})
    };
      
    case USER_LOGIN: {
      console.log('login', action.payload.payload);
      if(action.payload.status === 'error') return state;
      const newState = update(state, { user: {$set: action.payload.payload} });
      return newState;
    };

    case USER_LOGOUT: {
      const newState = update(state, { user: { $set: action.payload} });
      console.log('LLLLLOOG: ', newState);
      return newState;
    };

    case INIT_ACCOUNT: {
      if(action.payload.status === 'error') return state;
      const newState = update(state, { user: {$set: action.payload.payload} });
      return newState;
    };

    case EDIT_PROFILE: {
      if(action.payload.status === 'error') return state;
      console.log('payload', action.payload); 
      const newState = update(state, {
        user: {$merge: action.payload.payload, isLoading: {$set: true}} 
      });
      return newState;
    }

    default: 
     return state
  }
};

export default reducer;