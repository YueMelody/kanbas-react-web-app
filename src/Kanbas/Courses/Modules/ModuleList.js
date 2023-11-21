import React, { useEffect} from "react";
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
setModules
} from "./modulesReducer";
import * as client from "./client";

function ModuleList() {
    const dispatch = useDispatch();
    const { courseId } = useParams();
    useEffect(() => {
        client.findModulesForCourse(courseId)
          .then((modules) =>
            dispatch(setModules(modules))
        );
      }, [courseId, dispatch]);
    const handleAddModule = () => {
        client.createModule(courseId, module).then((module) => {
          dispatch(addModule(module));
        });
    };
    const handleDeleteModule = (moduleId) => {
        client.deleteModule(moduleId).then((status) => {
          dispatch(deleteModule(moduleId));
        });
    };
    const handleUpdateModule = async () => {
        const status = await client.updateModule(module);
        console.log(status);
        dispatch(updateModule(module));
    };
    
    const modules = useSelector((state) => state.modulesReducer.modules);
    const module = useSelector((state) => state.modulesReducer.module);
    return (
        <ul className="table">
            <div className="d-flex align-items-start">
                <input className="form-control mb-2" value={module.name}
                    onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
                />
                <button class="btn btn-primary" onClick={() => handleUpdateModule()}>
                    update
                </button>
                <button className="btn btn-success ml-3" onClick={handleAddModule}>
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
                    onClick={() => handleDeleteModule(module._id)}>
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