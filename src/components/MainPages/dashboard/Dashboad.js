import LeftColumn from "./LeftColumn";
import "../../assets/styles/dashboard/style.css";
import RightColumn from "./RightColumn";

export default function Dashboard() {
  return (
    <div className="container mt-3">
      <div className="row ">
        <LeftColumn />
        <RightColumn />
      </div>
    </div>
  );
}
