import React from "react";
import { useParams } from "react-router-dom";
import { FaEllipsisV } from "react-icons/fa";
import { AiFillCheckCircle } from "react-icons/ai";
import './ModuleList.css'
import { useSelector, useDispatch } from "react-redux";
import {
addModule,
deleteModule,
updateModule,
setModule,
} from "./modulesReducer";

function ModuleList() {
    const { courseId } = useParams();
    const modules = useSelector((state) => state.modulesReducer.modules);
    const module = useSelector((state) => state.modulesReducer.module);
    const dispatch = useDispatch();
    return (
        <ul className="table">
            <div className="d-flex align-items-start">
                <input className="form-control mb-2" value={module.name}
                    onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
                />
                <button class="btn btn-primary" onClick={() => dispatch(updateModule(module))}>
                    update
                </button>
                <button className="btn btn-success ml-3" onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
                    Add
                </button>
            </div>
            <textarea className="form-control mb-2" rows="3"
                value={module.description}
                onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
            />
        {
            modules.filter((module) => module.course === courseId)
            .map((module, index) => (
            <li key={index} className="assignment-row">
                <FaEllipsisV/>
                <FaEllipsisV/>
                &nbsp;&nbsp;{module.name}
                <AiFillCheckCircle style={{color:'green'}}/>
                &nbsp;
                +
                &nbsp;
                <FaEllipsisV/>
                <button className="btn btn-danger"
                    onClick={() => dispatch(deleteModule(module._id))}>
                Delete
                </button>
                <button class="btn btn-success"
                    onClick={() => dispatch(setModule(module))}>
                Edit
                </button>
            </li>
            ))
        }
        </ul>
    );
}
export default ModuleList;