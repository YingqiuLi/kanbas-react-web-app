import Modules from "../Modules";
import CourseStatus from "./Status";

export default function Home() {
  return (
    <table id="wd-home" style={{ width: '100%' }}>
      <tbody>
        <tr>
          {/* Modules Column */}
          <td valign="top" style={{ width: '85%' }}>
            {/* Buttons on top of the Modules */}
            <div style={{ marginBottom: '10px', display: 'flex', gap: '10px' }}>
              <button>Collapse All</button>
              <button>View Progress</button>
              <select>
                <option>Publish All</option>
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
              <button>+Module</button>
            </div>
            <Modules />
          </td>
          
          {/* Course Status Column */}
          <td valign="top" style={{ width: '15%', textAlign: 'right' }}>
            <CourseStatus />
          </td>
        </tr>
      </tbody>
    </table>
  );
}
