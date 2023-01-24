import Axios from "axios";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../../assets/styles/manage_information/style.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { VscChromeClose } from "react-icons/vsc";

export default function FormSection(props) {
  const [userData, setUserData] = useState({
    id: 0,
    firstName: "",
    lastName: "",
    age: 0,
  });

  const { id, first_name, last_name, age } = useParams();
  // adding current data to the object
  useEffect(() => {
    setUserData(() => ({
      id: id,
      firstName: first_name,
      lastName: last_name,
      age: age,
    }));
  }, []);

  //   Adding Data to the state
  function onChangeHandler(e) {
    setUserData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  }

  //   Handle Submit
  function handleSubmit(e) {
    e.preventDefault();
    if (
      userData.firstName.length > 0 &&
      userData.lastName.length > 0 &&
      userData.age.length > 0
    ) {
      Axios.post("https://schooladmin.herokuapp.com/api/update/", {
        firstName: userData.firstName,
        lastName: userData.lastName,
        age: userData.age,
        id: userData.id,
      }).then((response) => {
        console.log(response);
        console.log(userData.id);
        window.location.replace("/manage_information");
      });
    } else {
      alert("Please Fill all the input fields");
    }
  }

  return (
    <div className="container mt-3 d-flex justify-content-center forClose">
      <Link to={`/manage_information/${id}`} className=" close-btn">
        <VscChromeClose className="" />
      </Link>
      <Form className="newStudentForm">
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            value={userData.firstName}
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
            value={userData.lastName}
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
            value={userData.age}
            className="formControl"
            name="age"
            type="number"
            placeholder="Age"
            onChange={onChangeHandler}
          />
        </Form.Group>
        <Button
          className="submitButton "
          onClick={handleSubmit}
          variant="success"
          type="submit"
        >
          Update
        </Button>
      </Form>
    </div>
  );
}
