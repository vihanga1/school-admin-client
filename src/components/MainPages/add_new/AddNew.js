import { useState } from "react";
import "../../assets/styles/add_new/style.css";
import ChooseFormDashboard from "./ChooseFormDashboard";
import Form from "./Form";

export default function AddNew() {
  const [isFormSubmit, setIsFormSubmit] = useState(true);

  return isFormSubmit ? (
    <Form setIsFormSubmit={setIsFormSubmit} />
  ) : (
    <ChooseFormDashboard setIsFormSubmit={setIsFormSubmit} />
  );
}
