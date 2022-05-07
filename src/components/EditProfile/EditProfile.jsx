import React, { useState } from "react";
import { axiosInstance } from './../../config';

// MUL
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Box } from "@mui/material";
import { Tooltip } from "@mui/material";
import Zoom from "@mui/material/Zoom";

export default function EditProfile({ currentUser }) {
  
    const [user, setUser] = useState({
        name: '',
        surname: '',
        job: '',
        bio: '',
        address: ''
  });

  const handleSubmit = async (eo) => {
      eo.preventDefault();
      const updateUser = {...user, userId: currentUser._id}
    try {
      
        await axiosInstance.patch(`/users/${currentUser._id}`, updateUser);
    } catch (error) {
      console.log(error.response.data);
    }
  };
  const [openEP, setOpenEP] = React.useState(false);

  const handleClickOpen = () => {
    setOpenEP(true);
  };

  const handleClose = () => {
    setOpenEP(false);
  };

  return (
    <div>
      <Tooltip title="Edit Profile" placement="top" TransitionComponent={Zoom}>
        <Button
          sx={{
            width: "90%",
            margin: "20px 0",
            backgroundColor: "#191A35",
          }}
          variant="outlined"
          onClick={handleClickOpen}
        >
          Edit Profile
        </Button>
      </Tooltip>
      <Dialog
        sx={{ backgroundColor: "#0A1929", color: "#eee" }}
        open={openEP}
        onClose={handleClose}
      >
        <DialogTitle sx={{ backgroundColor: "#0A1929" }}>
          Edit Profile
        </DialogTitle>
        <DialogContent sx={{ height: "550px", backgroundColor: "#191A35" }}>
          <Box
            component="form"
            noValidate
            sx={{
              width: 500,
              maxWidth: "100%",
              height: "200px",
              margin: "20px 0",
            }}
            autoComplete="off"
          >
            <TextField
              margin="dense"
              fullWidth
              autoFocus
              color="info"
              id="outlined-basic"
              helperText="Enter Name"
              variant="filled"
              value={user.name}
              required
              onChange={(e) => setUser({ name: e.target.value })}
            />
            <TextField
              margin="dense"
              fullWidth
              color="info"
              id="outlined-basic"
              helperText="Enter Surname"
              variant="filled"
              required
              value={user.surname}
              onChange={(e) => setUser({ surname: e.target.value })}
            />
            <TextField
              margin="dense"
              fullWidth
              color="info"
              id="outlined-basic"
              helperText="Enter Your Job"
              variant="filled"
              value={user.job}
              onChange={(e) => setUser({ job: e.target.value })}
            />
            <TextField
              margin="dense"
              fullWidth
              color="info"
              id="outlined-basic"
              helperText="Enter Your Bio"
              variant="filled"
              value={user.bio}
              onChange={(e) => setUser({ bio: e.target.value })}
            />
            <TextField
              margin="dense"
              fullWidth
              color="info"
              id="outlined-basic"
              helperText="Enter Your Address"
              variant="filled"
              value={user.address}
              onChange={(e) => setUser({ address: e.target.value })}
            />

            <DialogActions
              onClick={handleSubmit}
              sx={{
                backgroundColor: "#191A35",
                marginTop: "15px",
              }}
            >
              
                <Button onClick={handleClose}>Continue</Button>
             
            </DialogActions>
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
}
