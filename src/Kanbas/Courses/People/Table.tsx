import { FaUserCircle } from "react-icons/fa";

export default function PeopleTable() {
  return (
    <div id="wd-people-table" style={{ width: '90%', marginLeft: '50px' }}>
      <table className="table table-striped">
        <thead>
          <tr><th>Name</th><th>Login ID</th><th>Section</th><th>Role</th><th>Last Activity</th><th>Total Activity</th></tr>
        </thead>
        <tbody>
          <tr><td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Tony</span>{" "}
              <span className="wd-last-name">Stark</span></td>
            <td className="wd-login-id">001234561S</td>
            <td className="wd-section">S101</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2020-10-01</td>
            <td className="wd-total-activity">10:21:32</td> </tr>
          {/* Add at least 3 more users such as Bruce Wayne, Steve Rogers, and Natasha Romanoff */}
        </tbody>

        <tbody>
          <tr><td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Bruce</span>{" "}
              <span className="wd-last-name">Wayne</span></td>
            <td className="wd-login-id">001234562S</td>
            <td className="wd-section">S101</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2020-10-02</td>
            <td className="wd-total-activity">15:32:43</td> </tr>
        </tbody>

        <tbody>
          <tr><td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Steve</span>{" "}
              <span className="wd-last-name">Rogers</span></td>
            <td className="wd-login-id">001234563S</td>
            <td className="wd-section">S101</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2020-10-02</td>
            <td className="wd-total-activity">23:00:13</td> </tr>
        </tbody>

        <tbody>
          <tr><td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Natasha</span>{" "}
              <span className="wd-last-name">Romanoff</span></td>
            <td className="wd-login-id">001234564S</td>
            <td className="wd-section">S101</td>
            <td className="wd-role">TA</td>
            <td className="wd-last-activity">2020-10-05</td>
            <td className="wd-total-activity">13:21:44</td> </tr>
        </tbody>

        <tbody>
          <tr><td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Thor</span>{" "}
              <span className="wd-last-name">Odinson</span></td>
            <td className="wd-login-id">001234565S</td>
            <td className="wd-section">S101</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2020-12-01</td>
            <td className="wd-total-activity">22:15:14</td> </tr>
        </tbody>

        <tbody>
          <tr><td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Yingqiu</span>{" "}
              <span className="wd-last-name">Li</span></td>
            <td className="wd-login-id">001234566S</td>
            <td className="wd-section">S101</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2020-12-01</td>
            <td className="wd-total-activity">20:08:26</td> </tr>
        </tbody>

        <tbody>
          <tr><td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Weixin</span>{" "}
              <span className="wd-last-name">Kong</span></td>
            <td className="wd-login-id">001234567S</td>
            <td className="wd-section">S101</td>
            <td className="wd-role">TA</td>
            <td className="wd-last-activity">2020-12-01</td>
            <td className="wd-total-activity">18:43:00</td> </tr>
        </tbody>
      </table>
    </div> );}