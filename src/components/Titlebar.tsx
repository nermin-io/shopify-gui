import React from "react";
import styles from "./Titlebar.module.scss";

const Titlebar: React.FC = () => {
  return <div className={styles.titlebar}>{document.title}</div>;
};

export default Titlebar;
