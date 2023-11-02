import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import db from "../../../Database";
import { Link } from "react-router-dom";
import { FaEllipsisV } from 'react-icons/fa';
import { AiFillCheckCircle } from "react-icons/ai";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from "react-redux";
import {
    addAssignment,
    deleteAssignment,
    updateAssignment,
    setAssignment,
  } from "../assignmentsReducer";

function AssignmentEditor() {
    const { assignmentId } = useParams();
    const assignments = useSelector((state) => state.assignmentsReducer.assignments);
    const assignment = useSelector((state) => state.assignmentsReducer.assignment);
    const { courseId } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSave = () => {
        let oldAssignment = assignments.find((assignment) => assignment._id === assignmentId);
        (oldAssignment) ? dispatch(updateAssignment({...assignment, _id: oldAssignment._id,  course: courseId})) : dispatch(addAssignment({ ...assignment, course: courseId }));
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
        <input value={assignment.title} className="form-control mb-2" onChange={(e) => dispatch(setAssignment({ ...assignment, title: e.target.value }))}/>
        <h2 style={{color:"black"}}>Assignment Description</h2>
        <input value={assignment.description} className="form-control mb-2" onChange={(e) => dispatch(setAssignment({ ...assignment, description: e.target.value }))}/>
        <h2 style={{color:"black"}}>Due Date</h2>
        <input type="date" value={assignment.dueDate} className="form-control mb-2" onChange={(e) => dispatch(setAssignment({ ...assignment, dueDate: e.target.value }))}/>
        <h2 style={{color:"black"}}>Available From Date</h2>
        <input type="date" value={assignment.availableFromDate} className="form-control mb-2" onChange={(e) => dispatch(setAssignment({ ...assignment, availableFromDate: e.target.value }))}/>
        <h2 style={{color:"black"}}>Available Until Date</h2>
        <input type="date" value={assignment.availableUntilDate} className="form-control mb-2" onChange={(e) => dispatch(setAssignment({ ...assignment, availableUntilDate: e.target.value }))}/>
        
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