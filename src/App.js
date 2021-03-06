import React, { useEffect, useState, useCallback } from "react";
import {
  Navigate,
  Route,
  Routes,
  useNavigate,
  useLocation,
} from "react-router-dom";

import { axiosInstance } from "./config";

import jwtDecode from "jwt-decode";
import { AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "./store/currentUserSlice";
// Import Pages
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
// Import Components
import Navbar from "./components/navbar/Navbar";
import Profile from "./pages/profile/Profile";
import FindFriend from "./pages/findFriend/FindFriend";
import NotFound from "./pages/not found/NotFound";
// import Followers from "./pages/followers/Followers";

const App = () => {
  const { currentUser } = useSelector((state) => state.currentUserSlice);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [userData, setUserData] = useState(null);

  // Get The Current User
  const getUserData = useCallback(async () => {
    if (localStorage.getItem("userToken")) {
      const decodeToken = jwtDecode(localStorage.getItem("userToken"));
      await axiosInstance
        .get(`/users?userId=${decodeToken._id}`)
        .then(({ data }) => dispatch(userAction.currentUser(data)))
        .catch((err) => console.log(err));
      setUserData(decodeToken);
    }
  }, [dispatch]);
  // عشان بيعمل رن للكود من الاول userData = null عشان لما اعمل ريفرش للصفحة هيخلي
  useEffect(() => {
    getUserData();
  }, [getUserData]);

  const logOut = () => {
    localStorage.removeItem("userToken");
    setUserData(null);
    navigate("/", { replace: true });
  };

  const ProtectecRoute = ({ children }) => {
    if (!localStorage.getItem("userToken")) {
      return <Navigate to="/login" />;
    } else {
      return children;
    }
  };

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <>
          <Navbar
            currentUser={currentUser}
            logOut={logOut}
            userData={userData}
          />
          <Routes location={location} key={location.pathname}>
            <Route path="/">
              
                <Route
                  index
                  element={
                    <ProtectecRoute>
                      <Home
                        currentUser={currentUser}
                        logOut={logOut}
                        userData={userData}
                      />
                    </ProtectecRoute>
                  }
                />
              <Route
                path="/profile/:username"
                element={
                  <ProtectecRoute>
                    <Profile currentUser={currentUser} />
                  </ProtectecRoute>
                }
              />
              <Route
                path="find-friend"
                element={<FindFriend currentUser={currentUser} />}
              />
                <Route path="/login" element={<Login getUserData={getUserData} />} />
              
            

              <Route path="register" element={<Register />} />
              <Route path="*" element={<NotFound/>} />
            </Route>
          </Routes>
        </>
      </AnimatePresence>
    </>
  );
};

export default App;
