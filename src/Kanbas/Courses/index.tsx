import CoursesNavigation from "./Navigation";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Modules from "./Modules";
import Home from "./Home";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
import { FaAlignJustify } from "react-icons/fa";
import PeopleTable from "./People/Table";
import { useState } from "react"; // Import useState
import * as db from "../Database"; // Import the assignments database

export default function Courses() {
  const { cid } = useParams();
  const course = db.courses.find((course) => course._id === cid);
  const { pathname } = useLocation();

  // Manage assignments state here
  const [assignments, setAssignments] = useState(db.assignments);

  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course && course.name} &gt; {pathname.split("/")[4] || "Home"}
      </h2>
      <hr />
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CoursesNavigation />
        </div>
        <div className="flex-fill">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments assignments={assignments} setAssignments={setAssignments} />} />
            <Route path="Assignments/:aid/Editor" element={<AssignmentEditor assignments={assignments} setAssignments={setAssignments} />} />
            <Route path="People" element={<PeopleTable />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
