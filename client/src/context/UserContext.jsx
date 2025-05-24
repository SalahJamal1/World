import { createContext, useContext } from "react";
import { useReducer } from "react";

const initialState = {
  user: {},
  Auth: false,
  err: "",
  loader: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "User/Login":
      return { ...state, user: action.payload, Auth: true, loader: true };
    case "User/Getuser":
      return {
        ...state,
        user: action.payload,
        Auth: state.user.name ? true : false,
        loader: false,
      };
    case "User/Loader":
      return {
        ...state,
        loader: true,
      };
    case "User/Logout":
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
