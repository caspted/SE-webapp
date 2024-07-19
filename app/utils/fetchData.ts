import axios from "axios";

export const fetchData = async (path: string) =>
  await axios
    .get(`/api/${path}`)
    .then((res) => res.data)
    .catch((err) => {
      console.log(err.response.data)
      throw new Error(err.response.data);
    });
