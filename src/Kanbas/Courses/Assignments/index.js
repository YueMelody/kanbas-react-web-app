import React ,{useState}from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import { FaEllipsisV } from "react-icons/fa";
import { BiClipboard } from "react-icons/bi";
import { AiFillCheckCircle } from "react-icons/ai";
import "./index.css"
import { useSelector, useDispatch } from "react-redux";
import {
    addAssignment,
    deleteAssignment,
    updateAssignment,
    setAssignment,
} from "./assignmentsReducer";
import { useNavigate } from "react-router-dom";
import ConfirmDialog from "./confirmDialog";


function Assignments() {
    const { courseId } = useParams();
    const assignments = useSelector((state) => state.assignmentsReducer.assignments);
    const assignment = useSelector((state) => state.assignmentsReducer.assignment);
    const courseAssignments = assignments.filter((assignment) => assignment.course === courseId);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isDialogOpen, setDialogOpen] = useState(false);
    const [selectedAssignmentId, setSelectedAssignmentId] = useState(null);
    const openDialog = (assignmentId) => {
        console.log("Open dialog for assignmentId:", assignmentId);
        setSelectedAssignmentId(assignmentId);
        setDialogOpen(true);
        console.log(isDialogOpen)
    };

    const closeDialog = () => {
        setDialogOpen(false);
    };

    const confirmDelete = () => {
        dispatch(deleteAssignment(selectedAssignmentId));
        closeDialog();
      };
   

        return (
            <div>
                <h2>Assignments for course {courseId}</h2>
                <div className="button-group">
                    <input class="form-control w-50" placeholder="Search for Assignments"></input>
                    <div class="button-controls">
                        <button class="btn btn-light">+Group</button>
                        <button class="btn btn-danger" onClick={()=>{
                            dispatch(setAssignment({ ...assignment, title: "New Assignment", course: courseId }));
                            navigate(`/Kanbas/Courses/${courseId}/Assignments/New`)
                        }}>+ Assignment</button>
                        <button class="btn btn-light"><FaEllipsisV /></button>
                    </div>
                </div>
                <hr/>
                <div>
                    <div class="assignment-row first-row">
                        <FaEllipsisV/>
                        <FaEllipsisV/>
                        ASSIGNMENTS
                        <div className="title-circle">
                            40% of Total
                        </div>
                        +
                        <FaEllipsisV/>
                    </div>
                    {courseAssignments.map((assignment) => (
                        <div className="assignment-row">
                            <div className="left-group">
                            <FaEllipsisV/>
                            <FaEllipsisV/>
                            <BiClipboard/>
                            <Link
                                key={assignment._id}
                                to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                                className="list-group-item">
                                {assignment.title}
                            </Link>
                            </div>
                            <div class="right-group">
                                <button class="btn btn-danger" onClick={() => openDialog(assignment._id)}>Delete</button>
                                <AiFillCheckCircle style={{color:'green'}}/>
                                <FaEllipsisV/>
                            </div>
                        </div>
                    ))}
                </div>
                <ConfirmDialog
                                    isOpen={isDialogOpen}
                                    onClose={closeDialog}
                                    onConfirm={confirmDelete}
                                />
            </div>
        );
    }
export default Assignments;