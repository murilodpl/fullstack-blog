import Register from "../components/Register";
import Login from "../components/Login";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"

export default function Home() {
  // Variable
  const [login, setLogin] = useState(true)
  const variantsBg = {
    login: { backgroundColor: '#f2f2f2', scaleY: 1 },
    register: { backgroundColor: '#1a1b1e', scaleY: 1 },
  }

  // Function
  function handleTransition() {
    setLogin(prevLogin => !prevLogin)
  }

  return (
    <div className="h-full w-full relative">
      <AnimatePresence exitBeforeEnter>
        <motion.div className="home absolute top-0 left-0 -z-10"
          key={login}
          style={{ transformOrigin: 'top' }}
          variants={variantsBg}
          initial={{ scaleY: 0 }}
          animate={login ? 'login' : 'register'}
          transition={{ type: "tween", stiffness: 100, duration: .5 }}
        />
      </AnimatePresence>

      <motion.div className="home"
        key={login}
        initial={{ opacity: 0, delay: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ type: "Inertia", stiffness: 100, duration: .75 }}
      >
        {login ?
          <Login handleTransition={handleTransition} />
          :
          <Register handleTransition={handleTransition} />}
      </motion.div>
    </div>
  )
}