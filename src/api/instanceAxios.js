import axios from 'axios';

export const instanceAxios = axios.create(
   {
    baseURL: "http://localhost:9000/api/v1/",
    timeout: 1000,
   });

export const axiosGet = async (url, token) => {
   return await instanceAxios.get(url, {
      headers: {
        Authorization: `Basic ${token}`,
      },
    });
}
export const axiosPostWithToken = async (url, data,  token) => {
   return await instanceAxios.post(url, data, {
      headers: {
        Authorization: `Basic ${token}`,
      },
    });
}


