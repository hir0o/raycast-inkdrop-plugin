import axios from "axios";

const axiosBase = axios.create({
  baseURL: "http://localhost:19840/",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    Authorization: "",
  },
});

export const axiosGet = async <T>(url: string): Promise<T> => {
  return await axiosBase.get<T>(url).then((res) => res.data);
};

export const axiosPost = async <T>(url: string, data: any): Promise<T> => {
  return await axiosBase.post<T>(url, data).then((res) => res.data);
};
