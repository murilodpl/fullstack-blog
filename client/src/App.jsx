import Home from "./pages/Home"
import LoginPage from "./pages/LoginPage"
import MyPosts from "./pages/MyPosts"
import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function App() {
  const [user, setUser] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user") == null) {
      return navigate("/login");
    } else {
      setUser(JSON.parse(localStorage.getItem("user"))[0])
    }
  }, [window.location.href]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/myposts" element={<MyPosts user={user} />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div >
  )
}