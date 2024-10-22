import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "../Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./styles.css";

export default function Kanbas() {
  return (
    <div id="wd-kanbas" className="d-flex">
      <KanbasNavigation />
      <div className="flex-fill p-3 wd-main-content-offset">
      <Routes>
        <Route path="/" element={<Navigate to="Account" />} />
        <Route path="/Account/*" element={<Account />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Courses/:cid/*" element={<Courses />} />
        <Route path="/Calendar" element={<h1>Calendar</h1>} />
        <Route path="/Inbox" element={<h1>Inbox</h1>} />   
      </Routes>
      </div>
  </div>
);}

  