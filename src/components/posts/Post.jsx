import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "./post.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";
import CustomizedMenus from "../EditPost/EditPost";
import { axiosInstance } from "../../config";

const Post = ({ post, currentUser }) => {
  const [user, setUser] = useState({});
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id));
  }, [currentUser._id, post.likes]);

  useEffect(() => {
    AOS.init();
    getUser();
  }, [post.userId]);

  //Get The Post User
  async function getUser() {
    const { data } = await axiosInstance.get(`/users?userId=${post.userId}`);
    setUser(data);
  }

  const likeHandler = () => {
    try {
      axiosInstance.put("/posts/" + post._id + "/like", {
        userId: currentUser._id,
      });
    } catch (err) {}
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  const likes = () => {
    if (like) {
      if (isLiked && like - 1 === 0) {
        return "You";
      } else if (isLiked && like - 1 === 1) {
        return "You and 1 more";
      } else if (isLiked && like - 1 !== 1) {
        return `You and ${like - 1} others`;
      } else {
        return like;
      }
    }
    return false;
  };

  dayjs.extend(relativeTime);

  return (
    <>
      <div
        className="row post"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1500"
      >
        <div className="col-lg-8 col-md-12 col-sm-12 p-3 content position-relative">
          <div className=" w-100 position-relative ">
            <Link to={`/profile/${user.username}`}>
              <Avatar
                className="img-pro"
                sx={{
                  width: "60px",
                  height: "60px",
                  fontSize: "26px",
                  bgcolor: deepOrange[500],
                }}
                src={user.profilePicture}
              >
                {user.name?.slice(0, 1) + user.surname?.slice(0, 1)}
              </Avatar>
            </Link>
          </div>
          <Link
            style={{ textDecoration: "none" }}
            to={`/profile/${user.username}`}
          >
            <h5>{user.name + " " + user.surname}</h5>
          </Link>
          <p className="time">{dayjs(post.createdAt).fromNow()}</p>
          <p className="ps-2 mt-2 mb-4 lead">{post.desc}</p>
          <div className="row w-50 d-flex">
            <div
              onClick={likeHandler}
              className="col-8"
              style={{ cursor: "pointer" }}
            >
              <i
                className={
                  isLiked
                    ? " fa fa-heart icon"
                    : " fa fa-heart-o icon"
                }
              ></i>{" "}
              <span className="ms-1 mb-1 love">{likes() || ''}</span>
            </div>
            <div className="col">
              <i className="fa fa-comment-o icon"></i>
            </div>
          </div>
          <div className="position-fixed menu">
            {currentUser.username === user.username ? (
              <CustomizedMenus post={post} currentUser={currentUser} />
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
