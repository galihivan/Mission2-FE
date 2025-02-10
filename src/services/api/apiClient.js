import axios from "axios";

const apiClient = axios.create({
  baseURL:
    import.meta.env.REACT_APP_API_URL ||
    "https://67aa0e2a65ab088ea7e58109.mockapi.io",
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
