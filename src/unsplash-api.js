import axios from "axios";
axios.defaults.baseURL = "https://api.unsplash.com";
export default async function fetchImages(query, currentPage) {
  const result = await axios.get(`/search/photos`, {
    params: {
      query: query,
      page: currentPage,
      per_page: 10,
      client_id: "xpSRSmDQWhP5U1mXscZhRKuLWymNxqd_rVhUFDssqgs",
      orientation: "landscape",
    },
  });
  return result.data;
}
