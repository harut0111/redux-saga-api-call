import * as actionTypes from "./actionTypes";

interface Category {
  isFetching: boolean;
  error: string;
  list: { id: number; name: string }[];
}
interface Image {
  isFetching: boolean;
  error: string;
  list: { id: number; url: string; width: string; height: string }[];
}

export interface DefaultRootState {
  category: Category;
  image: Image;
}

interface GetCategories {
  type: typeof actionTypes.GET_CATEGORIES;
}

interface GetCategoriesSuccess {
  type: typeof actionTypes.GET_CATEGORIES_SUCCESS;
  categories: Category["list"];
}
interface GetCategoriesFail {
  type: typeof actionTypes.GET_CATEGORIES_FAIL;
  error: string;
}

interface GetImages {
  type: typeof actionTypes.GET_IMAGES;
}

interface GetImagesSuccess {
  type: typeof actionTypes.GET_IMAGES_SUCCESS;
  images: Image["list"];
}
interface GetImagesFail {
  type: typeof actionTypes.GET_IMAGES_FAIL;
  error: string;
}

export type Action =
  | GetCategories
  | GetCategoriesSuccess
  | GetCategoriesFail
  | GetImages
  | GetImagesSuccess
  | GetImagesFail;
