import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { addAssignment, updateAssignment } from './reducer';

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

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const assignments = useSelector((state: any) => state.assignmentsReducer.assignments);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [assignment, setAssignment] = useState<Assignment>({
    _id: '',
    title: '',
    course: cid || '',
    modules: '',
    availability: '',
    due: '',
    points: 0,
    description: '',
  });

  useEffect(() => {
    if (aid && aid !== 'new') {
      const selectedAssignment = assignments.find(
        (a: Assignment) => a._id === aid && a.course === cid
      );
      if (selectedAssignment) {
        setAssignment(selectedAssignment);
      }
    }
  }, [cid, aid, assignments]);

  const handleSave = () => {
    if (aid === 'new') {
      dispatch(addAssignment(assignment));
    } else {
      dispatch(updateAssignment(assignment));
    }
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  const handleCancel = () => {
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  return (
    <div id="wd-assignments-editor" style={{ marginLeft: '50px' }}>
      {/* Assignment Name */}
      <label htmlFor="wd-name" className="form-label">
        Assignment Name
      </label>
      <input
        id="wd-name"
        value={assignment.title}
        className="form-control mb-3"
        style={{ width: '100%' }}
        onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })
        }
      />

      {/* Description */}
      <label htmlFor="wd-description" className="form-label">
        Description
      </label>
      <textarea
        id="wd-description"
        className="form-control mb-3"
        style={{ width: '100%', height: '150px' }}
        value={assignment.description}
        onChange={(e) =>
          setAssignment({ ...assignment, description: e.target.value })
        }
      />

      {/* Points, Group, and Grade display */}
      <table className="table">
        <tbody>
          {/* Points */}
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
                onChange={(e) =>
                  setAssignment({
                    ...assignment,
                    points: Number(e.target.value),
                  })
                }
              />
            </td>
          </tr>
          {/* Other fields... */}
          {/* Update the event handlers to update the assignment state */}
        </tbody>
      </table>

      {/* Bottom buttons */}
      <div className="d-flex justify-content-end mt-3">
        <button className="btn btn-secondary me-2" onClick={handleCancel}>
          Cancel
        </button>
        <button className="btn btn-danger text-white" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
}
