import TopBar from "App/components/TopBar";
import React from "react";

const PublicLayout = ({ children }) => (
  <>
    <TopBar />
    {children}
  </>
);

export default PublicLayout;
