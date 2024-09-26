import { FC } from 'react';
import '../../styles.css';
export interface AlertProps {
    heading: string;
    message: string;
    status: 'success' | 'error' | 'info' | 'warning';
}
declare const Alert: FC<AlertProps>;
export default Alert;
