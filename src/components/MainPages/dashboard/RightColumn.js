import Axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function RightColumn() {
  const [recentStuList, setRecentStuList] = useState([]);
  useEffect(() => {
    Axios.get("https://schooladmin.herokuapp.com/api/get/recent_stu").then(
      (response) => {
        setRecentStuList(response.data);
      }
    );
  }, []);
  return (
    <div className="col-md-8 ps-0 ps-md-3 pe-0 mt-2 mt-md-0 ">
      <div className="col-sm-12 recent-student-list">
        <h3 className="text-center text-secondary mt-1">
          Most Recent Students
        </h3>
        <ul className="list-group border-0 recent-student-ul-list">
          <Table bordered={false} className="table-striped">
            <tbody>
              {recentStuList.map((item) => {
                return (
                  <tr key={item.id} className="text-center">
                    <td>
                      {item.first_name} {item.last_name}
                    </td>
                    <td>{item.age}</td>
                    <td>{item.stu_id}</td>
                    <td>{item.created_at.slice(0, 10)}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </ul>
      </div>
    </div>
  );
}
