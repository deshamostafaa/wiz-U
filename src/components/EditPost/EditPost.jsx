import React, {useState} from "react";
import { axiosInstance } from "../../config";

import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Tooltip } from "@mui/material";

import { Box } from "@mui/material";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    backgroundColor: "#333",
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.dark,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

 function CustomizedMenus({ post, currentUser }) {
  // To Open Menu
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // To Delete Post 
  const handleDelete = async () => {
    try {
      await axiosInstance.delete(
        `/posts/${post._id}`
      );
    } catch (error) {
      console.log(error.response.data);
    }
  };

  // To Open Form to Edit Post
   const [postEdit, setPostEdit] = useState({
     desc: post.desc,
     userId: "",
   });

  const [openE, setOpenE] = useState(false);

  const handleClickOpen = () => {
    setOpenE(true);
   };
   
    const handleCloseE = () => {
      setOpenE(false);
    };


  // To Edit Post
  const handleSubmit = async (eo) => {
    eo.preventDefault();
    console.log("dana");
    const editPost = { ...postEdit, userId: currentUser._id };
    try {
      if (post.desc !== "") {
        await axiosInstance.put(
          `/posts/${post._id}`,
          editPost
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Button
        sx={{ backgroundColor: "transparent" }}
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
      >
        <MoreVertIcon />
      </Button>
      <StyledMenu
        sx={{ color: "#333" }}
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClickOpen} disableRipple>
          <EditIcon />
          Edit
        </MenuItem>
        <Dialog
          sx={{ backgroundColor: "#0A1929", color: "#eee" }}
          open={openE}
          onClose={handleClose}
        >
          <DialogTitle sx={{ backgroundColor: "#0A1929", color: "#eee" }}>
            Edit Post
          </DialogTitle>
          <DialogContent
            sx={{ height: "300px", backgroundColor: "#0A1929", color: "#eee" }}
          >
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
                label="Edit Post"
                variant="outlined"
                placeholder={`What do you think ${currentUser.username} ?`}
                value={postEdit.desc}
                onChange={(e) => setPostEdit({ desc: e.target.value })}
              />
              <DialogActions
                onClick={handleSubmit}
                sx={{
                  backgroundColor: "#0A1929",
                  marginTop: "15px",
                }}
              >
                <Tooltip title="Continue Edit">
                  <Button onClick={handleCloseE}>Continue</Button>
                </Tooltip>
              </DialogActions>
            </Box>
          </DialogContent>
        </Dialog>
        <MenuItem onClick={handleDelete} disableRipple>
          <DeleteIcon />
          Delete
        </MenuItem>
      </StyledMenu>
    </div>
  );
}
export default React.memo(CustomizedMenus);