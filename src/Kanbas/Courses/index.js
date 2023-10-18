import db from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams, useLocation} from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import { FaBars } from 'react-icons/fa';
import {FaGlasses} from 'react-icons/fa6';
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";

function Courses() {
    const { courseId } = useParams();
    const {pathname} = useLocation();
    const [empty, kanbas, courses, id, screen] = pathname.split("/");
    const course = db.courses.find((course) => course._id === courseId);


    return (
        <div className="body">
            <h1 style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                <FaBars/> &nbsp; 
                Course : {course.name} 
                <span style={{color:'gray'}}>&gt;</span> 
                <span style={{color:'black'}}>{screen}</span>
                </div> 
                <button class="btn btn-light">
                    <FaGlasses/> Student View
                </button>
            </h1>
            <hr/>
            <div className="row">
                <div className="col-3">
                    <CourseNavigation />
                </div>
                <div className="col-9">
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<Home/>} />
                        <Route path="Modules" element={<Modules/>} />
                        <Route path="Assignments" element={<Assignments/>} />
                        <Route
                            path="Assignments/:assignmentId"
                            element={<AssignmentEditor/>}
                        />
                        <Route path="Grades" element={<Grades/>} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}
export default Courses;