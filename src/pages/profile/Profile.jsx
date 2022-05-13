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
  }, [username, user]);
  useEffect(() => {
    getPostCurrentUser();
  }, [getPostCurrentUser]);


  dayjs.extend(relativeTime);
  return (
    <>
      <div className="profile">
        <Sidebar />
        <div className="profile-container d-flex justify-content-end">
          <div className=" row mt-5 w">
            <div className="left">
              <Feed username={username} />
            </div>
            <div className=" right">
              {loading ? (
                <p className="loading fa fa-spinner fa-spin"></p>
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