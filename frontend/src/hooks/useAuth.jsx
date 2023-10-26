import { useAuth } from "./AuthContext";

function useCustomAuth() {
  const auth = useAuth();

  return {
    isLoggedIn: auth.isLoggedIn, 
    login: auth.login, 
    logout: auth.logout,
  };
};

export default useCustomAuth;