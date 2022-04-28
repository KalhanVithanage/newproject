import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TemplateForm from "../containers/templates/templateForm";
import TemplateView from "../containers/templates/templateView";
import Login from "../containers/user/forms/loginForm";

const routes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/A" element={<TemplateForm/>} />
          <Route exact path="/B" element={<TemplateView/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default routes;
