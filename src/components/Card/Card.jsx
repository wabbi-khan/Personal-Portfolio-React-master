import React from "react";
import "./Card.css";

const Card = ({ emoji, heading, detail, color }) => {
  return (
    <div
      className='card'
      style={{ borderColor: { color }, width: "300px", height: "auto" }}
    >
      <img src={emoji} alt='' width={80} /> <br />
      <span>{heading}</span>
      <span>{detail}</span>
      {/* <button className='c-button'>LEARN MORE</button> */}
    </div>
  );
};

export default Card;
