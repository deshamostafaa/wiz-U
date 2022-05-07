import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { axiosInstance } from "../../config";

import "./home.scss";
import Feed from "../../components/feed/Feed";
import Friends from "../../components/friend/Friends";
import AddPost from "./../../components/AddPost/AddPost";
import Sidebar from "../../components/sidebar/Sidebar";
import { SkeletonFriend } from "../../components/skeleton/Skeleton";

import { Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Home = ({ currentUser, logOut }) => {
  const navigate = useNavigate();
  const [friends, setFriends] = useState([]);
  const [loading, setIsLoading] = useState(true);

  // Get Your Friends
  useEffect(() => {
    const getFriend = async () => {
      try {
        const { data } = await axiosInstance.get(
          `/users/friends/${currentUser._id}`
        );
        setFriends(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getFriend();
  }, [currentUser]);

  return (
    <>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        transition={{ duration: 0 }}
      >
       
        <div className="home">
          <Sidebar className='side-home' logOut={logOut} />
          <main className="homeContainer d-flex justify-content-end">
            <div className="row mt-5 w ">
              <div className="post-container">
                <Feed />
              </div>
              <div className="friend-container">
                <h1 className="fs-1 lead">Following &#128156;</h1>
                {loading ? (
                  <SkeletonFriend />
                ) : friends.length === 0 ? (
                  <>
                    <Alert
                      sx={{ width: "82%", margin: "2rem auto" }}
                      variant="filled"
                      severity="error"
                    >
                      You don't have a followings
                    </Alert>
                    <span
                      onClick={() => navigate("/find-friend")}
                      className="btn btn-outline-info"
                    >
                      Find Followers
                    </span>
                  </>
                ) : (
                  friends.map((f) => <Friends key={f._id} friend={f} />)
                )}
              </div>
            </div>
          </main>
        </div>
        <AddPost currentUser={currentUser} />
      </motion.div>
    </>
  );
};

export default React.memo(Home);
