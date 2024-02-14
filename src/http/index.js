import axios from "axios";

export const getRecipesList = async (tags = null, size) => {
  const options = {
    method: "GET",
    url: "https://tasty.p.rapidapi.com/recipes/list",
    params: {
      from: "0",
      size: size || "20",
      tags,
    },
    headers: {
      "X-RapidAPI-Key": "50aef948b6msh764de3fee6c5b9dp137e3ejsn17138e68ef36",
      "X-RapidAPI-Host": "tasty.p.rapidapi.com",
    },
  };

  return await axios.request(options);
};
