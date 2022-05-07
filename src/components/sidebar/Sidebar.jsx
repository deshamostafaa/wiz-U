import "./sidebar.scss";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from 'react';
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
const Sidebar = ({ logOut}) => {
  const { currentUser } = useSelector((state) => state.currentUserSlice);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  
  return (
    <>
      <Button
        sx={{ height: "fit-content" }}
        onClick={() => setOpen(!open)}
        className={!open ? "meau-side" : "menu-open"}
      >
        {open ? (
          <CloseIcon sx={{ fontSize: "40px" }} />
        ) : (
          <MenuIcon sx={{ fontSize: "40px" }} />
        )}
      </Button>
      <aside className={open ? "sidebar-show sidebar" : "sidebar-hide sidebar"}>
        <div className="center">
          <ul>
            <p className="title">MAIN</p>
            <li onClick={() => navigate("/")}>
              <HomeIcon className="icon" />
              {open ? <span>Home</span> : ""}
            </li>
            <p className="title">USEFUL</p>
            <Link to="/find-friend" style={{ textDecoration: "none" }}>
              <li>
                <PeopleIcon className="icon" />
                {open ? <span>Find Friend</span> : ""}
              </li>
            </Link>
            <p className="title">USER</p>
            <Link
              to={`/profile/${currentUser.username}`}
              style={{ textDecoration: "none" }}
            >
              <li>
                <AccountCircleOutlinedIcon className="icon" />
                {open ? <span>Profile</span> : ""}
              </li>
            </Link>

            <li onClick={logOut}>
              <LogoutIcon className="icon" />
              {open ? <span>Logout</span> : ""}
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
