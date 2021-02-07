import * as actionTypes from "../../constants/actionTypes";
import { DefaultRootState, Action } from "../../constants/types";
import filterDuplicatedIDs from "../../helpers/filterDuplicatedIDs";

const initialState: DefaultRootState = {
  category: {
    isFetching: false,
    error: "",
    list: [],
  },
  image: {
    isFetching: false,
    error: "",
    list: [],
  },
};

const rootReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case actionTypes.GET_CATEGORIES:
      return { ...state, category: { ...state.category, isFetching: true } };
    case actionTypes.GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        category: {
          ...state.category,
          isFetching: false,
          list: action.categories,
        },
      };
    case actionTypes.GET_CATEGORIES_FAIL:
      return {
        ...state,
        category: {
          ...state.category,
          isFetching: false,
          error: action.error,
        },
      };

    case actionTypes.GET_IMAGES:
      return { ...state, image: { ...state.image, isFetching: true } };

    case actionTypes.GET_IMAGES_SUCCESS:
      return {
        ...state,
        image: {
          ...state.image,
          isFetching: false,
          list: action.images,
        },
      };

    case actionTypes.GET_IMAGES_FAIL:
      return {
        ...state,
        image: {
          ...state.image,
          isFetching: false,
          error: action.error,
        },
      };

    case actionTypes.GET_MORE_IMAGES_SUCCESS:
      return {
        ...state,
        image: {
          ...state.image,
          list: filterDuplicatedIDs(state.image.list, action.images),
        },
      };

    case actionTypes.GET_MORE_IMAGES_FAIL:
      return {
        ...state,
        image: {
          ...state.image,
          error: action.error,
        },
      };
    default:
      return state;
  }
};

export default rootReducer;
