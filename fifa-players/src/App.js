import React from "react";
import PlayersList from "./components/PlayersList";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";

const pageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
};

function App() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={pageVariants}
      className="app-container"
    >
      <h1 className="text-center mt-4">Cartes des Joueurs FIFA</h1>
      <PlayersList />
    </motion.div>
  );
}

export default App;
