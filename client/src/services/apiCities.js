import axios from "axios";

// Create a variable to hold the current controller
let currentController = null;

const baseURL = "https://world-q468.vercel.app/api/v1";

// Helper function to create a new controller
function createNewController() {
  if (currentController) {
    currentController.abort(); // Cancel the previous request
  }
  currentController = new AbortController();
  return currentController;
}

// Fetch all cities
export async function apiCities() {
  const controller = createNewController();
  try {
    const { data } = await axios.get(`${baseURL}/cities`, {
      signal: controller.signal,
    });
    return data;
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log("Previous request canceled:", error.message);
    } else {
      console.error("Error fetching cities:", error);
    }
    throw error;
  }
}

// Fetch city by ID
export async function apiCity(id) {
  const controller = createNewController();
  try {
    const { data } = await axios.get(`${baseURL}/cities/${id}`, {
      signal: controller.signal,
    });
    return data;
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log(
        `Previous request canceled for city ID ${id}:`,
        error.message
      );
    } else {
      console.error(`Error fetching city with ID ${id}:`, error);
    }
    throw error;
  }
}

// Delete city by ID
export async function apiDeleteCity(id) {
  const controller = createNewController();
  try {
    const { data } = await axios.delete(`${baseURL}/cities/${id}`, {
      signal: controller.signal,
    });
    return data;
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log(
        `Previous request canceled for city ID ${id}:`,
        error.message
      );
    } else {
      console.error(`Error deleting city with ID ${id}:`, error);
    }
    throw error;
  }
}

// Add a new city
export async function apiADDCity(cityData) {
  const controller = createNewController();
  try {
    const { data } = await axios.post(`${baseURL}/cities`, cityData, {
      signal: controller.signal,
    });
    return data;
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log("Previous request canceled:", error.message);
    } else {
      console.error("Error adding city:", error);
    }
    throw error;
  }
}

// User login
export async function Login(loginData) {
  const controller = createNewController();
  try {
    const { data } = await axios.post(`${baseURL}/users/Login`, loginData, {
      signal: controller.signal,
      withCredentials: true,
    });
    return data;
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log("Previous request canceled:", error.message);
    } else {
      console.error("Error during login:", error);
    }
    throw error;
  }
}

// User logout
export async function Logout() {
  const controller = createNewController();
  try {
    const { data } = await axios.get(`${baseURL}/users/Logout`, {
      signal: controller.signal,
      withCredentials: true,
    });
    return data;
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log("Previous request canceled:", error.message);
    } else {
      console.error("Error during logout:", error);
    }
    throw error;
  }
}

// Get current logged-in user data
export async function getMe() {
  const controller = createNewController();
  try {
    const { data } = await axios.get(`${baseURL}/users/getMe`, {
      // signal: controller.signal,
      withCredentials: true,
    });
    return data;
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log("Previous request canceled:", error.message);
    } else {
      console.error("Error fetching user data:", error);
    }
    throw error;
  }
}
