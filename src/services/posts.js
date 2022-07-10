import { HTTP } from "./api";

export const create = async (url, body, config) => {
  const response = await HTTP.post(url, body, config);
  return response.data;
};

export const update = async (url, body, config) => {
  const response = await HTTP.patch(url, body, config);
  return response.data;
};

export const remove = async (url, config) => {
  const response = await HTTP.delete(url, config);
  return response.data;
};

export const getOne = async (url, config) => {
  const response = await HTTP.get(url, config);
  return response.data;
};

export const getAllTags = async (url, config) => {
  const response = await HTTP.get(url, config);
  return response.data;
};

export const getAll = async (url, config) => {
  const response = await HTTP.get(url, config);
  return response.data;
};
