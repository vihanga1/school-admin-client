import Axios from "axios";
import { useEffect, useState } from "react";

export default function LeftColumn() {
  const [totalSeats, setTotalSeats] = useState(0);
  useEffect(() => {
    Axios.get("https://schooladmin.herokuapp.com/api/get/stu_info").then(
      (response) => {
        setTotalSeats(response.data.length);
      }
    );
  }, []);
  return (
    <div className="col-md-4 seat-availability d-flex align-items-center">
      <h1 className=" text-center">
        <span className="available-seats">{87 - totalSeats}</span> Seats
        Available Out of 87
      </h1>
    </div>
  );
}
