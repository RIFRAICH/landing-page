import React from "react";
import "./AnimatedBanner.css";
import { motion } from 'framer-motion';
import { ReactComponent as StarIcon } from "../../assets/icon/star.svg";
import PropTypes from "prop-types";

const AnimatedBanner = ({ color = "black", angle = -3 }) => {
  const textColor = color === "black" ? "white" : "black";
  const iconColor = color === "white" ? "#1F2BA6" : "currentColor"; // Bleu pour le logo en mode white
  const borderColor = color === "white" ? "black" : "transparent"; // Bordure noire si la couleur est blanche

  return (
    <div
      className="banner-container"
      style={{
        backgroundColor: color,
        transform: `rotate(${angle}deg)`,
        border: `2px solid ${borderColor}`, // Ajout de la bordure conditionnelle
      }}
    >
      <motion.div
        className="banner-content"
        style={{
          transform: `rotate(${-angle}deg)`,
        }}
        animate={{ x: ['0%', '-200%'] }} // Augmentez la distance pour éviter l'effet de loop
        transition={{
          repeat: Infinity,
          duration: 60, // Augmentez la durée pour une animation plus fluide
          ease: 'linear',
        }}
      >
        <div
          className="banner-text"
          style={{
            color: textColor,
          }}
        >
          {/* Contenu du texte dupliqué */}
          {[...Array(20)].map((_, index) => (
            <span className="banner-text" key={index} style={{ color: textColor }}>
              RIFRAICH{" "}
              <StarIcon
                className="icon"
                style={{
                  fill: iconColor,
                }}
              />{" "}
              Upgrade your style{" "}
              <StarIcon
                className="icon"
                style={{
                  fill: iconColor,
                }}
              />{" "}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

AnimatedBanner.propTypes = {
  color: PropTypes.oneOf(["white", "black"]),
  angle: PropTypes.number,
};

export default AnimatedBanner;