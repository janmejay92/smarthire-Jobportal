import {
  createContext,
  useState,
} from "react";

const AuthContext = createContext(null);

function getStoredUser() {
  const storedUser = localStorage.getItem("smarthire_user");

  if (!storedUser) {
    return null;
  }

  try {
    return JSON.parse(storedUser);
  } catch {
    localStorage.removeItem("smarthire_user");
    return null;
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(getStoredUser);

  const login = (userData) => {
    setUser(userData);

    localStorage.setItem(
      "smarthire_user",
      JSON.stringify(userData)
    );
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("smarthire_user");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isAuthenticated: Boolean(user),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext };