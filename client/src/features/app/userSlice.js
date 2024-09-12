import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Login } from "../../services/apiCities";
import toast from "react-hot-toast";

export const Logins = createAsyncThunk(
  "user/Login",
  async (data, { rejectWithValue }) => {
    try {
      const user = await Login(data);
      if (user.data.user) toast.success("Login successfully");
      return user.data.user;
    } catch (err) {
      console.log(err);
      toast.error(err.response.data.message);

      return rejectWithValue(err.response.data.message);
    }
  }
);
const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
    Auth: false,
    err: "",
    loader: true,
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
      }),
  reducers: {
    Logouts(state) {
      state.user = {};
      state.Auth = false;
    },

    Getuser(state, action) {
      state.user = action.payload;
      state.Auth = true;
      state.loader = false;
    },
  },
});

export const { Logouts, Getuser } = userSlice.actions;

export default userSlice.reducer;
