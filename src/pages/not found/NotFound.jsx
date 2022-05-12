import React from "react";
import { useNavigate } from "react-router";
import "./notfound.css";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="notfound">
      <img
        src="https://adramelech-social-media-app.netlify.app/static/media/not-found.abdd0afe.svg"
        alt="not-found"
      />
      <h1>Not Found</h1>
      <button onClick={() => navigate("/")}>Go Home</button>
    </div>
  );
};

export default NotFound;
