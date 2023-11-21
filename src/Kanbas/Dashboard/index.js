import { React } from "react";
import { Link } from "react-router-dom";
import db from "../Database";
import './index.css'
import { FaEllipsisV } from 'react-icons/fa';
import { BiCalendarEdit } from "react-icons/bi";

function Dashboard({ courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }) {

return (
    <div>
        <h1>Dashboard</h1>
        <hr/>
        <div>
            <h2>Published Courses ({db.courses.length})</h2>
            <hr/>
            <div className="form-group">
            <input value={course.name} className="form-control"
                onChange={(e) => setCourse({ ...course, name: e.target.value })} />
            <input value={course.number} className="form-control"
                onChange={(e) => setCourse({ ...course, number: e.target.value })} />
            <input value={course.startDate} className="form-control" type="date"
                onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
            <input value={course.endDate} className="form-control" type="date"
                onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />

            <button onClick={addNewCourse} className="btn btn-success">
            Add
            </button>

            <button className="btn btn-primary" onClick={updateCourse}>
            Update
            </button>
            </div>
            <div className="card-container">
                {courses.map((course) => (
                    <div class="card">
                        <div class="card-header">
                            <FaEllipsisV className="header-icon"/>
                        </div>
                        <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="list-group-item">
                            <div class="card-body-first">{course.number} {course.name}</div>
                            <div class="card-body-second">{course.number} {course.startDate} {course.endDate}</div>
                            <BiCalendarEdit className="course-card-icon"/>
                        </Link>
                        <div class="button-group">
                            <button class="btn btn-warning"
                                onClick={(event) => {
                                    event.preventDefault();
                                    setCourse(course);
                                    }}>
                                Edit
                            </button>
                            <button class="btn btn-danger"
                                onClick={(event) => {
                                    event.preventDefault();
                                    deleteCourse(course);
                                    }}>
                                Delete
                            </button>
                        </div>
                    </div>
            ))}
        </div>
        </div>
    </div>
    );
}
export default Dashboard;