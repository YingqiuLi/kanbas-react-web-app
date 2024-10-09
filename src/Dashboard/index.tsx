import { Link } from "react-router-dom";
import DashboardNavigation from "./DashboardNavigation";

export default function Dashboard() {
  return (
    <div id="wd-dashboard" className="p-3">
      <table>
        <tbody>
          <tr>
            {/* Sidebar Navigation */}
            <td valign="top">
              <DashboardNavigation />
            </td>

            {/* Main Dashboard Content */}
            <td valign="top" style={{ paddingLeft: "20px" }}>
              <h1 id="wd-dashboard-title">Dashboard</h1>
              <hr />
              <h2 id="wd-dashboard-published">Published Courses (7)</h2>
              <hr />
              <div id="wd-dashboard-courses" className="container mt-3">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                  {/* Course 1 */}
                  <div className="wd-dashboard-course col">
                    <div
                      className="card rounded-3 overflow-hidden"
                      style={{ width: "100%", height: "360px" }}
                    >
                      <Link
                        className="wd-dashboard-course-link text-decoration-none text-dark"
                        to="/Kanbas/Courses/1234/Home"
                      >
                        <img
                          src="../images/reactjs.jpg"
                          width="100%"
                          height="160"
                          alt="React JS"
                        />
                        <div className="card-body d-flex flex-column justify-content-between">
                          <h5 className="wd-dashboard-course-title card-title">
                            CS1234 React JS
                          </h5>
                          <p className="card-text">
                            Full Stack software developer
                          </p>
                          <button
                            className="btn btn-primary mt-auto"
                            style={{ width: "25%" }}
                          >
                            Go
                          </button>
                        </div>
                      </Link>
                    </div>
                  </div>

                  {/* Course 2 */}
                  <div className="wd-dashboard-course col">
                    <div
                      className="card rounded-3 overflow-hidden"
                      style={{ width: "100%", height: "360px" }}
                    >
                      <Link
                        className="wd-dashboard-course-link text-decoration-none text-dark"
                        to="/Kanbas/Courses/5678/Home"
                      >
                        <img
                          src="../images/OOD.jpg"
                          width="100%"
                          height="160"
                          alt="Object Oriented Design"
                        />
                        <div className="card-body d-flex flex-column justify-content-between">
                          <h5 className="wd-dashboard-course-title card-title">
                            CS3500 Object Oriented Design
                          </h5>
                          <p className="card-text">Object Oriented Design</p>
                          <button
                            className="btn btn-primary mt-auto"
                            style={{ width: "25%" }}
                          >
                            Go
                          </button>
                        </div>
                      </Link>
                    </div>
                  </div>

                  {/* Course 3 */}
                  <div className="wd-dashboard-course col">
                    <div
                      className="card rounded-3 overflow-hidden"
                      style={{ width: "100%", height: "360px" }}
                    >
                      <Link
                        className="wd-dashboard-course-link text-decoration-none text-dark"
                        to="/Kanbas/Courses/9101/Home"
                      >
                        <img
                          src="../images/cyber.jpg"
                          width="100%"
                          height="160"
                          alt="Cyber Security"
                        />
                        <div className="card-body d-flex flex-column justify-content-between">
                          <h5 className="wd-dashboard-course-title card-title">
                            CY2500 Fundamentals of Cyber Security
                          </h5>
                          <p className="card-text">
                            Fundamentals of Cyber Security
                          </p>
                          <button
                            className="btn btn-primary mt-auto"
                            style={{ width: "25%" }}
                          >
                            Go
                          </button>
                        </div>
                      </Link>
                    </div>
                  </div>

                  {/* Course 4 */}
                  <div className="wd-dashboard-course col">
                    <div
                      className="card rounded-3 overflow-hidden"
                      style={{ width: "100%", height: "360px" }}
                    >
                      <Link
                        className="wd-dashboard-course-link text-decoration-none text-dark"
                        to="/Kanbas/Courses/1121/Home"
                      >
                        <img
                          src="../images/system.jpg"
                          width="100%"
                          height="160"
                          alt="System Security"
                        />
                        <div className="card-body d-flex flex-column justify-content-between">
                          <h5 className="wd-dashboard-course-title card-title">
                            CS3740 System Security
                          </h5>
                          <p className="card-text">System Security</p>
                          <button
                            className="btn btn-primary mt-auto"
                            style={{ width: "25%" }}
                          >
                            Go
                          </button>
                        </div>
                      </Link>
                    </div>
                  </div>

                  {/* Course 5 */}
                  <div className="wd-dashboard-course col">
                    <div
                      className="card rounded-3 overflow-hidden"
                      style={{ width: "100%", height: "360px" }}
                    >
                      <Link
                        className="wd-dashboard-course-link text-decoration-none text-dark"
                        to="/Kanbas/Courses/4550/Home"
                      >
                        <img
                          src="../images/reactjs.jpg"
                          width="100%"
                          height="160"
                          alt="Web Development"
                        />
                        <div className="card-body d-flex flex-column justify-content-between">
                          <h5 className="wd-dashboard-course-title card-title">
                            CS4550 Web Development
                          </h5>
                          <p className="card-text">Web Development Basics</p>
                          <button
                            className="btn btn-primary mt-auto"
                            style={{ width: "25%" }}
                          >
                            Go
                          </button>
                        </div>
                      </Link>
                    </div>
                  </div>

                  {/* Course 6 */}
                  <div className="wd-dashboard-course col">
                    <div
                      className="card rounded-3 overflow-hidden"
                      style={{ width: "100%", height: "360px" }}
                    >
                      <Link
                        className="wd-dashboard-course-link text-decoration-none text-dark"
                        to="/Kanbas/Courses/3250/Home"
                      >
                        <img
                          src="../images/csharp.jpg"
                          width="100%"
                          height="160"
                          alt="Game Design"
                        />
                        <div className="card-body d-flex flex-column justify-content-between">
                          <h5 className="wd-dashboard-course-title card-title">
                            CS3250 Game Design
                          </h5>
                          <p className="card-text">
                            Introduction to Game Design
                          </p>
                          <button
                            className="btn btn-primary mt-auto"
                            style={{ width: "25%" }}
                          >
                            Go
                          </button>
                        </div>
                      </Link>
                    </div>
                  </div>

                  {/* Course 7 */}
                  <div className="wd-dashboard-course col">
                    <div
                      className="card rounded-3 overflow-hidden"
                      style={{ width: "100%", height: "360px" }}
                    >
                      <Link
                        className="wd-dashboard-course-link text-decoration-none text-dark"
                        to="/Kanbas/Courses/3650/Home"
                      >
                        <img
                          src="../images/c++.jpg"
                          width="100%"
                          height="160"
                          alt="C++ Programming"
                        />
                        <div className="card-body d-flex flex-column justify-content-between">
                          <h5 className="wd-dashboard-course-title card-title">
                            CS3650 Intro to C++
                          </h5>
                          <p className="card-text">Intro to C++</p>
                          <button
                            className="btn btn-primary mt-auto"
                            style={{ width: "25%" }}
                          >
                            Go
                          </button>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
