import React, { useState, useEffect, useCallback } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CommentIcon from "@mui/icons-material/Comment";
import { Box } from "@mui/material";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";
import { Link } from "react-router-dom";
import "./comment.scss";
import { axiosInstance } from "../../config";
import DeleteIcon from "@mui/icons-material/Delete";

function Comments({ post, currentUser, user }) {
  const [open, setOpen] = React.useState(false);
  const [createCom, setCreateCom] = useState({
    userId: "",
    postId: "",
    comment: "",
  });
  const [comments, setComments] = useState([]);

  const fetchComment = useCallback(async () => {
    const { data } = await axiosInstance.get(`/comment/${post._id}`);
    setComments(data);
  }, [comments]);

  useEffect(() => {
    fetchComment();
  }, [fetchComment]);

  // Create Comment
  const handleCreate = async () => {
    const newComment = {
      ...createCom,
      userId: currentUser._id,
      postId: post._id,
    };
    try {
      await axiosInstance.post("/comment", newComment);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = async (id) => {
    try {
      await axiosInstance.delete(`comment/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  dayjs.extend(relativeTime);

  return (
    <div>
      <Button onClick={handleClickOpen}>
        <CommentIcon />
      </Button>
      <Dialog
        sx={{ backgroundColor: "#0A1929", color: "#eee", width: "60%" }}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle sx={{ backgroundColor: "#0A1929", color: "#eee" }}>
          Add Comment
        </DialogTitle>
        <DialogContent sx={{ backgroundColor: "#0A1929" }}>
          <DialogContentText component="div">
            <div className=" p-2 content-comment position-relative">
              <div className=" w-100 d-flex  ">
                <Link
                  style={{ textDecoration: "none" }}
                  to={`/profile/${user.username}`}
                >
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
                <h5 className="ms-3 mt-3">{user.name + " " + user.surname}</h5>
              </div>

              <p className="time">{dayjs(post.createdAt).fromNow()}</p>
              <p className="ps-2 mt-2 mb-4 lead">{post.desc}</p>
            </div>
          </DialogContentText>

          <Box
            component="form"
            noValidate
            sx={{
              width: 500,
              maxWidth: "100%",

              margin: "20px 0",
            }}
            className="color"
          >
            <TextField
              minRows={3}
              maxRows={6}
              fullWidth
              multiline
              autoFocus
              color="info"
              id="outlined-basic"
              label="Add Comment"
              variant="outlined"
              placeholder={`${currentUser.username} you can write a comment`}
              value={createCom.comment}
              onChange={(e) => setCreateCom({ comment: e.target.value })}
            />
            <Button
              onClick={handleCreate}
              sx={{ marginTop: "15px" }}
              variant="outlined"
            >
              Add Comment
            </Button>
          </Box>
          <hr />
          <p className="fs-5">{comments?.length} Comments </p>
          <Box component="div">
            {comments?.length !== 0
              ? comments?.map((c) => {
                  return (
                    <div
                      key={c._id}
                      className=" p-2 mb-3 content-comment position-relative bg-transparent"
                    >
                      <div className=" w-100 d-flex align-items-center justify-content-between">
                        <Link style={{ textDecoration: "none" }} to={`/`}>
                          <h5 className="m-2">
                            {c.userId.name + " " + c.userId.surname}
                          </h5>
                        </Link>
                        {post.userId === currentUser._id ||
                        currentUser._id === c.userId._id ? (
                          <Button
                            onClick={() => handleDelete(c._id)}
                            variant="outlined"
                          >
                            <DeleteIcon />
                          </Button>
                        ) : (
                          ""
                        )}
                      </div>
                      <p className="ps-2 mt-1 mb-2 fs-6 lead">{c.comment}</p>

                      <p className="time ms-1 mt-2 ">
                        {dayjs(c.createdAt).fromNow()}
                      </p>
                    </div>
                  );
                })
              : null}
          </Box>
        </DialogContent>
        <DialogActions sx={{ backgroundColor: "#0A1929" }}>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default React.memo(Comments);
