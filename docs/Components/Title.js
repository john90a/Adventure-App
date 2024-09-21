import React from "react";

const Title = ({ tittle, subTittle }) => {
  return (
    <div className="section-tittle">
      <h2>
        ABOUT<span>{subTittle}</span>
      </h2>
    </div>
  );
};
export default Title;
