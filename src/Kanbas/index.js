import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import { useState, useEffect } from "react";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";
import Signin from "./users/signin";
import Account from "./users/account";
import UserTable from "./users/table";
import Signup from "./users/signup";

function Kanbas() {
    const [courses, setCourses] = useState([]);
    const API_BASE = process.env.REACT_APP_API_BASE;
    const URL = `${API_BASE}/api/courses`;
    useEffect(() => {
      const findAllCourses = async () => {
          const response = await axios.get(URL);
          setCourses(response.data);
      };
  
      findAllCourses();
  }, [URL]);
  
    const [course, setCourse] = useState({
        name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15",
    });
    const addNewCourse = async () => {
        const response = await axios.post(URL, course);
        setCourses([
          response.data,
          ...courses,
        ]);
        setCourse({ name: "" });
    };    
    const deleteCourse = async (course) => {
        const response = await axios.delete(
          `${URL}/${course._id}`
        );
        console.log(response)
        setCourses(courses.filter(
            (c) => c._id !== course._id));
    }
    
    const updateCourse = async () => {
        const response = await axios.put(
          `${URL}/${course._id}`,
          course
        );
        setCourses(
          courses.map((c) => {
            if (c._id === course._id) {
              return response.data;
            }
            return c;
          })
        );
        setCourse({ name: "" });
    };
    
    return (
        <Provider store={store}>
        <div>
            <KanbasNavigation />
            <div style={{marginLeft:"120px",color:"red"}}>
            <Routes>
                <Route path="/" element={<Navigate to="Dashboard" />} />
                <Route path="/Signin" element={<Signin />} />
                <Route path="Signup" element={<Signup  />} />
                <Route path="/Account" element={<Account />} />
                <Route path="/Account/:id" element={<Account />} />
                <Route path="/admin/users" element={<UserTable />} />
                <Route path="Dashboard" element={
                    <Dashboard
                        courses={courses}
                        course={course}
                        setCourse={setCourse}
                        addNewCourse={addNewCourse}
                        deleteCourse={deleteCourse}
                        updateCourse={updateCourse}/>
                } />
                <Route path="Courses/:courseId/*" element={<Courses courses={courses} />} />
            </Routes>
            </div>
        </div>
        </Provider>
    );
}
export default Kanbas;