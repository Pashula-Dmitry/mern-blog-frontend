import { HTTP } from "./api";

export const login = async (url, body) => {
  const response = await HTTP.post(url, {
    password: body.password,
    username: body.username,
  });

  return response.data;
};

export const register = async (url, body) => {
  const response = await HTTP.post(url, body);

  return response.data;
};

export const getMe = async (url) => {
  const response = await HTTP.get(url);

  return response.data;
};

export const clearTokens = () => {
  localStorage.removeItem("token");
};
