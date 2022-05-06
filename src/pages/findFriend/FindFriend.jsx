import React, { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Avatar from "@mui/material/Avatar";
import "./find.scss";
import { axiosInstance } from "../../config";
import { Link } from "react-router-dom";

const FindFriend = ({ currentUser }) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchData();

    async function fetchData() {
      const { data } = await axiosInstance.get("/user");
      setUsers(data);
    }
  }, []);
  return (
    <div className="find">
      <Sidebar />
      <div className="find-container d-flex justify-content-end">
        <div className="row mt-5 w">
          {!users
            ? "Loading"
            : users.map((user) => {
                return user._id !== currentUser._id ? (
                  <div key={user._id} className="col-6">
                    <Link
                      key={user._id}
                      className="one-friend"
                      style={{ textDecoration: "none", width: 'fit-content' }}
                      to={`/profile/${user.username}`}
                    >
                      <Avatar
                        src={user.profilePicture}
                        sx={{ width: 52, height: 52 }}
                      >
                        {user.name.slice(0, 1) + user.surname.slice(0, 1)}
                      </Avatar>
                      <span>{user.name + " " + user.surname}</span>
                    </Link>
                  </div>
                ) : null;
              })}
        </div>
      </div>
    </div>
  );
};

export default FindFriend;
