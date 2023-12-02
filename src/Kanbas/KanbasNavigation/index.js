import { Link, useLocation } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { RiDashboard3Fill } from "react-icons/ri";
import { FaBook, FaInbox, FaHistory, FaCameraRetro, FaShareSquare, FaQuestionCircle } from "react-icons/fa";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import NEUlogo from '../image/Northeastern-University-Emblem.png'
import "./index.css"

function KanbasNavigation() {
    const links = [
        {name:"Account",icon:<BiUserCircle className="wd-icon wd-user-icon" />},
        {name:"Signin",icon:<BiUserCircle className="wd-icon" />},
        {name:"Signup",icon:<BiUserCircle className="wd-icon" />},
        {name:"Dashboard",icon:<RiDashboard3Fill className="wd-icon"/>},
        {name:"Courses",icon:<FaBook className="wd-icon"/>},
        {name:"Calendar",icon:<BsFillCalendar2WeekFill className="wd-icon" />},
        {name:"Inbox",icon:<FaInbox className="wd-icon" />},
        {name:"History",icon:<FaHistory className="wd-icon" />},
        {name:"Studio",icon:<FaCameraRetro className="wd-icon" />},
        {name:"Commons",icon:<FaShareSquare className="wd-icon" />},
        {name:"Help",icon:<FaQuestionCircle className="wd-icon" />}]
    const { pathname } = useLocation();
    return (
        <div>
            <div className="navigation-list-group" style={{ width: 90 }}>
                    <img src={NEUlogo} alt="Northeastern University Logo" class="logo"></img>
                    {links.map((link, index) => (
                        <Link
                            key={index}
                            to={`/Kanbas/${link.name}`}
                            className={`navigation-list-group-item ${pathname.includes(link.name) && "active"}`}>
                                {link.icon}
                            {link.name}
                        </Link>
                    ))}
            </div>
        </div>
    );
}
export default KanbasNavigation;