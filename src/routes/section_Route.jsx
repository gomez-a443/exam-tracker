import React from "react";
import { SectionContextProvider } from "../store/section_context";
import { Outlet } from "react-router";
import { QuestionContextProvider } from "../store/question_context";

export default function SectionRoute() {
  return (
    <React.Fragment>
      <SectionContextProvider>
        <QuestionContextProvider>
          <Outlet />
        </QuestionContextProvider>
      </SectionContextProvider>
    </React.Fragment>
  );
}
