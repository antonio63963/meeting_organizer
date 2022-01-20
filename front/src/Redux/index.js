import update from 'immutability-helper';
import { LOADING_IN_PROCESS, USER_LOGOUT, USER_LOGIN } from "./actionTypes";

const initState = {
  // isLoading: true,
  // uid: null,
  // name: null,
  // role: 'user'
};

const reducer = (state = initState, action) => {

  const findFilmIdx = (id) => {
    return state.products.findIndex(product => product.id == id);
  };

  switch(action.type) {
    case LOADING_IN_PROCESS: {
      return update(state, { isLoading: { $set: false}})
    };
      
    case USER_LOGIN: {
      console.log('login', action.payload.payload);
      if(action.payload.status === 'error') return state;
      const { uid, role, name } = action.payload.payload;
      const newState = update(state, { 
        isLoading: { $set: true}, 
        uid: {$set: uid},
        role: {$set: role},
        name: {$set: name}
      });
      console.log('reducer: ', newState);
      return newState;
    };

    case USER_LOGOUT: {
      return update(state, { 
        uid: {$set: null},
        role: {$set: null},
        name: {$set: null}
      });
    };

    default: 
     return state
  }
};

export default reducer;