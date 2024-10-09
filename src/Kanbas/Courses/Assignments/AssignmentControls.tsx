import { FaPlus } from "react-icons/fa6";

export default function AssignmentControls() {
  return (
    <div id="wd-assignments-controls" className="text-nowrap mb-3">
      {/* +Group Button */}
      <button id="wd-add-assignment-group-btn" className="btn btn-lg btn-secondary me-1 float-end">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Group
      </button>

      {/* +Assignment Button */}
      <button id="wd-add-assignment-btn" className="btn btn-lg btn-secondary me-1 float-end">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Assignment
      </button>
    </div>
  );
}
