import axios from "axios";

export async function apiCities() {
  const data = await axios({
    method: "GET",
    url: "http://127.0.0.1:3000/api/v1/cities",
  });
  return data;
}
export async function apiCity(id) {
  const data = await axios({
    method: "GET",
    url: `http://127.0.0.1:3000/api/v1/cities/${id}`,
  });
  return data;
}

export async function apiDeleteCity(id) {
  const data = await axios({
    method: "DELETE",
    url: `http://127.0.0.1:3000/api/v1/cities/${id}`,
  });
  return data;
}
export async function apiADDCity(data1) {
  const data = await axios({
    method: "POST",
    url: `http://127.0.0.1:3000/api/v1/cities`,
    data: data1,
  });
  return data;
}

export async function Login(data) {
  const data1 = await axios({
    method: "POST",
    url: "http://127.0.0.1:3000/api/v1/users/Login",
    data,
    withCredentials: true,
  });
  return data1;
}
export async function Logout() {
  const data = await axios({
    method: "GET",
    url: "http://127.0.0.1:3000/api/v1/users/Logout",
    withCredentials: true,
  });
  return data;
}
export async function getMe() {
  const data = await axios({
    method: "GET",
    url: "http://127.0.0.1:3000/api/v1/users/getMe",
    withCredentials: true,
  });
  return data;
}
