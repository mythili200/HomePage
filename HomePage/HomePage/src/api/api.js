const BASE = import.meta.env.VITE_API_BASE_URL;
console.log(BASE);

export const api = {
  async getProducts(limit = 12) {
    try {
      const res = await fetch(`${BASE}/photos?_limit=${limit}`);
      if (!res.ok) throw new Error(`Error ${res.status}`);

      const text = await res.text();
      console.log("Raw response:", text);

      try {
        return JSON.parse(text);
      } catch (err) {
        console.error("Failed to parse JSON:", err);
        return [];
      }
    } catch (err) {
      console.error("API Error:", err);
      throw err;
    }
  },
};
