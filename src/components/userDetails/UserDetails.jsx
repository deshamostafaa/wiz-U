import React, { useState } from "react";
import "./userDetails.scss";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import { useDispatch } from "react-redux";
import { userAction } from "../../store/currentUserSlice";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";
import PeopleIcon from "@mui/icons-material/People";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CheckIcon from "@mui/icons-material/Check";
import EditProfile from './../EditProfile/EditProfile';
import { axiosInstance } from "../../config";



const UserDetails = ({ user, currentUser }) => {
  const dispatch = useDispatch();
  const [followed, setFollowed] = useState(
    currentUser.followings?.includes(user?._id)
  );

  const handleFollow = async () => {
    try {
      if (followed) {
        await axiosInstance.put(
          `/users/${user._id}/unfollow`,
          {
            userId: currentUser._id,
          }
        );
        dispatch(userAction.unfollow(user._id))
      } else {
        await axiosInstance.put(
          `/users/${user._id}/follow`,
          {
            userId: currentUser._id,
          }
        );
        dispatch(userAction.follow(user._id));
        
      }
      setFollowed(!followed);
    } catch (error) {
      console.log(error);
    }
  };
  dayjs.extend(relativeTime);

  return (
    <>
      <div className="w-100 d-flex  justify-content-center align-items-center flex-column">
        <div className="w-100 d-flex  justify-content-center align-items-center">
          <Avatar
            sx={{
              width: "180px",
              height: "180px",
              fontSize: "26px",
              bgcolor: deepOrange[500],
            }}
            src={user.profilePicture}
          >
            {user.name?.slice(0, 1) + user.surname?.slice(0, 1)}
          </Avatar>
        </div>
        <div className="w text-start mt-4 ms-5">
          <span className="d-block name">{user.name + " " + user.surname ? user.surname?.slice(0,1) + "." : ''}</span>
          <p className="since">
            Member Since {dayjs(user.createdAt).fromNow()} &#128156;
          </p>
          <p className="bio">{user.bio}</p>
        </div>
        <div className="w text-start ms-5">
          <span className="d-block job">{user.job}</span>

          {user.username === currentUser.username ? (
              <EditProfile currentUser={currentUser} /> 
            
          ) : (
            <span
              onClick={handleFollow}
              className={
                followed
                  ? "btn w-100 fs-5 follow  btn-isfollow mt-4"
                  : "btn w-100 follow  follow-button fs-5 mt-4"
              }
            >
              {followed ? (
                <CheckIcon sx={{ fontSize: 30, color: "green" }} />
              ) : (
                ""
              )}
              {followed ? "  Following" : "+ Follow"}
            </span>
          )}
          <div className="container-follow mt-3">
            <span>
              <PeopleIcon className="text-secondary me-2" />
              {user.followers?.length}
              <span className="text-secondary f-hover"> followers</span>
            </span>
            <span className="ms-4">
              {user.followings?.length}
              <span className="text-secondary f-hover"> following</span>
            </span>
          </div>
        </div>
        <div className="w text-start mt-4 ms-5">
          <span className="d-block ">
            <LocationOnIcon className="text-secondary fs-2 me-1 mb-2" />
            <span className="text-secondary fs-4 ">{user.address}</span>
          </span>
        </div>
      </div>
    </>
  );
};

export default React.memo(UserDetails);
