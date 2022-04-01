import Home from "./pages/Home"
import LoginPage from "./pages/LoginPage"
import MyPosts from "./pages/MyPosts"
import NewPost from "./pages/NewPost"
import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function App() {
  const user = JSON.parse(localStorage.getItem("user")) || [""];
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user") == null) {
      return navigate("/login");
    }
  }, [window.location.href])

  // console.log(user[0])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home user={user[0]} />} />
        <Route path="/myposts" element={<MyPosts user={user[0]} />} />
        <Route path="/newPost" element={<NewPost user={user[0]} />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div >
  )
}