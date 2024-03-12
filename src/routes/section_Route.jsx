import React from "react";
import { SectionContextProvider } from "../store/section_context";
import { Outlet } from "react-router";

export default function SectionRoute() {
  return (
    <React.Fragment>
      <SectionContextProvider>
        <Outlet />
      </SectionContextProvider>
    </React.Fragment>
  );
}
