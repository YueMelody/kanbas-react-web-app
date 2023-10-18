import Modules from "../Modules";
import { IoIosCloudUpload, IoIosPlay } from 'react-icons/io';
import { FaCloudDownloadAlt } from 'react-icons/fa';
import { AiFillHome, AiOutlineLineChart, AiOutlineBell } from 'react-icons/ai';
import {BsFillMegaphoneFill} from 'react-icons/bs';
import './index.css'


function Home() {
    const statusButtons =[ 
        "Import Existing Content",
      "Import From Commons",
      "Choose Home Page",
      "View Course Stream",
      "New Announcement",
      "New Analytics",
      "View Course Notifications"];
      const statusIcons = [
        <IoIosCloudUpload />,
        <FaCloudDownloadAlt />,
        <AiFillHome />,
        <IoIosPlay />,
        <BsFillMegaphoneFill />,
        <AiOutlineLineChart />,
        <AiOutlineBell />,
      ]
  return (
    <div className="row">
        <div className="col-10">
            <Modules />
        </div>
        <div className="col-2">
            <ul className="button-list">
                {statusButtons.map((buttonText, index) => (
                    <li className=" wd-course-status-list"key={index}><a href="#" className='btn btn-light'>{statusIcons[index]} {buttonText}</a></li>
                ))}
            </ul>
            <h2 style={{color:"black"}}>To do</h2>
            <hr></hr>
            <ul className="todo-list">
                <li><a href="#">Lecture CS4550.12631.202410 Sep 7 at 11:45am</a></li>
                <li><a href="#">Lecture CS4550.12631.202410 Sep 11 at 11:45am</a></li>
                <li><a href="#">CS5610 06 SP23 Lecture Sep 11 at 6pm</a></li>
            </ul>
        </div>
    </div>
  );
}
export default Home;