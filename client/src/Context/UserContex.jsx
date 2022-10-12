/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */
// /* eslint-disable react/prop-types */
// /* eslint-disable react/jsx-no-constructed-context-values */
// /* eslint-disable react/react-in-jsx-scope */
import axios from 'axios';
import { useState, createContext } from 'react';
import { useNavigate } from 'react-router-dom';

const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const regHandler = (e, inputs) => {
    e.preventDefault();
    axios.post('/user/registration', inputs)
      .then((res) => setUser(res.data))
      .catch(console.log)
      .then(() => navigate('/'));
  };

  const logHandler = (e, inputs) => {
    e.preventDefault();
    axios.post('/user/authorization', inputs)
      .then((res) => setUser(res.data))
      .catch(console.log)
      .then(() => navigate('/'));
  };

  const logOutHandler = () => {
    axios('/user/logout')
      .then(() => setUser({}))
      .catch(console.log)
      .then(() => navigate('/'));
  };
  return (
    <UserContext.Provider value={{
      user, regHandler, logHandler, logOutHandler,
    }}
    >
      {children}
    </UserContext.Provider>
  );
}
export { UserContext };

// import axios from 'axios';
// import React, { createContext, useState, useEffect } from 'react';

// const UserContext = createContext();

// export default function UserContextProvider({ children }) {
//   const [user, setUser] = useState({});

//   useEffect(() => {
//     axios.post('/user/Check')
//       .then((res) => setUser(res.data))
//       .catch(console.log);
//   }, []);

//   const signupHandler = (e, inputs) => {
//     e.preventDefault();
//     axios.post('/user/Registration', inputs)
//       .then((res) => setUser(res.data))
//       .catch(console.log);
//   };

//   const loginHandler = (e, inputs) => {
//     e.preventDefault();
//     axios.post('/user/Authorization', inputs)
//       .then((res) => setUser(res.data))
//       .catch(console.log);
//   };

//   const logoutHandler = () => {
//     axios('/user/Logout')
//       .then(() => setUser({}))
//       .catch(console.log);
//   };
//   return (
//     <UserContext.Provider value={{
//       user, signupHandler, loginHandler, logoutHandler,
//     }}
//     >
//       {children}
//     </UserContext.Provider>
//   );
// }

// export { UserContext };
