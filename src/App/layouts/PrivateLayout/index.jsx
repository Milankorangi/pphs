import Container from "@mui/material/Container";
import React, { Suspense } from "react";
import Navbar from "App/components/Navbar";

const PrivateLayout = ({ children }) => {
  // const getMainItems = () => {
  //     return [
  //         {
  //             path: "/",
  //             key: "dashboard",
  //             text: "Dashboard",
  //             sub: false,
  //             icon: <Dashboard />,
  //             permission: [roles.SUPER_ADMIN, roles.ADMIN, roles.MANAGER],
  //         },
  //     ];
  // };

  return (
    // <Drawer menus={getMainItems}>
    //     <Suspense fallback={<Loading loading={true} />}>
    //         {children}
    //     </Suspense>
    // </Drawer>
    <>
      <Navbar />
      <Container maxWidth="lg" sx={{ my: 3 }}>
        {children}
      </Container>
    </>
  );
};

export default PrivateLayout;
