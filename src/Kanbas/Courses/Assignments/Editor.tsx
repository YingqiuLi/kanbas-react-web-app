export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description">
          The assignment is available online. Submit a link to the landing page of your project.
        </textarea>
        <br />
        <table>
          <tbody>
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-points">Points</label>
              </td>
              <td>
                <input id="wd-points" type="number" value={100} />
              </td>
            </tr>
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-due-date">Due Date</label>
              </td>
              <td>
                <input id="wd-due-date" type="date" />
              </td>
            </tr>
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-assign-to">Assign To</label>
              </td>
              <td>
                <input id="wd-assign-to" placeholder="Everyone" />
              </td>
            </tr>
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-submission-type">Submission Type</label>
              </td>
              <td>
                <select id="wd-submission-type">
                  <option>Online</option>
                  <option>Paper</option>
                  <option>No Submission</option>
                </select>
              </td>
            </tr>
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-available-from">Available From</label>
              </td>
              <td>
                <input id="wd-available-from" type="date" />
              </td>
            </tr>
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-available-until">Available Until</label>
              </td>
              <td>
                <input id="wd-available-until" type="date" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
}
   