import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Dashboard from "./components/MainPages/dashboard/Dashboad";
import Form from "./components/MainPages/add_new/AddNew";
import TopNav from "./components/TopNav";
import RemoveStudent from "./components/MainPages/RemoveStudent";
import AboutUs from "./components/MainPages/AboutUs";
import ManageInformation from "./components/MainPages/minformation/ManageInformation";
import Editinfo from "./components/MainPages/minformation/Editinfo";
import UpdateDetails from "./components/MainPages/minformation/Update";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<TopNav />}>
      <Route index element={<Dashboard />} />
      <Route path="add_new_student" element={<Form />} />
      <Route path="manage_information" element={<ManageInformation />} />
      <Route path="manage_information/:id" element={<Editinfo />} />
      <Route path="remove_student" element={<RemoveStudent />} />
      <Route path="about_us" element={<AboutUs />} />
      <Route
        path="manage_information/:id/:first_name/:last_name/:age"
        element={<UpdateDetails />}
      />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
