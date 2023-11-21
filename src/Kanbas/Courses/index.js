import { Navigate, Route, Routes, useParams, useLocation} from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import { FaBars } from 'react-icons/fa';
import {FaGlasses} from 'react-icons/fa6';
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import { useState, useEffect } from "react";
import axios from "axios";

function Courses({ courses }) {
    const { courseId } = useParams();
    const {pathname} = useLocation();
    const parts = pathname.split("/");
    const screen = parts[parts.length - 1];
    const API_BASE = process.env.REACT_APP_API_BASE;
    const URL = `${API_BASE}/api/courses`;
    const [course, setCourse] = useState({});
    // const findCourseById = async (courseId) => {
    //   const response = await axios.get(
    //     `${URL}/${courseId}`
    //   );
    //   setCourse(response.data);
    // };
    // useEffect(() => {
    //     findCourseById(courseId);
    //   }, [courseId]);    
    useEffect(() => {
        const findCourseById = async (id) => {
          const response = await axios.get(`${URL}/${id}`);
          setCourse(response.data);
        };
    
        findCourseById(courseId);
    }, [courseId, URL]);
  
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