import React, { FC } from 'react';
import useStatusDetector from '../../hooks/useStatusDetector';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Toast.module.css';

export interface ToastProps {
  heading: string;
  message: string;
  status: 'success' | 'error' | 'info' | 'warning';
}

const Toast: FC<ToastProps> = ({ heading, message, status }, ...props) => {
  const { color, icon } = useStatusDetector(status);

  return (
    <div className={styles.toastWrapper}>
      <div className={styles.toastBorder} style={{ backgroundColor: color }} />
      <div className={styles.toastData}>
        <div className={styles.toastIcon} style={{ backgroundColor: color }}>
          <FontAwesomeIcon fontSize="30px" icon={icon} />
        </div>
        <div className={styles.toastInfo}>
          <div className={styles.toastHeading}>{heading}</div>
          <div className={styles.toastMessage}>{message}</div>
        </div>
      </div>
    </div>
  );
};

export default Toast;
