import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: { maxResults: '50' },
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: options.headers,
});

export const fetchFromAPI = async (url) => {
  const { data } = await apiClient.get(`/${url}`, { params: options.params });
  return data;
};