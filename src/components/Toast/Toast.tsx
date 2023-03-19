import React, { FC } from "react";
import useStatusDetector from "../../hooks/useStatusDetector";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Toast.module.css";

export interface ToastProps {
  title: string;
  status: "success" | "error" | "info" | "warning";
  text: string;
}

const Toast: FC<ToastProps> = ({ title, text, status }, ...props) => {
  const { color, icon } = useStatusDetector(status);

  return (
    <div className={styles.toastWrapper}>
      <div className={styles.toastBorder} style={{ backgroundColor: color }} />
      <div className={styles.toastData}>
        <div className={styles.toastIcon} style={{ backgroundColor: color }}>
          <FontAwesomeIcon fontSize="30px" icon={icon} />
        </div>
        <div className={styles.toastInfo}>
          <div className={styles.toastHeader}>{title}</div>
          <div className={styles.toastText}>{text}</div>
        </div>
      </div>
    </div>
  );
};

export default Toast;
