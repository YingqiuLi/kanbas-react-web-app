import React, { useState } from "react";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import ModulesControls from "./ModulesControls";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addModule, editModule, updateModule, deleteModule } from "./reducer";

export default function Modules() {
  const { cid } = useParams(); // Get the course ID from the URL
  const [moduleName, setModuleName] = useState(""); // State for module name input

  // Retrieve modules from Redux store
  const modules = useSelector((state: any) => state.modulesReducer.modules);

  // Get dispatch function to dispatch actions
  const dispatch = useDispatch();

  return (
    <div id="wd-modules-container" style={{ marginLeft: "30px" }}>
      {/* Modules Controls */}
      <ModulesControls
        setModuleName={setModuleName}
        moduleName={moduleName}
        addModule={() => {
          dispatch(addModule({ name: moduleName, course: cid }));
          setModuleName("");
        }}
      />

      {/* Module List */}
      <ul id="wd-modules" className="list-group rounded-0">
        {modules
          .filter((module: any) => module.course === cid)
          .map((module: any) => (
            <li
              key={module._id}
              className="wd-module list-group-item p-0 mb-5 fs-5 border-gray"
            >
              <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center justify-content-between">
                <div>
                  <BsGripVertical className="me-2 fs-3" />
                  {/* Show input if editing, else show module name */}
                  {!module.editing && <span>{module.name}</span>}
                  {module.editing && (
                    <input
                      className="form-control w-50 d-inline-block"
                      onChange={(e) =>
                        dispatch(
                          updateModule({ ...module, name: e.target.value })
                        )
                      }
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          dispatch(
                            updateModule({ ...module, editing: false })
                          );
                        }
                      }}
                      defaultValue={module.name}
                    />
                  )}
                </div>
                {/* Pass moduleId, deleteModule, and editModule */}
                <ModuleControlButtons
                  moduleId={module._id}
                  deleteModule={(moduleId) => {
                    dispatch(deleteModule(moduleId));
                  }}
                  editModule={(moduleId) => {
                    dispatch(editModule(moduleId));
                  }}
                />
              </div>
              {/* Render lessons if they exist */}
              {module.lessons && (
                <ul className="wd-lessons list-group rounded-0">
                  {module.lessons.map((lesson: any) => (
                    <li
                      key={lesson._id}
                      className="wd-lesson list-group-item p-3 ps-1"
                    >
                      <div className="d-flex justify-content-between align-items-center">
                        <Link
                          to={`/Kanbas/Courses/${cid}/${lesson.module}/${lesson._id}`}
                          className="text-decoration-none"
                        >
                          <BsGripVertical className="me-2 fs-3" />
                          {lesson.name}
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
