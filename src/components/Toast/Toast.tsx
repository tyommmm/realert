import React, { FC } from "react";
import useStatusDetector from "../../hooks/useStatusDetector";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Toast.module.css";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "../../styles.css";

export interface ToastProps {
  heading: string;
  message: string;
  status: "success" | "error" | "info" | "warning";
  position: "topL" | "topR" | "bottomL" | "bottomR";
  onClose: () => void;
  duration: number;
}

const Toast: FC<ToastProps> = ({
  heading,
  message,
  status,
  position,
  onClose,
  duration,
}) => {
  const { color, icon } = useStatusDetector(status);

  React.useEffect(() => {
    setTimeout(() => {}, duration);
  }, []);

  return (
    <div className={`${styles.wrapper} ${styles[position]}`}>
      <div className={styles.border} style={{ backgroundColor: color }} />
      <div className={styles.data}>
        <div className={styles.icon} style={{ backgroundColor: color }}>
          <FontAwesomeIcon fontSize="30px" icon={icon} />
        </div>
        <div className={styles.info}>
          <div className={styles.heading}>{heading}</div>
          <div className={styles.message}>{message}</div>
        </div>
      </div>
      <div className={styles.close} onClick={onClose}>
        <FontAwesomeIcon color="gray" fontSize="15px" icon={faXmark} />
      </div>
    </div>
  );
};

export default Toast;
