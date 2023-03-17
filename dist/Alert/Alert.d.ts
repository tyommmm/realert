import { FC, ReactElement } from 'react';
export interface AlertProps {
    children: ReactElement;
    color: string;
}
declare const Alert: FC<AlertProps>;
export default Alert;
