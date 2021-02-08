import { Params } from "../redux/actions";

const API_URL = "https://api.thecatapi.com/v1";

export default class Api {
  static async getCategories() {
    const response = await fetch(`${API_URL}/categories`);
    if (response.ok) return await response.json();
    throw new Error(`An error has occurred: ${response.status}`);
  }

  static async getImages({ limit, category_ids }: Params) {
    const response = await fetch(
      `${API_URL}/images/search?limit=${limit}&category_ids=${category_ids}`
    );
    if (response.ok) return await response.json();
    throw new Error(`An error has occurred: ${response.status}`);
  }
}
