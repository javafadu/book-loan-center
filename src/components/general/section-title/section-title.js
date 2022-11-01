import React from "react";
import "./section-title.scss";
const SectionTitle = ({ title }) => {
  return (
    <div className="section-title">
      <h2>{title}</h2>
    </div>
  );
};

export default SectionTitle;
