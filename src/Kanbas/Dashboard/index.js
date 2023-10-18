import { Link } from "react-router-dom";
import db from "../Database";
import './index.css'
import { FaEllipsisV } from 'react-icons/fa';
import { BiCalendarEdit } from "react-icons/bi";

function Dashboard() {
return (
    <div>
        <h1>Dashboard</h1>
        <hr/>
        <div>
            <h2>Published Courses ({db.courses.length})</h2>
            <hr/>
            <div className="card-container">
                {db.courses.map((course) => (
                    <div class="card">
                        <div class="card-header">
                            <FaEllipsisV className="header-icon"/>
                        </div>
                        <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="list-group-item">
                            <div class="card-body-first">{course.number} {course.name}</div>
                            <div class="card-body-second">{course.number} {course.startDate} {course.endDate}</div>
                            <BiCalendarEdit className="course-card-icon"/>
                        </Link>
                    </div>
            ))}
        </div>
        </div>
    </div>
    );
}
export default Dashboard;