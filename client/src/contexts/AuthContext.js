import { createContext, useContext, useReducer } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const initialValue = {
  user: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return {
        ...state,
        user: action.payload,
      };

    case "logout":
      return {
        ...state,
        user: null,
      };

    case "signup":
      return {
        ...state,
        user: action.payload,
      };

    default:
      throw new Error("Unknown action");
  }
}

function AuthProvider({ children }) {
  
  const [{ user }, dispatch] = useReducer(reducer, initialValue);

  async function login(email, password) {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        `http://localhost:4000/api/v1/artist/login`,
        { email, password },
        config
      );

      const USER = {
        name: data.name,
        email: data.email,
        id: data._id,
        
      };

      console.log("Login successful");
      dispatch({ type: "login", payload: USER });
      
    } catch (err) {
      console.error("Authentication failed:", err.message);
    }
  }

  async function signup(name, email, password) {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        `http://localhost:4000/api/v1/artist/new`,
        { name, email, password },
        config
      );

      const USER = {
        name: data.name,
        email: data.email,
        id: data._id,
        
      };

      console.log("Signup successful");
      dispatch({ type: "signup", payload: USER });
      
    } catch (err) {
      console.error("Authentication failed:", err.message);
    }
  }

  function logout() {
    dispatch({ type: "logout" });
    
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("This context was used outside the AuthProvider.");

  return context;
}

export { AuthProvider, useAuth };
