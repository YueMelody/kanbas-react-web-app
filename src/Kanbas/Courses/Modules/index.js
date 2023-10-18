import ModuleList from "./ModuleList";
import { AiFillCheckCircle } from "react-icons/ai";
import { FaEllipsisV } from "react-icons/fa";
import './index.css'

function Modules() {
return (
    <div>
        <div className="button-group d-flex flex-row justify-content-end">
            <button class="btn btn-light">Collapse All</button>
            <button class="btn btn-light">View Progress</button>
            <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <AiFillCheckCircle style={{color:'green'}}/>
                &nbsp;&nbsp;Publish All
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="index.js">Action</a>
                <a class="dropdown-item" href="index.js">Another action</a>
                <a class="dropdown-item" href="index.js">Something else here</a>
            </div>
            <button type="button" class="btn btn-danger">+ Module</button>
            <button class="btn btn-light"><FaEllipsisV /></button>
        </div>
        <br/>
        <br/>

        <ModuleList />
    </div>
    );
}
export default Modules;