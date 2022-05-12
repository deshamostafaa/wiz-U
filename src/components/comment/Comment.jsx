import React from 'react'
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

const Comment = ({ comment }) => {
  dayjs.extend(relativeTime);

  return (
    <div
      key={comment?._id}
      className=" p-2 mb-3 content-comment position-relative bg-transparent"
    >
      <div className=" w-100">
        <Link style={{ textDecoration: "none" }} to={`/`}>
          <h5 className="m-2">
            {comment?.userId.name + " " + comment?.userId.surname}
          </h5>
        </Link>
        <p className="ps-2 mt-1 mb-2 fs-6 lead">{comment?.comment}</p>
      </div>

      <p className="time ms-1 mt-2 ">{dayjs(comment?.createdAt).fromNow()}</p>
    </div>
  );
};
export default Comment