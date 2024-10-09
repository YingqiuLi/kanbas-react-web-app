import { IoEllipsisVertical } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { Link } from "react-router-dom";

export default function AssignmentControlButtons() {
  return (
    <div className="float-end">
      <GreenCheckmark />
      <Link to="/Kanbas/Courses/Assignments/Editor" className="text-success">
        <FaEdit className="me-2 fs-4" style={{ cursor: 'pointer' }} />
      </Link>
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
