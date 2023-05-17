import React from "react";
import "./styles.css";

const Titlebar: React.FC = () => {
  return <div className="titlebar">{document.title}</div>;
};

export default Titlebar;
