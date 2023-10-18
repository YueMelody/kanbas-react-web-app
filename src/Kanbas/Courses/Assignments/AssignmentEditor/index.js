import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import db from "../../../Database";
import { Link } from "react-router-dom";
import { FaEllipsisV } from 'react-icons/fa';
import { AiFillCheckCircle } from "react-icons/ai";
import 'bootstrap/dist/css/bootstrap.min.css';

function AssignmentEditor() {
    const { assignmentId } = useParams();
    const assignment = db.assignments.find(
        (assignment) => assignment._id === assignmentId);
    const { courseId } = useParams();
    const navigate = useNavigate();
    const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
};
return (
    <div>
        <div className="d-flex flex-row justify-content-end">
            <AiFillCheckCircle className="me-2" style={{color:"green"}}/>
            <span className="me-2" style={{color:"green"}}>Published</span>
            <button><FaEllipsisV /></button>
        </div>
        <hr/>
        <h2 style={{color:"black"}}>Assignment Name</h2>
        <input value={assignment.title}
        className="form-control mb-2" />
        <div className="d-flex flex-row justify-content-end">
            <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                className="btn btn-light float-right">
                Cancel
            </Link>
            <button onClick={handleSave} className="btn btn-danger float-right ms-1">
                Save
            </button>
        </div>
    </div>
    );
}
export default AssignmentEditor;