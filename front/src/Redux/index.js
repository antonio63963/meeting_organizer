import update from 'immutability-helper';
import { 
  LOADING_IN_PROCESS,
  USER_LOGOUT, 
  USER_LOGIN, 
  INIT_ACCOUNT,
  EDIT_PROFILE,
  GET_ALL_TAGS,
  ADD_NEW_TAGS,
  GET_ALL_MEETINGS
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
      const { user, meetingList } = action.payload.payload;
      const newState = update(state, { 
        user: {$set: user}, 
        meetingList: {$set: meetingList}});
      return newState;
    };

    case EDIT_PROFILE: {
      if(action.payload.status === 'error') return state;
      console.log('payload', action.payload); 
      const newState = update(state, {
        user: {$merge: action.payload.payload, isLoading: {$set: true}} 
      });
      return newState;
    };

    case GET_ALL_TAGS: {
      if(action.payload.status === 'error') return state;
      const newState = update(state, {
        tags: {$set: action.payload.payload}
      });
      return newState;
    };

    case ADD_NEW_TAGS: {
      if(action.payload.status === 'error') return state;
      const tags = [ ...state.tags, ...action.payload.payload ];
      return update(state, { tags: { $set: tags}});
    };

    case GET_ALL_MEETINGS: {
      if(action.payload.status === 'error') return state;
      return update(state, {meetingList: {$set: action.payload.payload}})
    };

    default: 
     return state
  }
};

export default reducer;