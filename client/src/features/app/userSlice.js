import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getMe, Login } from "../../services/apiCities";
import toast from "react-hot-toast";

export const Logins = createAsyncThunk(
  "user/Login",
  async (data, { rejectWithValue }) => {
    try {
      const user = await Login(data);
      localStorage.setItem("auth", true);
      if (user.data.user) toast.success("Login successfully");
      return user.data.user;
    } catch (err) {
      console.log(err);
      const errorMessage = err?.response?.data?.message || "An error occurred";
      toast.error(errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);
export const Getuser = createAsyncThunk(
  "user/Getuser",
  async (_, { rejectWithValue }) => {
    try {
      const user = await getMe();
      return user.data.data.doc;
    } catch (err) {
      console.log(err);
      const errorMessage = err?.response?.data?.message || "An error occurred";
      toast.error(errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);
const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
    Auth: JSON.parse(localStorage.getItem("auth")),
    err: "",
    loader: false,
  },
  extraReducers: (bulid) =>
    bulid
      .addCase(Logins.pending, (state) => {
        state.loader = true;
      })
      .addCase(Logins.fulfilled, (state, action) => {
        state.user = action.payload;
        state.Auth = true;
        state.loader = false;
        state.err = "";
      })
      .addCase(Logins.rejected, (state, action) => {
        state.err = action.payload;
        state.loader = false;
      })
      .addCase(Getuser.pending, (state) => {
        state.loader = true;
      })
      .addCase(Getuser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.Auth = true;
        state.loader = false;
      })
      .addCase(Getuser.rejected, (state, action) => {
        state.err = action.payload;
        state.loader = false;
      }),
  reducers: {
    Logouts(state) {
      state.user = {};
      state.Auth = false;
      localStorage.removeItem("auth");
    },
  },
});

export const { Logouts } = userSlice.actions;

export default userSlice.reducer;
