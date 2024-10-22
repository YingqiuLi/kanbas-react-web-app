import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import { Link, useParams } from "react-router-dom";
import * as db from "../../Database"; // Import the modules from JSON

export default function Modules() {
  const { cid } = useParams(); // Get the course ID from the URL
  const modules = db.modules; // Use the modules from the database

  return (
    <div id="wd-modules-container" style={{ marginLeft: '30px' }}>
      <ul id="wd-modules" className="list-group rounded-0">
        {modules
          .filter((module: any) => module.course === cid) // Filter by course ID
          .map((module: any, index: number) => (
            <li key={index} className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
              <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
                <div>
                  <BsGripVertical className="me-2 fs-3" />
                  {module.name} {/* Display module name */}
                </div>
                <ModuleControlButtons />
              </div>
              {/* Render lessons if they exist */}
              {module.lessons && (
                <ul className="wd-lessons list-group rounded-0">
                  {module.lessons.map((lesson: any, idx: number) => (
                    <li key={idx} className="wd-lesson list-group-item p-3 ps-1">
                      <div className="d-flex justify-content-between align-items-center">
                        <Link to={`/Kanbas/Courses/${cid}/${lesson.module}/${lesson._id}`} className="text-decoration-none">
                          <BsGripVertical className="me-2 fs-3" />
                          {lesson.name} {/* Display lesson name */}
                        </Link>
                        <LessonControlButtons />
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
}
