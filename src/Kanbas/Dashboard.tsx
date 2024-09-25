import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        {/* Course 1 */}
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
            <img src="/Users/sue_lyq/2024/kanbas-react-web-app/src/Labs/images/reactjs.jpg" width={200} alt="reactjs"/>
            <div>
              <h5>
                 CS1234 React JS
              </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        {/* Course 2 */}
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/5678/Home">
            <img src="/Users/sue_lyq/2024/kanbas-react-web-app/src/Labs/images/OOD.jpg" width={200} alt="Java Course" />
            <div>
              <h5>CS3500 Object Oriented Design</h5>
              <p className="wd-dashboard-course-title">Object Oriented Design</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        {/* Course 3 */}
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/9101/Home">
            <img src="/Users/sue_lyq/2024/kanbas-react-web-app/src/Labs/images/cyber.jpg" width={200} alt="Cyber Security Course" />
            <div>
              <h5>CY2500 Fundamentals of Cyber Security</h5>
              <p className="wd-dashboard-course-title">Fundamentals of Cyber Security</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        {/* Course 4 */}
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1121/Home">
            <img src="/Users/sue_lyq/2024/kanbas-react-web-app/src/Labs/images/system.jpg" width={200} alt="System Security Course" />
            <div>
              <h5>CS3740 System Security</h5>
              <p className="wd-dashboard-course-title">System Security</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        {/* Course 5 */}
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1121/Home">
            <img src="/Users/sue_lyq/2024/kanbas-react-web-app/src/Labs/images/reactjs.jpg" width={200} alt="reactjs" />
            <div>
              <h5>CS4550 Web Development</h5>
              <p className="wd-dashboard-course-title">Web Development Basics</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        {/* Course 6 */}
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1121/Home">
            <img src="/Users/sue_lyq/2024/kanbas-react-web-app/src/Labs/images/c#.jpg" width={200} alt="C#" />
            <div>
              <h5>CS3250 Game Design</h5>
              <p className="wd-dashboard-course-title">Introdoction to Game Design</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        {/* Course 7 */}
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1121/Home">
            <img src="/Users/sue_lyq/2024/kanbas-react-web-app/src/Labs/images/c++.jpg" width={200} alt="C++" />
            <div>
              <h5>CS3650 Intro to C++</h5>
              <p className="wd-dashboard-course-title">Intro to C++</p>
              <button>Go</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
