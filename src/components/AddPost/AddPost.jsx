import React, { useState } from "react";
import { axiosInstance } from "../../config";

// MUL
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import AddIcon from "@mui/icons-material/Add";
import { Tooltip } from "@mui/material";
import Zoom from "@mui/material/Zoom";


function AddPost({ currentUser }) {
  const [post, setPost] = useState({
    desc: "",
    userId: "",
  });

  const handleSubmit = async (eo) => {
    eo.preventDefault();
    const createPost = { ...post, userId: currentUser._id };

    if (post.desc !== "") {
      await axiosInstance
        .post(`/posts`, createPost)
        .then((res) => {
          //  window.location.reload();
          setPost({ desc: "" });
        })
        .catch((err) => console.log(err.response.data));
    }
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ color: "#fff" }}>
      <Tooltip title="Create Post" placement="top" TransitionComponent={Zoom}>
        <Button
          sx={{
            position: "fixed",
            top: "20px",
            right: "50%",
            zIndex: 100,
          }}
          onClick={handleClickOpen}
        >
          <AddIcon />
        </Button>
      </Tooltip>
      <Dialog
        sx={{ backgroundColor: "#0A1929" }}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle sx={{ backgroundColor: "#0A1929" }}>
          Create Post
        </DialogTitle>
        <DialogContent sx={{ height: "300px", backgroundColor: "#0A1929" }}>
          <Box
            component="form"
            noValidate
            sx={{
              width: 500,
              maxWidth: "100%",
              height: "200px",
              margin: "20px 0",
            }}
            className="color"
          >
            <TextField
              minRows={7}
              maxRows={14}
              fullWidth
              multiline
              autoFocus
              color="info"
              id="outlined-basic"
              label="Create Post"
              variant="outlined"
              placeholder={`What do you think ${currentUser.username} ?`}
              value={post.desc}
              onChange={(e) => setPost({ desc: e.target.value })}
            />
            <DialogActions
              onClick={handleSubmit}
              sx={{
                backgroundColor: "#0A1929",
                marginTop: "15px",
              }}
            >
              <Button disabled={!post.desc} onClick={handleClose}>
                Create
              </Button>
            </DialogActions>
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
}
export default AddPost;
