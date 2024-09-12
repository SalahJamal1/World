import axios from "axios";

export async function apiCities() {
  const data = await axios({
    method: "GET",
    url: "https://world-q468.vercel.app/api/v1/cities",
  });
  return data;
}
export async function apiCity(id) {
  const data = await axios({
    method: "GET",
    url: `https://world-q468.vercel.app/api/v1/cities/${id}`,
  });
  return data;
}

export async function apiDeleteCity(id) {
  const data = await axios({
    method: "DELETE",
    url: `https://world-q468.vercel.app/api/v1/cities/${id}`,
  });
  return data;
}
export async function apiADDCity(data1) {
  console.log(data1);
  const data = await axios({
    method: "POST",
    url: `https://world-q468.vercel.app/api/v1/cities`,
    data: data1,
  });
  return data;
}

export async function Login(data) {
  const data1 = await axios({
    method: "POST",
    url: "https://world-q468.vercel.app/api/v1/users/Login",
    data,
    withCredentials: true,
  });
  return data1;
}
export async function Logout() {
  const data = await axios({
    method: "GET",
    url: "https://world-q468.vercel.app/api/v1/users/Logout",
    withCredentials: true,
  });
  return data;
}
export async function getMe() {
  const data = await axios({
    method: "GET",
    url: "https://world-q468.vercel.app/api/v1/users/getMe",
    withCredentials: true,
  });
  return data;
}
