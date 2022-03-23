import Register from "../components/Register";
import Login from "../components/Login";
import { useState } from "react";

export default function Home() {
  // Variable
  const [login, setLogin] = useState(true)

  // Function
  function handleTransition() {
    setLogin(prevLogin => !prevLogin)
  }

  return (
    login ?
      <Login handleTransition={handleTransition} />
      :
      <Register handleTransition={handleTransition} />
  )
}