import { Link, useLocation } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";

export default function DashboardNavigation() {
  const location = useLocation();

  // Helper function to determine if a link is active
  const isActive = (path: string) => location.pathname.startsWith(path);

  return (
    <div className="d-flex position-fixed bottom-0 top-0 bg-black z-2 start-0">

      {/* Logo-Based Sidebar */}
      <div id="wd-dashboard-navigation-icons" style={{ width: 110 }}
           className="list-group rounded-0 bg-black d-none d-md-block">
        
        {/* Account Link */}
        <Link to="/Kanbas/Account" id="wd-account-link"
          className={`list-group-item text-center border-0 ${isActive("/Kanbas/Account") ? "bg-white text-danger" : "bg-black text-white"}`}>
          <FaRegCircleUser className={`fs-1 ${isActive("/Kanbas/Account") ? "text-danger" : "text-white"}`} /><br />
          Account
        </Link><br />

        {/* Dashboard Link */}
        <Link to="/Kanbas/Dashboard" id="wd-dashboard-link"
          className={`list-group-item text-center border-0 ${isActive("/Kanbas/Dashboard") ? "bg-white text-danger" : "bg-black text-white"}`}>
          <AiOutlineDashboard className={`fs-1 ${isActive("/Kanbas/Dashboard") ? "text-danger" : "text-white"}`} /><br />
          Dashboard
        </Link><br />

        {/* Courses Link */}
        <Link to="/Kanbas/Courses/1234/Home" id="wd-course-home-link"
          className={`list-group-item text-center border-0 ${isActive("/Kanbas/Courses/1234/Home") ? "bg-white text-danger" : "bg-black text-white"}`}>
          <LiaBookSolid className={`fs-1 ${isActive("/Kanbas/Courses/1234/Home") ? "text-danger" : "text-white"}`} /><br />
          Courses
        </Link><br />

        {/* Calendar Link */}
        <Link to="/Kanbas/Courses/1234/Zoom" id="wd-course-zoom-link"
          className={`list-group-item text-center border-0 ${isActive("/Kanbas/Courses/1234/Zoom") ? "bg-white text-danger" : "bg-black text-white"}`}>
          <IoCalendarOutline className={`fs-1 ${isActive("/Kanbas/Courses/1234/Zoom") ? "text-danger" : "text-white"}`} /><br />
          Calendar
        </Link><br />

        {/* Inbox Link */}
        <Link to="/Kanbas/Courses/1234/Piazza" id="wd-course-piazza-link"
          className={`list-group-item text-center border-0 ${isActive("/Kanbas/Courses/1234/Piazza") ? "bg-white text-danger" : "bg-black text-white"}`}>
          <FaInbox className={`fs-1 ${isActive("/Kanbas/Courses/1234/Piazza") ? "text-danger" : "text-white"}`} /><br />
          Inbox
        </Link><br />

        {/* Labs Link */}
        <Link to="/Labs" id="wd-course-labs-link"
          className={`list-group-item text-center border-0 ${isActive("/Labs") ? "bg-white text-danger" : "bg-black text-white"}`}>
          <LiaCogSolid className={`fs-1 ${isActive("/Labs") ? "text-danger" : "text-white"}`} /><br />
          Labs
        </Link><br />
      </div>

      {/* Dashboard Text-Based Sidebar */}
      <div id="wd-dashboard-navigation" className="list-group fs-5 rounded-0 bg-white d-none d-md-block" style={{ width: '150px'}}>
        
        {/* Overview Link */}
        <Link to="/Kanbas/Dashboard/Overview" id="wd-dashboard-overview-link" style={{ marginLeft: '5px'}}
          className={`list-group-item border-0 ${isActive("/Kanbas/Dashboard/Overview") ? "active" : "text-danger"}`}>
          Overview
        </Link>

        {/* To-Do Link */}
        <Link to="/Kanbas/Dashboard/ToDo" id="wd-dashboard-todo-link" style={{ marginLeft: '5px'}}
          className={`list-group-item border-0 ${isActive("/Kanbas/Dashboard/ToDo") ? "active" : "text-danger"}`}>
          To-Do
        </Link>

        {/* Calendar Link */}
        <Link to="/Kanbas/Dashboard/Calendar" id="wd-dashboard-calendar-link" style={{ marginLeft: '5px'}}
          className={`list-group-item border-0 ${isActive("/Kanbas/Dashboard/Calendar") ? "active" : "text-danger"}`}>
          Calendar
        </Link>

        {/* Notifications Link */}
        <Link to="/Kanbas/Dashboard/Notifications" id="wd-dashboard-notifications-link" style={{ marginLeft: '5px'}}
          className={`list-group-item border-0 ${isActive("/Kanbas/Dashboard/Notifications") ? "active" : "text-danger"}`}>
          Notifications
        </Link>

        {/* Messages Link */}
        <Link to="/Kanbas/Dashboard/Messages" id="wd-dashboard-messages-link" style={{ marginLeft: '5px'}}
          className={`list-group-item border-0 ${isActive("/Kanbas/Dashboard/Messages") ? "active" : "text-danger"}`}>
          Messages
        </Link>

      </div>
      
    </div>
  );
}
