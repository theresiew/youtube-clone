import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'X-RapidAPI-Key': '172bb4934amsh636e8ca6c62ad5fp1c62d7jsn7c720a9ab8fc',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
});

export const fetchFromAPI = async (url) => {
  const { data } = await apiClient.get(`/${url}`);
  return data;
};