import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useStatusDetector from '../../hooks/useStatusDetector';
import styles from './Alert.module.css';

export interface AlertProps {
  heading: string;
  message: string;
  status: 'success' | 'error' | 'info' | 'warning';
}

const Alert: FC<AlertProps> = ({ heading, message, status }, ...props) => {
  const { color, icon } = useStatusDetector(status);

  return (
    <div className={styles.alertRoot}>
      <div className={styles.alertWrapper}>
        <div className={styles.alertData}>
          <div className={styles.alertBorder} style={{ backgroundColor: color }} />
          <div className={styles.alertIcon} style={{ backgroundColor: color }}>
            <FontAwesomeIcon icon={icon} />
          </div>
          <div className={styles.alertHeading}>{heading}</div>
          <div className={styles.alertMessage}>{message}</div>
        </div>
        <div className={styles.alertActions}>
          <button>OK</button>
        </div>
      </div>
    </div>
  );
};

export default Alert;
