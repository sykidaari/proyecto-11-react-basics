import axios from 'axios';

export const characterApi = axios.create({
  baseURL: 'https://last-airbender-api.fly.dev/api/v1/characters/'
});

export const contentApi = axios.create({
  baseURL: 'https://api.sampleapis.com/avatar/'
});
