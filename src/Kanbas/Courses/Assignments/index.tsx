import { Link, useParams } from "react-router-dom";
import { BsGripVertical, BsSearch } from "react-icons/bs";
import { FaEdit, FaCheckCircle } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";

interface Assignment {
  _id: string;
  title: string;
  course: string;
  modules: string;
  availability: string;
  due: string;
  points: number;
  description: string;
}

interface AssignmentsProps {
  assignments: Assignment[];
  setAssignments: React.Dispatch<React.SetStateAction<Assignment[]>>;
}

export default function Assignments({ assignments, setAssignments }: AssignmentsProps) {
  const { cid } = useParams(); // Get course ID from the URL
  const filteredAssignments = assignments.filter((assignment) => assignment.course === cid);

  return (
    <div id="wd-assignments-container" style={{ marginLeft: '30px' }}>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="input-group" style={{ width: "500px" }}>
          <span className="input-group-text">
            <BsSearch />
          </span>
          <input
            id="wd-search-assignment"
            className="form-control"
            placeholder="Search for Assignments"
            style={{ padding: "10px 15px" }}
          />
        </div>
        <div>
          <button id="wd-add-assignment-group" className="btn btn-secondary me-2">+ Group</button>
          <button id="wd-add-assignment" className="btn btn-danger text-white">+ Assignment</button>
        </div>
      </div>

      <ul id="wd-assignment-list" className="list-group rounded-0">
        {filteredAssignments.map((assignment) => (
          <li key={assignment._id} className="wd-assignment-item list-group-item p-3">
            <div className="d-flex align-items-center" style={{ marginLeft: '10px' }}>
              <BsGripVertical className="me-2 fs-4" style={{ cursor: 'pointer' }} />
              <Link
                to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}/Editor`}
                className="text-success"
              >
                <FaEdit className="me-2 fs-4" style={{ cursor: 'pointer' }} />
              </Link>
              <div>
                <div><strong>{assignment.title}</strong></div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span style={{ color: 'red' }}>{assignment.modules}</span> | <span style={{ fontWeight: 'bold', color: 'black' }}>{assignment.availability}</span>
                </div>
                <div>Due {assignment.due} | {assignment.points} pts</div>
              </div>
              <div className="ms-auto d-flex align-items-center" style={{ height: '100%' }}>
                <FaCheckCircle className="text-success me-2 fs-4" />
                <IoEllipsisVertical className="fs-4" />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
