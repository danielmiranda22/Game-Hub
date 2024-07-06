import axios from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "abd6847fe3cb46e582f17935b941483b", //this is not secure and not recomendende!!!!!
  },
});
