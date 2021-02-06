import { Params } from "../redux/actions";

const API_URL = "https://api.thecatapi.com/v1";

export default class Api {
  static async getCategories() {
    const response = await fetch(`${API_URL}/categories`);
    return await response.json();
  }

  // https://api.thecatapi.com/v1/images/search?limit=30&category_ids=2
  static async getImages({ limit, category_ids }: Params) {
    const response = await fetch(
      `${API_URL}/images/search?limit=${limit}&category_ids=${category_ids}`
    );
    return await response.json();
  }
}
