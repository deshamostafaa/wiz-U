import React from "react";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";

import "./friends.scss";

const Friends = ({ friend }) => {
  return (
    <div className="friends">
      <Link
        to={`/profile/${friend.username}`}
        style={{ textDecoration: "none" }}
      >
        <div className="one-friend">
          <Avatar src={friend.profilePicture} sx={{ width: 52, height: 52 }}>
            {friend.name.slice(0, 1) + friend.surname.slice(0, 1)}
          </Avatar>
          <span>{friend.name + " " + friend.surname}</span>
        </div>
      </Link>
    </div>
  );
};

export default Friends;
