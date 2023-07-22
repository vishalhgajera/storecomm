import React, { createContext, useContext, useEffect, useState } from 'react';
const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user , setUser] = useState({});

  const checkLoggedIn = () => {
    const accessToken = JSON.parse(localStorage.getItem('accessToken'));
    if (accessToken.token) {
      console.log(accessToken.user);
      setIsLoggedIn(true);
      setUser(accessToken.user)
    }
  };

  useEffect(() => {
    checkLoggedIn();
  }, []);

  const loggedInHandler = (params) => {
    console.log('is loggedin now',params);
    setIsLoggedIn(params);
  };

  const userHandler = (user) => {
    console.log('is loggedin now',user);
    setUser(user);
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, user, setIsLoggedIn: loggedInHandler, setUser:userHandler}}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
