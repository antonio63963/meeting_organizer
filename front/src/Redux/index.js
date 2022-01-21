import update from 'immutability-helper';
import { LOADING_IN_PROCESS, USER_LOGOUT, USER_LOGIN, INIT_ACCOUNT } from "./actionTypes";

const initState = {
  user: {}
};

const reducer = (state = initState, action) => {


  switch(action.type) {
    case LOADING_IN_PROCESS: {
      const user = {isLoading: false}
      return update(state, { user: { $set: user}})
    };
      
    case USER_LOGIN: {
      console.log('login', action.payload.payload);
      if(action.payload.status === 'error') return state;
      const { uid, role, name } = action.payload.payload;
      const user = {
        isLoading: true,
        uid,
        role,
        name
      }
      const newState = update(state, { user: {$set: user} });
      console.log('INIT REDUCER: ', newState);
      return newState;
    };

    case USER_LOGOUT: {
      const newState = update(state, { user: { $set: action.payload} });
      console.log('LLLLLOOG: ', newState);
      return newState;
    };

    case INIT_ACCOUNT: {
      if(action.payload.status === 'error') return state;
      const { uid, role, name } = action.payload.payload;
      const user = {
        isLoading: true,
        uid,
        role,
        name
      }
      const newState = update(state, { user: {$set: user} });
      return newState;
    }
    default: 
     return state
  }
};

export default reducer;