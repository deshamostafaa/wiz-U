import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { axiosInstance } from "../../config";

import "./profile.scss";

// Import Components
import Feed from "../../components/feed/Feed";
import UserDetails from "../../components/userDetails/UserDetails";
import AddPost from "./../../components/AddPost/AddPost";
import Sidebar from "../../components/sidebar/Sidebar";
import { SkeletonUser } from "../../components/skeleton/Skeleton";

const Profile = ({ currentUser }) => {
  const [user, setUser] = useState({});
  const { username } = useParams();
  const [loading, setIsLoading] = useState(true);

  // Get the User Posts only Current User
  const getPostCurrentUser = useCallback(async () => {
    await axiosInstance
      .get(`/users?username=${username}`)
      .then(({ data }) => {
        setUser(data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err.respones.data));
  }, [username]);
  useEffect(() => {
    getPostCurrentUser();
  }, [username, getPostCurrentUser]);


  dayjs.extend(relativeTime);
  return (
    <>
      <div className="profile">
        <Sidebar />
        <div className="profile-container d-flex justify-content-end">
          <div className="row mt-5 w">
            <div className="left">
              <Feed username={username} />
            </div>
            <div className=" right">
              {loading ? (
                <SkeletonUser />
              ) : (
                <UserDetails user={user} currentUser={currentUser} />
              )}
            </div>
          </div>
        </div>
      </div>
      <AddPost currentUser={currentUser} />
    </>
  );
};

export default React.memo(Profile);

/*

follow btn
 <span className="btn btn-outline-secondary w-100 btn-follow">
                FOLLow
              </span>

 {!postUser ? (
              <p className="loading fa fa-spinner fa-spin"></p>
            ) : (
              postUser.map((post, idx) => {
                return (
                  <div
                    key={idx}
                    className="row post"
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1500"
                  >
                    <div className="col-lg-8 col-md-12 col-sm-12 p-3 content">
                      <h5>{currentUser.name + " " + currentUser.surname}</h5>
                      <p className="time">{dayjs(post.createdAt).fromNow()}</p>
                      <p className="ps-2 mt-2 mb-4 lead">{post.desc}</p>
                      <div className="row w-50 d-flex">
                        <div className="col" style={{ cursor: "pointer" }}>
                          <i className="col-3 fa fa-heart-o icon"></i>{" "}
                          <span className="ms-3 fs-5">1</span>
                        </div>
                        <div className="col">
                          <i className="col-3 fa fa-comment-o icon"></i>
                        </div>
                        <div className="col">
                          <i className="col-3 fa fa-share icon"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            )}

*/

/*

 <div className="row d-flex justify-content-center text-center">
            <div className="col-lg-5 col-md-8 col-sm-12 text-start ">
              <div className="d-flex align-items-center">
                <h1>{currentUser.name + " " + currentUser.surname}</h1>{" "}
                <span className="btn btn-outline-primary ms-5 raduis">
                  FOLLow
                </span>
              </div>
              <p className="since">
                Member Since {dayjs(currentUser.createdAt).fromNow()} &#128156;
              </p>
              {/* <div className="container-follow">
                <span className="follow">
                  {currentUser.followers.length} FOLLOWERS
                </span>
                <span className="follow">
                  {currentUser.followings.length} FOLLOWINGS
                </span>
              </div> */
/*
            </div>
          </div>

*/
