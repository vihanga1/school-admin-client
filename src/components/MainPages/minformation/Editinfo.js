import Axios from "axios";
import { useEffect, useState } from "react";
import profileImage from "../../assets/images/profile.jpg";
import { useParams } from "react-router-dom";
import "../../assets/styles/manage_information/style.css";
import { Link } from "react-router-dom";
import { VscChromeClose } from "react-icons/vsc";

export default function Editinfo() {
  const { id } = useParams();
  const [studentData, setStudentData] = useState({});

  useEffect(() => {
    Axios.get(`https://schooladmin.herokuapp.com/api/get/stu_info/${id}`).then(
      (response) => {
        setStudentData(response.data[0]);
      }
    );
  }, []);

  function onDelete(e) {
    e.preventDefault();

    if (window.confirm("Are You Really Want to Delete This Record?")) {
      Axios.post(`https://schooladmin.herokuapp.com/api/delete/`, {
        id: studentData.id,
      }).then((response) => {
        window.location.replace("/manage_information");
      });
    }
  }

  return (
    <div className="container mt-5">
      <div className="row mt-5">
        <Link to={"/manage_information"} className=" forClose">
          <VscChromeClose className="close-btn" />
        </Link>
        <div className="col-md-6 d-flex justify-content-center">
          <img src={profileImage} alt="" />
        </div>
        <div className="col-md-6 stu-info d-flex flex-column justify-content-center">
          <div className="row">
            <div className="col">Student ID :</div>
            <div className="col stu-id">{studentData.stu_id}</div>
          </div>
          <div className="row">
            <div className="col">Full Name :</div>
            <div className="col">
              {studentData.first_name} {studentData.last_name}
            </div>
          </div>
          <div className="row">
            <div className="col">Age :</div>
            <div className="col">{studentData.age}</div>
          </div>
          <div className="row">
            <div className="col">Enrolled Date :</div>
            <div className="col">
              {Object.keys(studentData).length > 0
                ? studentData.created_at.slice(0, 10)
                : "Not working"}
            </div>
          </div>
          <div className="row mt-3">
            <div className="col">
              <Link
                to={`/manage_information/${studentData.id}/${studentData.first_name}/${studentData.last_name}/${studentData.age}`}
                state={{ name: 1 }}
                className="btn btn-success px-2 py-1"
              >
                Edit
              </Link>
            </div>
            <div className="col">
              <button onClick={onDelete} className="btn btn-danger px-2 py-1">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
