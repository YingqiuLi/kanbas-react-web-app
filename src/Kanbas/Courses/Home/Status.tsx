import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
import { BsHouse, BsFillBellFill, BsBarChartLine, BsMegaphoneFill } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";

export default function CourseStatus() {
  return (
    <div id="wd-course-status" style={{ width: "270px", marginLeft: "-70px" }}>
      <h2 className="text-start">Course Status</h2>

      {/* Unpublish and Publish buttons */}
      <div className="d-flex mb-3">
        <div className="w-50 pe-1">
          <button className="btn btn-lg btn-secondary w-100 text-nowrap">
            <MdDoNotDisturbAlt className="fs-5" />Unpublish
          </button>
        </div>
        <div className="w-50">
          <button className="btn btn-lg btn-success w-100">
            <FaCheckCircle className="me-2 fs-5" />Publish
          </button>
        </div>
      </div>

      {/* Import Existing Content and Import from Commons */}
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <BiImport className="me-2 fs-5" />Import Existing Content
      </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <LiaFileImportSolid className="me-2 fs-5" />Import from Commons
      </button>

      {/* Additional Buttons */}
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <BsHouse className="me-2 fs-5" />Choose Home Page
      </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <AiOutlineEye className="me-2 fs-5" />View Course Stream
      </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <BsMegaphoneFill className="me-2 fs-5" />New Announcement
      </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <BsBarChartLine className="me-2 fs-5" />New Analytics
      </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <BsFillBellFill className="me-2 fs-5" />View Course Notifications
      </button>
    </div>
  );
}
