import React from "react";
import { Route, Routes } from "react-router-dom";

import { publicRoutes } from "../../Public";
import { PublicLayout } from "../layouts/";
import PrivateArea from "App/layouts/PrivateLayout/PrivateArea";

const MainRoutes = () => {
  return (
    <PublicLayout>
      <Routes>
        {publicRoutes.map((route) => (
          <Route path={route.path} element={route.component} key={route.path} />
        ))}
        <Route path={"*"} element={<PrivateArea />} />
      </Routes>
    </PublicLayout>
  );
};

export default MainRoutes;
