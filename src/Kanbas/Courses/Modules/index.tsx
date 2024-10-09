import { useState } from "react";
import { BsGripVertical } from "react-icons/bs";
import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import { Link } from "react-router-dom";

export default function Modules() {
  const [isWeek1Open, setIsWeek1Open] = useState(true);
  const [isWeek2Open, setIsWeek2Open] = useState(false);

  return (
    <div id="wd-modules-container" style={{ marginLeft: '30px' }}>
      <ModulesControls />
      <br /><br /><br />

      <ul id="wd-modules" className="list-group rounded-0">
        {/* Week 1 Module */}
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
            <div onClick={() => setIsWeek1Open(!isWeek1Open)} style={{ cursor: 'pointer' }}>
              <BsGripVertical className="me-2 fs-3" />
              Week 1
            </div>
            <ModuleControlButtons />
          </div>
          {isWeek1Open && (
            <ul className="wd-lessons list-group rounded-0">
              <li className="wd-lesson list-group-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                LEARNING OBJECTIVES
                <LessonControlButtons />
              </li>
              <li className="wd-lesson list-group-item p-3 ps-1">
                <div className="d-flex justify-content-between align-items-center">
                  <Link to="/Kanbas/Courses/1234/Introduction" className="text-decoration-none">
                    <BsGripVertical className="me-2 fs-3" />
                    Introduction to the course
                  </Link>
                  <LessonControlButtons />
                </div>
              </li>
              <li className="wd-lesson list-group-item p-3 ps-1">
                <div className="d-flex justify-content-between align-items-center">
                  <Link to="/Kanbas/Courses/1234/WebDev" className="text-decoration-none">
                    <BsGripVertical className="me-2 fs-3" />
                    Learn what is Web Development
                  </Link>
                  <LessonControlButtons />
                </div>
              </li>
              <li className="wd-lesson list-group-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                READINGS
                <LessonControlButtons />
              </li>
              <li className="wd-lesson list-group-item p-3 ps-1">
                <div className="d-flex justify-content-between align-items-center">
                  <Link to="/Kanbas/Courses/1234/Chapter1" className="text-decoration-none">
                    <BsGripVertical className="me-2 fs-3" />
                    Chapter 1
                  </Link>
                  <LessonControlButtons />
                </div>
              </li>
              <li className="wd-lesson list-group-item p-3 ps-1">
                <div className="d-flex justify-content-between align-items-center">
                  <Link to="/Kanbas/Courses/1234/Chapter2" className="text-decoration-none">
                    <BsGripVertical className="me-2 fs-3" />
                    Chapter 2
                  </Link>
                  <LessonControlButtons />
                </div>
              </li>
            </ul>
          )}
        </li>

        {/* Week 2 Module */}
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
            <div onClick={() => setIsWeek2Open(!isWeek2Open)} style={{ cursor: 'pointer' }}>
              <BsGripVertical className="me-2 fs-3" />
              Week 2
            </div>
            <ModuleControlButtons />
          </div>
          {isWeek2Open && (
            <ul className="wd-lessons list-group rounded-0">
              <li className="wd-lesson list-group-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                LEARNING OBJECTIVES
                <LessonControlButtons />
              </li>
              <li className="wd-lesson list-group-item p-3 ps-1">
                <div className="d-flex justify-content-between align-items-center">
                  <Link to="/Kanbas/Courses/1234/Review" className="text-decoration-none">
                    <BsGripVertical className="me-2 fs-3" />
                    Review of Week 1 Topics
                  </Link>
                  <LessonControlButtons />
                </div>
              </li>
              <li className="wd-lesson list-group-item p-3 ps-1">
                <div className="d-flex justify-content-between align-items-center">
                  <Link to="/Kanbas/Courses/1234/HTMLCSS" className="text-decoration-none">
                    <BsGripVertical className="me-2 fs-3" />
                    Intro to HTML & CSS
                  </Link>
                  <LessonControlButtons />
                </div>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
}
