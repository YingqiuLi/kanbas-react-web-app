import { courses } from "../Database";
import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { Route, Routes, useParams, useLocation  } from "react-router";
import { FaAlignJustify } from "react-icons/fa";
import PeopleTable from "./People/Table";
import Quizz from "./Quizz";
import QuizDetails from "./Quizz/QuizDetail";
import { useEffect, useState } from "react";
import * as client from "./client";
import QuizPreview from "./Quizz/QuizPreview";
import QuizQuestions from "./Quizz/QuizQuestions";
import QuizDetailEditor from "./Quizz/QuizDetailEditor";
import QuizQuestionEditor from "./Quizz/QuizQuestionEditor";

export default function Courses() {
  const { pathname } = useLocation();
  const { cid } = useParams();
  let course_name = localStorage.getItem("courseName");
  // const course = courses.find((course) => course._id === cid);
  // alert(course);
  const [users, setUsers] = useState<any[]>([]);

  const fetchUsers = async () => {
    const users = await client.findUsersForCourse(cid ?? '');
    setUsers(users);
  };

  useEffect(() => {
    fetchUsers();
  }, [cid]);
  console.warn(cid);
  console.warn(users);
  if (users.length == 0) {
    return (<></>);
  }
  return (
    <div id="wd-courses">
      <h2 className="text-danger">
      <FaAlignJustify className="me-4 fs-4 mb-1" />
      { course_name }  &gt; {pathname.split("/")[4]}
      </h2> <hr />
    <div className="d-flex">
      <div className="d-none d-md-block">
        <CoursesNavigation />
      </div>
      <div className="flex-fill">
      <Routes>
        <Route path="Home" element={<Home />} />
        <Route path="Modules" element={<Modules />} />
        <Route path="Assignments" element={<Assignments />} />
        <Route path="Assignments/:aid" element={<AssignmentEditor />} />
        <Route path="Quizzes" element={<Quizz />} />
        <Route path="Quizzes/:qid" element={<QuizDetails />} />
        <Route path="Quizzes/:qid/Edit" element={<QuizDetailEditor />} />
        <Route path="Quizzes/New" element={<QuizDetailEditor />} />
        <Route path="Quizzes/:quizId/preview" element={<QuizPreview />} />
        <Route path="Quizzes/:quizId/questions" element={<QuizQuestions />} />
        <Route path="Quizzes/:quizId/Questions/New/:type" element={<QuizQuestionEditor />} />
        <Route path="People" element={<PeopleTable users={users}/>} />
      </Routes>
      </div>
    </div>
  </div>
);}
