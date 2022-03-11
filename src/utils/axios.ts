import { getPreferenceValues } from "@raycast/api";
import axios from "axios";
import { Auth } from "../types";

const getAuthHeader = () => {
  const { username, password } = getPreferenceValues<Auth>();
  const auth = Buffer.from(`${username}:${password}`).toString("base64");
  return `Basic ${auth}`;
};

const axiosBase = axios.create({
  baseURL: "http://localhost:19840/",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    Authorization: getAuthHeader(),
  },
});

export const axiosGet = async <T>(url: string): Promise<T> => {
  return await axiosBase.get<T>(url).then((res) => res.data);
};

export const axiosPost = async <T>(url: string, data: any): Promise<T> => {
  return await axiosBase.post<T>(url, data).then((res) => res.data);
};
