import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

export function SkeletonPost() {
  return (
    <>
      <Box
        sx={{
          width: "773px",
          height: "210px",
          position: "relative",
          border: "1px solid #404040",
          borderRadius: "5px",
          marginLeft: "120px",
          backgroundColor: "grey.900",
          marginBottom: "1.5rem",
        }}
      >
        <Skeleton
          sx={{ margin: " 15px 0 0 15px" }}
          variant="text"
          width={200}
          height={40}
        />
        <Skeleton
          sx={{ marginLeft: "15px" }}
          variant="text"
          width={100}
          height={25}
        />
        <Skeleton
          sx={{
            position: "absolute",
            top: "-18px",
            right: "-15px",
            margin: "30px",
          }}
          variant="circular"
          width={60}
          height={60}
        />
        <Skeleton
          sx={{ marginTop: "20px", marginLeft: "15px" }}
          variant="rectangular"
          width={500}
          height={88}
        />
      </Box>
      <Box
        sx={{
          width: "773px",
          height: "210px",
          position: "relative",
          border: "1px solid #404040",
          borderRadius: "5px",
          marginLeft: "120px",
          backgroundColor: "grey.900",
          marginBottom: "1.5rem",
        }}
      >
        <Skeleton
          sx={{ margin: " 15px 0 0 15px" }}
          variant="text"
          width={200}
          height={40}
        />
        <Skeleton
          sx={{ marginLeft: "15px" }}
          variant="text"
          width={100}
          height={25}
        />
        <Skeleton
          sx={{
            position: "absolute",
            top: "-18px",
            right: "-15px",
            margin: "30px",
          }}
          variant="circular"
          width={60}
          height={60}
        />
        <Skeleton
          sx={{ marginTop: "20px", marginLeft: "15px" }}
          variant="rectangular"
          width={500}
          height={88}
        />
      </Box>
      <Box
        sx={{
          width: "773px",
          height: "210px",
          position: "relative",
          border: "1px solid #404040",
          borderRadius: "5px",
          marginLeft: "120px",
          backgroundColor: "grey.900",
          marginBottom: "1.5rem",
        }}
      >
        <Skeleton
          sx={{ margin: " 15px 0 0 15px" }}
          variant="text"
          width={200}
          height={40}
        />
        <Skeleton
          sx={{ marginLeft: "15px" }}
          variant="text"
          width={100}
          height={25}
        />
        <Skeleton
          sx={{
            position: "absolute",
            top: "-18px",
            right: "-15px",
            margin: "30px",
          }}
          variant="circular"
          width={60}
          height={60}
        />
        <Skeleton
          sx={{ marginTop: "20px", marginLeft: "15px" }}
          variant="rectangular"
          width={500}
          height={88}
        />
      </Box>
    </>
  );
}

export function SkeletonFriend() {
  return (
    <>
      <Box
        spacing={1}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "start",
          alignItems: "center",
          margin: "30px 0 0px 30px",
        }}
      >
        <Skeleton variant="circular" width={60} height={60} />
        <Skeleton
          variant="text"
          sx={{
            marginLeft: "10px",
            backgroundColor: "grey.900",
          }}
          width={190}
          height={40}
        />
      </Box>
      <Box
        spacing={1}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "start",
          alignItems: "center",
          margin: "30px 0 0px 30px",
        }}
      >
        <Skeleton variant="circular" width={60} height={60} />
        <Skeleton
          variant="text"
          sx={{
            marginLeft: "10px",
            backgroundColor: "grey.900",
          }}
          width={190}
          height={40}
        />
      </Box>
      <Box
        spacing={1}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "start",
          alignItems: "center",
          margin: "30px 0 0px 30px",
        }}
      >
        <Skeleton variant="circular" width={60} height={60} />
        <Skeleton
          variant="text"
          sx={{
            marginLeft: "10px",
            backgroundColor: "grey.900",
          }}
          width={190}
          height={40}
        />
      </Box>
      <Box
        spacing={1}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "start",
          alignItems: "center",
          margin: "30px 0 0px 30px",
        }}
      >
        <Skeleton variant="circular" width={60} height={60} />
        <Skeleton
          variant="text"
          sx={{
            marginLeft: "10px",
            backgroundColor: "grey.900",
          }}
          width={190}
          height={40}
        />
      </Box>
      <Box
        spacing={1}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "start",
          alignItems: "center",
          margin: "30px 0 0px 30px",
        }}
      >
        <Skeleton variant="circular" width={60} height={60} />
        <Skeleton
          variant="text"
          sx={{
            marginLeft: "10px",
            backgroundColor: "grey.900",
          }}
          width={190}
          height={40}
        />
      </Box>
    </>
  );
}
