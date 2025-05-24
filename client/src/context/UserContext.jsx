import { createContext, useContext } from "react";
import { useReducer } from "react";
import FetchCurrentUser from "../components/FetchCurrentUser";

const initialState = {
  user: {},
  Auth: false,
  err: "",
  loader: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "User/Login":
      localStorage.setItem("Auth", true);
      return {
        ...state,
        user: action.payload,
        Auth: true,
        loader: false,
        err: "",
      };
    case "User/Getuser":
      return {
        ...state,
        user: action.payload,
        Auth: JSON.parse(localStorage.getItem("Auth")),
        loader: false,
      };
    case "User/Loader":
      return {
        ...state,
        loader: true,
      };
    case "User/Logout":
      localStorage.removeItem("Auth");
      return { ...state, user: {}, Auth: false, loader: false };
    case "User/Error":
      return { ...state, err: action.payload, loader: false };
    default:
      return state;
  }
};
//
const UserProvider = createContext();
function UserContext({ children }) {
  const [{ user, Auth, err, loader }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <UserProvider.Provider value={{ user, Auth, err, loader, dispatch }}>
      <FetchCurrentUser />
      {children}
    </UserProvider.Provider>
  );
}

export default UserContext;
export function useUser() {
  const x = useContext(UserProvider);
  if (x === undefined) throw new Error("the user context is not loaded");
  return x;
}
