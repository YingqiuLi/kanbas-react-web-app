import { useState } from "react";
import { BsGripVertical } from "react-icons/bs";
import { FaEdit, FaPlus, FaCheckCircle } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import AssignmentEditor from "./Editor";

export default function Assignment() {
  const [isAssignmentGroupOpen, setIsAssignmentGroupOpen] = useState(true);
  const [isAssignment1EditorOpen, setIsAssignment1EditorOpen] = useState(false);
  const [isAssignment2EditorOpen, setIsAssignment2EditorOpen] = useState(false);
  const [isAssignment3EditorOpen, setIsAssignment3EditorOpen] = useState(false);

  // Handle adding a new assignment (stubbed as example)
  const addNewAssignment = () => {
    alert("Add new assignment functionality here");
  };

  return (
    <div id="wd-assignments-container" style={{ marginLeft: '30px' }}>
      {/* Assignment Controls */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <input id="wd-search-assignment" placeholder="Search for Assignments" />
        <div>
          <button id="wd-add-assignment-group" className="btn btn-secondary me-2">+ Group</button>
          <button id="wd-add-assignment" className="btn btn-danger text-white">+ Assignment</button>
        </div>
      </div>

      <ul id="wd-assignment-list" className="list-group rounded-0">
        
        {/* Assignment Group */}
        <li className="wd-assignment-group list-group-item p-0 mb-3 fs-5 border-gray">
          <div className="p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
            <div onClick={() => setIsAssignmentGroupOpen(!isAssignmentGroupOpen)} style={{ cursor: 'pointer' }}>
              <BsGripVertical className="me-2 fs-3" />
              Assignment
            </div>
            <div className="d-flex align-items-center">
              <div className="border rounded px-3 py-1 text-center me-3" style={{ minWidth: "90px" }}>
                40% of Total
              </div>
              <button
                className="btn btn-outline-secondary btn-sm me-3"
                style={{ fontSize: "1.2em" }}
                onClick={addNewAssignment}
              >
                <FaPlus />
              </button>
              <IoEllipsisVertical className="fs-4" />
            </div>
          </div>

          {isAssignmentGroupOpen && (
            <ul className="wd-assignment-items list-group rounded-0">

              {/* Assignment A1 */}
              <li className="wd-assignment-item list-group-item p-3">
                <div className="d-flex align-items-center" style={{ marginLeft: '10px' }}>
                  <BsGripVertical className="me-2 fs-4" style={{ cursor: 'pointer' }} />
                  <FaEdit
                    className="text-success me-2 fs-4"
                    style={{ cursor: 'pointer' }}
                    onClick={() => setIsAssignment1EditorOpen(!isAssignment1EditorOpen)}
                  />
                  <div>
                    <div><strong>A1</strong></div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <span style={{ color: 'red' }}>Multiple Modules</span> | <span style={{ fontWeight: 'bold', color: 'black' }}> Not available until May 6 at 12:00am</span>
                    </div>
                    <div>Due May 13 at 11:59pm | 100 pts</div>
                  </div>
                  <div className="ms-auto d-flex align-items-center" style={{ height: '100%' }}>
                    <FaCheckCircle className="text-success me-2 fs-4" />
                    <IoEllipsisVertical className="fs-4" />
                  </div>
                </div>
                {isAssignment1EditorOpen && <AssignmentEditor />}
              </li>

              {/* Assignment A2 */}
              <li className="wd-assignment-item list-group-item p-3">
                <div className="d-flex align-items-center" style={{ marginLeft: '10px' }}>
                  <BsGripVertical className="me-2 fs-4" style={{ cursor: 'pointer' }} />
                  <FaEdit
                    className="text-success me-2 fs-4"
                    style={{ cursor: 'pointer' }}
                    onClick={() => setIsAssignment2EditorOpen(!isAssignment2EditorOpen)}
                  />
                  <div>
                    <div><strong>A2</strong></div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <span style={{ color: 'red' }}>Multiple Modules</span> | <span style={{ fontWeight: 'bold', color: 'black' }}> Not available until May 13 at 12:00am</span>
                    </div>
                    <div>Due May 20 at 11:59pm | 100 pts</div>
                  </div>
                  <div className="ms-auto d-flex align-items-center" style={{ height: '100%' }}>
                    <FaCheckCircle className="text-success me-2 fs-4" />
                    <IoEllipsisVertical className="fs-4" />
                  </div>
                </div>
                {isAssignment2EditorOpen && <AssignmentEditor />}
              </li>

              {/* Assignment A3 */}
              <li className="wd-assignment-item list-group-item p-3">
                <div className="d-flex align-items-center" style={{ marginLeft: '10px' }}>
                  <BsGripVertical className="me-2 fs-4" style={{ cursor: 'pointer' }} />
                  <FaEdit
                    className="text-success me-2 fs-4"
                    style={{ cursor: 'pointer' }}
                    onClick={() => setIsAssignment3EditorOpen(!isAssignment3EditorOpen)}
                  />
                  <div>
                    <div><strong>A3</strong></div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <span style={{ color: 'red' }}>Multiple Modules</span> | <span style={{ fontWeight: 'bold', color: 'black' }}> Not available until May 20 at 12:00am</span>
                    </div>
                    <div>Due May 27 at 11:59pm | 100 pts</div>
                  </div>
                  <div className="ms-auto d-flex align-items-center" style={{ height: '100%' }}>
                    <FaCheckCircle className="text-success me-2 fs-4" />
                    <IoEllipsisVertical className="fs-4" />
                  </div>
                </div>
                {isAssignment3EditorOpen && <AssignmentEditor />}
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
}
