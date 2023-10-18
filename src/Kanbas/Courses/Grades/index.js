import db from "../../Database";
import { useParams } from "react-router-dom";
import { FaFileImport } from "react-icons/fa";
import { FaFileExport } from "react-icons/fa";
import { BsFillGearFill } from "react-icons/bs";
import { AiFillFilter } from "react-icons/ai";

function Grades() {
  const { courseId } = useParams();
  const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
  const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
  return (
    <div>
      <h1 style={{color:"black"}}>Grades</h1>
      <div className="row">
        <div className="col d-flex justify-content-end">
            <button className=" btn btn-light mx-1"><FaFileImport /> Import</button>
            <button className=" btn btn-light mx-1"><FaFileExport/> Export</button>
            <button className="btn btn-light mx-1"><BsFillGearFill /></button>
        </div>
        </div>

        <div className="wd-search-bars">
        <div className="row">
          <div className="col">
            <h4 style={{color:"black"}}>Student Names</h4>
          </div>
          <div className="col">
            <h3 style={{color:"black"}}>Assignment Names</h3>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <input className="form-control w-50" placeholder="Search Students"></input>
          </div>
          <div className="col">
            <input className="form-control w-50" placeholder="Search Assignments"></input>
          </div>
        </div>
        <button className="btn btn-light mt-2"><AiFillFilter/>Apply Filters</button>
      </div>

      <div className="table-responsive">
        <table className="table">
          <thead style={{color:"black"}}>
            <th>Student Name</th>
            {assignments.map((assignment) => (<th>{assignment.title}</th>))}
          </thead>
          <tbody>
            {enrollments.map((enrollment) => {
              const user = db.users.find((user) => user._id === enrollment.user);
              return (
                <tr>
                   <td style={{color:"red"}}>{user.firstName} {user.lastName}</td>
                   {assignments.map((assignment) => {
                     const grade = db.grades.find(
                       (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                       return (<td>{grade?.grade || ""}</td>);})}
                </tr>);
            })}
          </tbody></table>
        </div>
    </div>);
}
export default Grades;