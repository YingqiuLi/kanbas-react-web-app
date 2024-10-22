import { Link } from "react-router-dom";
import * as db from "../Kanbas/Database";
import DashboardNavigation from "./DashboardNavigation";

export default function Dashboard() {
  const courses = db.courses;

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
              <h2 id="wd-dashboard-published">
                Published Courses ({courses.length})
              </h2>
              <hr />
              <div id="wd-dashboard-courses" className="container mt-3">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                  {courses.map((course) => (
                    <div
                      className="wd-dashboard-course col"
                      style={{ width: "300px" }}
                    >
                      <div className="card rounded-3 overflow-hidden">
                        <Link
                          to={`/Kanbas/Courses/${course._id}/Home`}
                          className="wd-dashboard-course-link text-decoration-none text-dark"
                        >
                          <img
                            src={course.image.src}
                            width={course.image.width}
                            height={course.image.height}
                            alt={course.image.alt}
                          />
                          <div className="card-body">
                            <h5 className="wd-dashboard-course-title card-title">
                              {course.name}{" "}
                            </h5>
                            <p
                              className="wd-dashboard-course-title card-text overflow-y-hidden"
                              style={{ maxHeight: 100 }}
                            >
                              {course.description}{" "}
                            </p>
                            <button className="btn btn-primary"> Go </button>
                          </div>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
