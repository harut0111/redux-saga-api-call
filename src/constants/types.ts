import * as actionTypes from "./actionTypes";


// const firstCat: ICat = {
//   isFetching: false,
//   error: undefined,
//   payload: undefined
// }

interface Categories {
  id: number;
  name: string;
}

export interface DefaultRootState {
  categories: Categories[];
}

interface GetCategoriesSuccess {
  type: typeof actionTypes.GET_CATEGORIES_SUCCESS;
  categories: any;
}
interface GetCategoriesFail {
  type: typeof actionTypes.GET_CATEGORIES_FAIL;
  error: string;
}

export type Action = GetCategoriesSuccess | GetCategoriesFail;
