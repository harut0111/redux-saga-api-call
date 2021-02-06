import * as actionTypes from "../../constants/actionTypes";

export interface Params {
  limit: string;
  category_ids: string;
}

export const getCategories = () => ({
  type: actionTypes.GET_CATEGORIES,
});

export const getImages = (params: Params) => ({
  type: actionTypes.GET_IMAGES,
  params,
});

export const getMoreImages = (params: Params) => ({
  type: actionTypes.GET_MORE_IMAGES,
  params,
});