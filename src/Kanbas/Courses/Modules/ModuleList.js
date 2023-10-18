import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { FaEllipsisV } from "react-icons/fa";
import { AiFillCheckCircle } from "react-icons/ai";
import './ModuleList.css'

function ModuleList() {
    const { courseId } = useParams();
    const modules = db.modules.filter(
        (module) => module.course === courseId);
    return (
        <ul className="table">
        {
            modules.map((module, index) => (
            <li key={index} className="assignment-row">
                <FaEllipsisV/>
                <FaEllipsisV/>
                &nbsp;&nbsp;{module.name}
                <AiFillCheckCircle style={{color:'green'}}/>
                &nbsp;
                +
                &nbsp;
                <FaEllipsisV/>
            </li>
            ))
        }
        </ul>
    );
}
export default ModuleList;