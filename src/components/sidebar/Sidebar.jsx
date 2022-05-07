import "./sidebar.scss";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import LogoutIcon from "@mui/icons-material/Logout";
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
          <li onClick={() => navigate("/")}>
            <HomeIcon className="icon" />
            <span>Home</span>
          </li>
          <p className="title">USEFUL</p>
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

          <li onClick={logOut}>
            <LogoutIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
