import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import { UseHookUser } from "./useContext/stateUsers";

const RouterApp = () => {
  const { user } = UseHookUser();

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {user.id && <Route path="/favorites" element={<Favorites />}></Route>}
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
};

export default RouterApp;
