import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Component/MoviesComponent/Home";
import TvShow from "./Component/Tv Show/TvShow";
import WebSeries from "./Component/WebSeries/WebSeries";
import Setting from "./Component/Setting/Setting";
import SideBar from "./Component/Navigation/Sidebar";
import Navber from "./Component/Navigation/Navber";
import SignUp from "./Component/AuthPage/SignUp";
import Login from "./Component/AuthPage/Login";
import Profile from "./Component/AuthPage/Profile";
import ReviewBox from "./Component/MoviesComponent/ReviewBox";
import { AuthContextProvider } from "./Component/AuthPage/Authentication";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

const App = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const unSubcribes = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unSubcribes();
    };
  });
  return (
    <AuthContextProvider>
      {<Navber />}
      {user && <SideBar />}
      {user ? (
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:movieId' element={<ReviewBox />} />
          <Route path='/tvshow' element={<TvShow />} />
          <Route path='/webseries' element={<WebSeries />} />
          <Route path='/setting' element={<Setting />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      ) : (
        <Routes>
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Login />} />
        </Routes>
      )}
    </AuthContextProvider>
  );
};

export default App;
