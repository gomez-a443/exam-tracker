import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import Login from "./pages/Login";
import SectionRoute from "./routes/section_Route";
import Question_List from "./pages/Question_List";
import Question_View from "./pages/Question_View";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/sections" element={<SectionRoute />}>
          <Route index element={<Question_List />} />
          <Route path="/sections/:id" element={<Question_View />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
