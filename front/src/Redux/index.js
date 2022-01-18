import update from 'immitable-helper';
import { LOADING_IN_PROCESS, USER_LOGOUT, USER_LOGIN } from "./actionTypes";

const initState = {
  isLoading: true,
  uid: null,
  name: null,
  role: user
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
      const { uid, role, name } = action.payload;
      return update(state, { 
        isLoading: { $set: true}, 
        uid: {$set: uid},
        role: {$set: role},
        name: {$set: name}
      });
    };

    case PRODUCT_ADD_BY_ID: {
      const ind = findFilmIdx(action.payload.product.id);
      const res = update(state, { products: {[ind]: {
        $set: action.payload.product,
      }}});
      console.log('add : ', ind, res);
      return res;
    };

    case LOADING: {
      return update(state, {$set:{arrProductStatus: action.payload}})
    }
    case GET_PRODUCTS_BY_LIMIT : {

      return update(state, {
        products: {$set: action.payload.data}, 
        arrProductStatus: {$set: 'SUCCESS'}})
    }

    default: 
     return state
  }
};

export default reducer;