import { createContext, useContext, useReducer } from "react";
//context ---------------------------------
const AuthContext = createContext();
//use reducer initial state------------------
const initialState = {
  user: null,
  isAuth: false,
};
const FAKE_USER = {
  name: "Jack",
  email: "jack@example.com",
  password: "qwerty",
  avatar: "https://i.pravatar.cc/100?u=zz",
};

//provider------------------

function AuthContextProvider({ children }) {
  const [{ user, isAuth }, dispatch] = useReducer(reducer, initialState);
  function reducer(action, state) {
    switch (action.type) {
      case "login":
        return { ...state, user: action.payload, isAuth: true };
      case "logout":
        return initialState;
    }
  }
  function logout() {
    dispatch({ type: "logout" });
  }
  function login(user) {
    if (user.name === FAKE_USER.name && user.email === FAKE_USER.email)
      dispatch({ type: "login", payload: user });
  }

  return (
    <AuthContext.Provider value={(login, logout, user, isAuth)}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthContextProvider, useAuth };
