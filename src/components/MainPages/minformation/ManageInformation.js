import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Axios from "axios";
import "../../assets/styles/manage_information/style.css";
import { Link } from "react-router-dom";

export default function ManageInformation() {
  const [stuList, setStuList] = useState([]);
  useEffect(() => {
    Axios.get("https://schooladmin.herokuapp.com/api/get/stu_list").then(
      (response) => {
        setStuList(response.data.reverse());
      }
    );
  }, []);

  return (
    <div className="container mt-3">
      <div className="table-wrapper">
        {" "}
        <Table striped responsive="sm">
          <thead>
            <tr className="text-center">
              <th>Student ID</th>
              <th>Full Name</th>
              <th>Age</th>
              <th>Enrolled Date</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {stuList.map((item, i) => (
              <tr key={i} className="text-center">
                <td>{item.stu_id}</td>
                <td>
                  {item.first_name} {item.last_name}
                </td>
                <td>{item.age}</td>
                <td>{item.created_at.slice(0, 10)}</td>
                <td>
                  <Link
                    to={`/manage_information/${item.id}`}
                    className="btn bg-primary text-light p-2"
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
