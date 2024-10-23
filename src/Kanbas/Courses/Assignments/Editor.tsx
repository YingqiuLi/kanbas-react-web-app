import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

// Define the assignment type
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

export default function AssignmentEditor({ assignments, setAssignments }: { assignments: Assignment[], setAssignments: (assignments: Assignment[]) => void }) {
  const { cid, aid } = useParams();
  const [assignment, setAssignment] = useState<Assignment | null>(null);
  const navigate = useNavigate();

  // Fetch the assignment from the database based on the course and assignment ID
  useEffect(() => {
    const selectedAssignment = assignments.find(
      (assignment: Assignment) => assignment._id === aid && assignment.course === cid
    );
    setAssignment(selectedAssignment || null);
  }, [cid, aid, assignments]);

  const handleSave = () => {
    if (assignment) {
      const updatedAssignmentList = assignments.map((a) =>
        a._id === assignment._id ? assignment : a
      );
      setAssignments(updatedAssignmentList); // Update the assignments in state

      // Navigate back to the Assignments page for the course
      navigate(`/Kanbas/Courses/${cid}/Assignments`);
    }
  };

  const handleCancel = () => {
    // Navigate back to the Assignments page without saving changes
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  if (!assignment) {
    return <div>Loading...</div>;
  }

  return (
    <div id="wd-assignments-editor" style={{ marginLeft: '50px' }}>
      {/* Assignment Name */}
      <label htmlFor="wd-name" className="form-label">Assignment Name</label>
      <input
        id="wd-name"
        value={assignment.title}
        className="form-control mb-3"
        style={{ width: '100%' }}
        onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
      />

      {/* Description */}
      <label htmlFor="wd-description" className="form-label">Description</label>
      <textarea
        id="wd-description"
        className="form-control mb-3"
        style={{ width: '100%', height: '150px' }}
        value={assignment.description}
        onChange={(e) => setAssignment({ ...assignment, description: e.target.value })}
      />
      
      {/* Points, Group, and Grade display */}
      <table className="table">
        <tbody>
          <tr>
            <td align="right" valign="top" style={{ width: '30%' }}>
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input
                id="wd-points"
                type="number"
                value={assignment.points}
                className="form-control"
                style={{ width: '50%' }}
                onChange={(e) => setAssignment({ ...assignment, points: Number(e.target.value) })}
              />
            </td>
          </tr>

          <tr>
            <td align="right" valign="top" style={{ width: '30%' }}>
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select
                id="wd-group"
                className="form-select"
                style={{ width: '50%' }}
                onChange={(e) => setAssignment({ ...assignment, modules: e.target.value })}
                value={assignment.modules}
              >
                <option value="Multiple Modules">Multiple Modules</option>
                <option value="Single Module">Single Module</option>
              </select>
            </td>
          </tr>

          <tr>
            <td align="right" valign="top" style={{ width: '30%' }}>
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
              <select
                id="wd-display-grade-as"
                className="form-select"
                style={{ width: '50%' }}
                value="Percentage"
              >
                <option value="Percentage">Percentage</option>
                <option value="Points">Points</option>
              </select>
            </td>
          </tr>
          
          {/* Submission Type */}
          <tr>
            <td align="right" valign="top" style={{ width: '30%' }}>
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type" className="form-select" style={{ width: '50%' }} value="Online">
                <option value="Online">Online</option>
                <option value="Paper">Paper</option>
                <option value="No Submission">No Submission</option>
              </select>
              <br />
              <div style={{ marginTop: '10px' }}>
                <label>Online Entry Options:</label>
                <div>
                  <input type="checkbox" id="wd-text-entry" />
                  <label htmlFor="wd-text-entry" className="ms-1">Text Entry</label>
                </div>
                <div>
                  <input type="checkbox" id="wd-website-url" />
                  <label htmlFor="wd-website-url" className="ms-1">Website URL</label>
                </div>
                <div>
                  <input type="checkbox" id="wd-media-recordings" />
                  <label htmlFor="wd-media-recordings" className="ms-1">Media Recordings</label>
                </div>
                <div>
                  <input type="checkbox" id="wd-student-annotation" />
                  <label htmlFor="wd-student-annotation" className="ms-1">Student Annotation</label>
                </div>
                <div>
                  <input type="checkbox" id="wd-file-upload" />
                  <label htmlFor="wd-file-upload" className="ms-1">File Uploads</label>
                </div>
              </div>
            </td>
          </tr>

          {/* Assign To */}
          <tr>
            <td align="right" valign="top" style={{ width: '30%' }}>
              <label htmlFor="wd-assign-to">Assign to</label>
            </td>
            <td>
              <select id="wd-assign-to" className="form-select" style={{ width: '50%' }} value="Everyone">
                <option value="Everyone">Everyone</option>
                <option value="Selected">Selected</option>
              </select>
            </td>
          </tr>

          {/* Due and Available Dates */}
          <tr>
            <td align="right" valign="top" style={{ width: '30%' }}>
              <label htmlFor="wd-due-date">Due</label>
            </td>
            <td>
              <input
                id="wd-due-date"
                type="date"
                value={assignment.due}
                className="form-control"
                style={{ width: '50%' }}
                onChange={(e) => setAssignment({ ...assignment, due: e.target.value })}
              />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top" style={{ width: '30%' }}>
              <label htmlFor="wd-available-from">Available From</label>
            </td>
            <td>
              <input
                id="wd-available-from"
                type="date"
                className="form-control"
                style={{ width: '50%' }}
              />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top" style={{ width: '30%' }}>
              <label htmlFor="wd-available-until">Available Until</label>
            </td>
            <td>
              <input
                id="wd-available-until"
                type="date"
                className="form-control"
                style={{ width: '50%' }}
              />
            </td>
          </tr>
        </tbody>
      </table>

      {/* Bottom buttons */}
      <div className="d-flex justify-content-end mt-3">
        <button className="btn btn-secondary me-2" onClick={handleCancel}>Cancel</button>
        <button className="btn btn-danger text-white" onClick={handleSave}>Save</button>
      </div>
    </div>
  );
}
