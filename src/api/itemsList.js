import axios from "axios";

export const getItemsList = (date, page) => {
  const requestUrl = `https://api.github.com/search/repositories`;

  const params = {
    q: `created:>${date}`,
    sort: "stars",
    order: "desc",
    page
  };

  return axios.get(requestUrl, { params });
};
