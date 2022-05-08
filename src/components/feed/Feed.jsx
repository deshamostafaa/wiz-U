import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Post from "../../components/posts/Post";
import { SkeletonPost } from "../skeleton/Skeleton";
import { Alert } from "@mui/material";
import AlertTitle from "@mui/material/AlertTitle";
import { axiosInstance } from "../../config";


const Feed = ({ username }) => {
  const [loading, setIsLoading] = useState(true);
  const [post, setPost] = useState([]);
  const { currentUser } = useSelector((state) => state.currentUserSlice);

  const getPostUsers = async() => {
    const res = username
      ? await axiosInstance.get(
          `/posts/profile/${username}`
      )
      
      : await axiosInstance.get(
          `/posts/timeline/${currentUser._id}`
      );
    setIsLoading(false);
    setPost(
      res.data.sort((p1, p2) => {
        return new Date(p2.createdAt) - new Date(p1.createdAt);
      })
    );
  }
  useEffect(() => {
    getPostUsers();
  }, [username, currentUser._id,getPostUsers]);
  
  return (
    <>
      {loading ? (
        <SkeletonPost />
      ) : post.length === 0 ? (
        <Alert
          sx={{ width: "80%", margin: "2rem auto", fontSize: "1.2rem" }}
          variant="filled"
          severity="error"
        >
          <AlertTitle>No Posts Yet</AlertTitle>
          You can create post by clicking on the button in the corner
        </Alert>
      ) : (
        post.map((p) => {
          return <Post key={p._id} post={p} currentUser={currentUser} />;
        })
      )}
    </>
  );
};

export default React.memo(Feed);
