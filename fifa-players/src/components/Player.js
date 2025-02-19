import React from "react";
import { Card } from "react-bootstrap";
import { motion } from "framer-motion";

const cardStyle = {
  width: "18rem",
  margin: "10px",
  textAlign: "center",
  borderRadius: "10px",
  overflow: "hidden",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease"
};

const Player = ({ name, team, nationality, jerseyNumber, age, image }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)" }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card style={cardStyle}>
        <Card.Img variant="top" src={image} alt={name} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <strong>Équipe:</strong> {team} <br />
            <strong>Nationalité:</strong> {nationality} <br />
            <strong>Numéro:</strong> {jerseyNumber} <br />
            <strong>Âge:</strong> {age} ans
          </Card.Text>
        </Card.Body>
      </Card>
    </motion.div>
  );
};

Player.defaultProps = {
  name: "Joueur inconnu",
  team: "Équipe inconnue",
  nationality: "Nationalité inconnue",
  jerseyNumber: 0,
  age: "Âge inconnu",
  image: "https://via.placeholder.com/150"
};

export default Player;
