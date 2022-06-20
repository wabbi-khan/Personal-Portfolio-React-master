import React from "react";

import "./FloatingDiv.css";

const FloatinDiv = ({ img, text1, text2 }) => {
  return (
    // darkMode
    <div className='floatingDiv' style={{ boxShadow: "4px 5px orange" }}>
      <img src={img} alt='' width={100} />
      <span style={{ fontSize: "20px" }}>
        {text1}
        <br />
        {text2}
      </span>
    </div>
  );
};

export default FloatinDiv;
