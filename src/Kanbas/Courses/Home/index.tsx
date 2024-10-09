import Modules from "../Modules";
import CourseStatus from "./Status";

export default function Home() {
  return (
    <div className="d-flex" id="wd-home" style={{ marginLeft: '0px' }}>
      {/* Modules Section */}
      <div className="flex-fill" style={{ marginLeft: '0px', marginRight: '90px' }}>
        
        <Modules />
      </div>
      
      {/* Course Status Section */}
      <div style={{ width: '15%' }} className="text-end d-none d-md-block">
        <CourseStatus />
      </div>
    </div>
  );
}
