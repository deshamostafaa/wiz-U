import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";

export function SkeletonPost() {
  return (
    <>
      <Box
        sx={{
          width: "660px",
          height: "185px",
          position: "relative",
          border: "1px solid #212121",
          borderRadius: "5px",
          marginLeft: "110px",
        }}
      >
        <Skeleton
          sx={{ marginLeft: "15px" }}
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
          width: "660px",
          height: "185px",
          position: "relative",
          border: "1px solid #212121",
          borderRadius: "5px",
          margin: "30px 0",
          marginLeft: "110px",
        }}
      >
        <Skeleton
          sx={{ marginLeft: "15px" }}
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
          width: "660px",
          height: "185px",
          position: "relative",
          border: "1px solid #212121",
          borderRadius: "5px",
          marginLeft: "110px",
        }}
      >
        <Skeleton
          sx={{ marginLeft: "15px" }}
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

export function SkeletonUser() {
  return (
    <Box
      spacing={1}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Skeleton variant="circular" width={190} height={190} />
      <Box sx={{ alignSelf: "start", marginLeft: "3rem" }}>
        <Skeleton
          variant="text"
          sx={{ marginTop: "30px" }}
          width={280}
          height={50}
        />
        <Skeleton
          variant="text"
          sx={{ marginTop: "-5px" }}
          width={200}
          height={30}
        />
        <Skeleton
          variant="text"
          sx={{ marginTop: "15px" }}
          width={200}
          height={30}
        />
        <Skeleton
          variant="text"
          sx={{ marginTop: "15px" }}
          width={200}
          height={30}
        />
        <Skeleton
          variant="text"
          sx={{ marginTop: "15px" }}
          width={200}
          height={50}
        />
        <Skeleton
          variant="text"
          sx={{ marginTop: "15px" }}
          width={250}
          height={30}
        />
        <Skeleton
          variant="text"
          sx={{ marginTop: "15px" }}
          width={100}
          height={30}
        />
      </Box>
    </Box>
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
          margin: "10px 0 0px 20px",
        }}
      >
        <Skeleton variant="circular" width={70} height={70} />
        <Skeleton
          variant="text"
          sx={{ marginLeft: "10px" }}
          width={180}
          height={35}
        />
      </Box>
      <Box
        spacing={1}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "start",
          alignItems: "center",
          margin: "10px 0 0px 20px",
        }}
      >
        <Skeleton variant="circular" width={70} height={70} />
        <Skeleton
          variant="text"
          sx={{ marginLeft: "10px" }}
          width={180}
          height={35}
        />
      </Box>
      <Box
        spacing={1}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "start",
          alignItems: "center",
          margin: "10px 0 0px 20px",
        }}
      >
        <Skeleton variant="circular" width={70} height={70} />
        <Skeleton
          variant="text"
          sx={{ marginLeft: "10px" }}
          width={180}
          height={35}
        />
      </Box>
    </>
  );
}
