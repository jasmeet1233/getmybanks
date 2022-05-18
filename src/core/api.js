import axios from "axios";

export const fetchBankData = async (city) => {
    try {
        const response = await axios.get(
          `https://vast-shore-74260.herokuapp.com/banks?city=${city}`
        );
        return response.data;
    } catch (error) {
        alert('something went wrong')
    }
}