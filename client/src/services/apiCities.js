import axios from "axios";

const api = axios.create({
  baseURL: "https://world-q468.vercel.app/api/v1",
  withCredentials: true,
});
export async function apiCities() {
  const data = await api.get("/cities");
  return data;
}
export async function apiCity(id) {
  const data = await api.get(`/cities/${id}`);
  return data;
}

export async function apiDeleteCity(id) {
  try {
    const data = await api.delete(`/cities/${id}`);

    return data.data;
  } catch (error) {
    console.log("Error", error.message);
  }
}

export async function apiADDCity(data1) {
  const data = await api.post(`/cities`, data1);
  return data;
}

export async function Login(data) {
  const data1 = await api.post(`/users/Login`, data);
  return data1;
}
export async function signUp(data) {
  const data1 = await api.post(`/users/SignUp`, data);
  return data1;
}
export async function Logout() {
  const data = await api.get(`/users/Logout`);
  return data;
}
export async function getMe() {
  const data = await api.get(`/users/getMe`);
  return data;
}
