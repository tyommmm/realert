import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useStatusDetector from '../../hooks/useStatusDetector';
import styles from './Alert.module.css';
import '../../styles.css';

export interface AlertProps {
  heading: string;
  message: string;
  status: 'success' | 'error' | 'info' | 'warning';
}

const Alert: FC<AlertProps> = ({ heading, message, status }) => {
  const { color, icon } = useStatusDetector(status);

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.data}>
          <div className={styles.border} style={{ backgroundColor: color }} />
          <div
            className={styles.icon}
            style={{ backgroundColor: color, paddingLeft: status === 'warning' ? '2.5px' : '' }}>
            <FontAwesomeIcon icon={icon} />
          </div>
          <div className={styles.heading}>{heading}</div>
          <div className={styles.message}>{message}</div>
        </div>
        <div className={styles.actions}>
          <button>OK</button>
        </div>
      </div>
    </div>
  );
};

export default Alert;
