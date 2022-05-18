import { cities } from "./core/constants";
import axios from "axios";

export const fetch = async () => {
  let data = [];

  const res = await Promise.all(
    cities.map(async (city) => {
      try {
        const res = await axios.get(
          `https://vast-shore-74260.herokuapp.com/banks?city=${city.value}`
        );
        return res.data;
      } catch (error) {
        throw error;
        console.log('ERROR')
      }
    })
  );
  data = [].concat(...res);
  data = data.map((bank) => {
    return { ...bank, isFavorite: false };
  });
  return data;
};
