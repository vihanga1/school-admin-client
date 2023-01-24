import Axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function FormSection(props) {
  const [userData, setUserData] = useState({});

  function onChangeHandler(e) {
    setUserData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (
      userData.firstName.length > 0 &&
      userData.lastName.length > 0 &&
      userData.age.length > 0 &&
      userData.stu_id.length > 0
    ) {
      Axios.post("https://schooladmin.herokuapp.com/api/insert/", {
        firstName: userData.firstName,
        lastName: userData.lastName,
        age: userData.age,
        stu_id: userData.stu_id,
      }).then((response) => {
        if (response.data !== "enrolled") {
          props.setIsFormSubmit(false);
        } else if (response.data === "enrolled") {
          alert("Student Already Enrolled");
        } else {
          alert("Server Error");
        }
      });
    } else {
      alert("Please Fill all the input fields");
    }
  }
  return (
    <div className="container mt-3 d-flex justify-content-center">
      <Form className="newStudentForm">
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Student Identification</Form.Label>
          <Form.Control
            className="formControl"
            onChange={onChangeHandler}
            name="stu_id"
            type="text"
            placeholder="Enter Student ID"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            className="formControl"
            onChange={onChangeHandler}
            name="firstName"
            type="text"
            placeholder="Enter First Name"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            className="formControl"
            onChange={onChangeHandler}
            name="lastName"
            type="text"
            placeholder="Enter Last Name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicNumber">
          <Form.Label>Age</Form.Label>
          <Form.Control
            className="formControl"
            name="age"
            type="number"
            placeholder="Age"
            onChange={onChangeHandler}
          />
        </Form.Group>
        <Button
          className="submitButton"
          onClick={handleSubmit}
          variant="primary"
          type="submit"
        >
          Add Student
        </Button>
      </Form>
    </div>
  );
}
