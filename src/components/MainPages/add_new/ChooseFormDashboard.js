import { Link } from "react-router-dom";

export default function ChooseFormDashboard(props) {
  function backtoForm(e) {
    props.setIsFormSubmit(true);
  }
  return (
    <div className="container d-flex d justify-content-center align-items-center mt-5">
      <div className="row">
        <div className="col-sm-12">
          <h3>Do you need to add another Student?</h3>
          <div className="row">
            <div className="col-sm-6 d-flex justify-content-center">
              <button onClick={backtoForm} className=" px-5 btn btn-success">
                Yes
              </button>
            </div>
            <div className="col-sm-6  d-flex justify-content-center">
              <Link
                to="/"
                onClick={backtoForm}
                className=" px-5 btn btn-primary"
              >
                No
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
