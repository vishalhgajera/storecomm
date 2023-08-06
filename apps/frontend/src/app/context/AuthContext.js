import React, { createContext, useContext, useEffect, useState } from 'react';
const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [accessToken , setAccessToken] = useState({});

  const checkLoggedIn = () => {
    let userToken = JSON.parse(localStorage.getItem('accessToken'))
    setAccessToken(userToken)
  };

  useEffect(() => {
    checkLoggedIn();
  }, []);

  const tokenHandler = (token) => {
   localStorage.setItem('accessToken', JSON.stringify(token));
  setAccessToken(token)
  }
  
  return (
    <AuthContext.Provider
      value={{accessToken , setAccessToken:tokenHandler}}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
