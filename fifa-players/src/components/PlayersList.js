import React from "react";
import Player from "./Player";
import players from "../data/players";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

const listVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const PlayersList = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={listVariants}
      className="players-container"
    >
      <Container className="mt-4">
        <h2 className="text-center mb-4">Liste des Joueurs FIFA</h2>
        <Row className="justify-content-center">
          {players.map((player, index) => (
            <Col key={index} md={4} sm={6} xs={12} className="d-flex justify-content-center">
              <Player {...player} />
            </Col>
          ))}
        </Row>
      </Container>
    </motion.div>
  );
};

export default PlayersList;
