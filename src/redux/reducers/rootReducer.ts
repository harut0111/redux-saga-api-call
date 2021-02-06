import { GET_CATEGORIES_FAIL, GET_CATEGORIES_SUCCESS } from "../../constants/actionTypes";
import { DefaultRootState, Action } from "../../constants/types";

const initialState: DefaultRootState = {
  categories: [],
};

const rootReducer = (state = initialState, action: Action) => {
  console.log("action", action);
  switch (action.type) {
    case GET_CATEGORIES_SUCCESS:
      return { ...state, categories: action.categories };
    case GET_CATEGORIES_FAIL:
      console.log(action.error)
      return state;
    default:
      return state;
  }
};

export default rootReducer;
