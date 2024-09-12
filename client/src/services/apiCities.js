import axios from "axios";

let currentController = null;

const baseURL = "https://world-q468.vercel.app/api/v1";

function createNewController() {
  if (currentController) {
    currentController.abort();
  }
  currentController = new AbortController();
  return currentController;
}

// Fetch all cities
export async function apiCities() {
  const { data } = await axios.get(`${baseURL}/cities`);
  return data;
}

// Fetch city by ID
export async function apiCity(id) {
  const { data } = await axios.get(`${baseURL}/cities/${id}`, {});
  return data;
}

// Delete city by ID
export async function apiDeleteCity(id) {
  const controller = createNewController();
  const { data } = await axios.delete(`${baseURL}/cities/${id}`, {
    signal: controller.signal,
  });
  return data;
}

// Add a new city
export async function apiADDCity(cityData) {
  const controller = createNewController();

  const { data } = await axios.post(`${baseURL}/cities`, cityData, {
    signal: controller.signal,
  });
  return data;
}

// User login
export async function Login(loginData) {
  const controller = createNewController();

  const { data } = await axios.post(`${baseURL}/users/Login`, loginData, {
    signal: controller.signal,
    withCredentials: true,
  });
  return data;
}

// User logout
export async function Logout() {
  const controller = createNewController();
  const { data } = await axios.get(`${baseURL}/users/Logout`, {
    signal: controller.signal,
    withCredentials: true,
  });
  return data;
}

// Get current logged-in user data
export async function getMe() {
  const { data } = await axios.get(`${baseURL}/users/getMe`, {
    withCredentials: true,
  });
  return data;
}
