import axios from "axios";

export const getItemsList = date => {
  const requestUrl = `https://api.github.com/search/repositories`;

  const params = {
    q: `created:>${date}`,
    sort: "stars",
    order: "desc"
  };

  return axios.get(requestUrl, { params });
};
