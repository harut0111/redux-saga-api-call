const API_URL = "https://api.thecatapi.com/v1";

export default class Api {
  static async getCategories() {
    const response = await fetch(`${API_URL}/categories`);
    return await response.json();
  }
}
