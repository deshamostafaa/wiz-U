import "./sidebar.scss";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from "@mui/icons-material/People";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


const Sidebar = ({ logOut }) => {
  const { currentUser } = useSelector((state) => state.currentUserSlice);
  const navigate = useNavigate();
  return (
    <aside className="sidebar">
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li onClick={() => navigate("/home")}>
            <HomeIcon className="icon" />
            <span>Home</span>
          </li>
          <p className="title">USEFUL</p>
          {/* <li>
            <NotificationsNoneIcon className="icon" />
            <span>Notifications</span>
          </li> */}
          <Link to="/find-friend" style={{ textDecoration: "none" }}>
            <li>
              <PeopleIcon className="icon" />
              <span>Find Friend</span>
            </li>
          </Link>
          <p className="title">USER</p>
          <Link
            to={`/profile/${currentUser.username}`}
            style={{ textDecoration: "none" }}
          >
            <li>
              <AccountCircleOutlinedIcon className="icon" />
              <span>Profile</span>
            </li>
          </Link>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
