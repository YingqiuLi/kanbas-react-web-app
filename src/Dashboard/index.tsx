import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as db from "../Kanbas/Database";
import DashboardNavigation from "./DashboardNavigation";

export default function Dashboard() {
  const [courses, setCourses] = useState<any[]>(db.courses);
  const [course, setCourse] = useState<any>({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: {
      src: "/images/reactjs.jpg",
      width: "100%",
      height: "180",
      alt: "New Course Image",
    },
    description: "New Description",
  });

  const addNewCourse = () => {
    const newCourse = { ...course, _id: new Date().getTime().toString() };
    setCourses([...courses, newCourse]);
    setCourse({
      _id: "0",
      name: "New Course",
      number: "New Number",
      startDate: "2023-09-10",
      endDate: "2023-12-15",
      image: {
        src: "/images/reactjs.jpg",
        width: "100%",
        height: "180",
        alt: "New Course Image",
      },
      description: "New Description",
    });
  };

  const deleteCourse = (courseId: string) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };

  const updateCourse = () => {
    setCourses(courses.map((c) => (c._id === course._id ? course : c)));
    setCourse({
      _id: "0",
      name: "New Course",
      number: "New Number",
      startDate: "2023-09-10",
      endDate: "2023-12-15",
      image: {
        src: "/images/reactjs.jpg",
        width: "100%",
        height: "180",
        alt: "New Course Image",
      },
      description: "New Description",
    });
  };

  return (
    <div id="wd-dashboard" className="p-3">
      <table>
        <tbody>
          <tr>
            <td valign="top">
              <DashboardNavigation />
            </td>
            <td valign="top" style={{ paddingLeft: "20px" }}>
              <h1 id="wd-dashboard-title">Dashboard</h1>
              <hr />
              <h5>
                New Course
                <button
                  className="btn btn-primary float-end"
                  id="wd-add-new-course-click"
                  onClick={addNewCourse}
                >
                  Add
                </button>
                <button
                  className="btn btn-warning float-end me-2"
                  id="wd-update-course-click"
                  onClick={updateCourse}
                >
                  Update
                </button>
              </h5>
              <br />
              <input
                value={course.name}
                onChange={(e) => setCourse({ ...course, name: e.target.value })}
                className="form-control mb-2"
                placeholder="Course Name"
              />
              <textarea
                value={course.description}
                onChange={(e) =>
                  setCourse({ ...course, description: e.target.value })
                }
                className="form-control mb-2"
                placeholder="Course Description"
              />
              <hr />
              <h2 id="wd-dashboard-published">
                Published Courses ({courses.length})
              </h2>
              <hr />
              <div id="wd-dashboard-courses" className="container mt-3">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                  {courses.map((course) => (
                    <div
                      key={course._id}
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
                              {course.name}
                            </h5>
                            <p
                              className="wd-dashboard-course-description card-text overflow-y-hidden"
                              style={{ maxHeight: 100 }}
                            >
                              {course.description}
                            </p>
                          </div>
                        </Link>
                        <div className="d-flex justify-content-between p-2">
                          <Link
                            to={`/Kanbas/Courses/${course._id}/Home`}
                            className="btn btn-primary"
                            style={{ width: "20%" }}
                          >
                            Go
                          </Link>

                          <button
                            onClick={(event) => {
                              event.preventDefault();
                              setCourse(course);
                            }}
                            className="btn btn-warning ms-5"
                            style={{
                              color: "black",
                              width: "25%",
                            }}
                          >
                            Edit
                          </button>

                          <button
                            onClick={(event) => {
                              event.preventDefault();
                              deleteCourse(course._id);
                            }}
                            className="btn btn-danger"
                            id="wd-delete-course-click"
                            style={{ width: "30%" }}
                          >
                            Delete
                          </button>
                        </div>
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
