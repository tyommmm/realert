import React, { FC, ReactElement } from 'react';

export interface AlertProps {
  children: ReactElement;
  color: string;
  label: string;
}

const Alert: FC<AlertProps> = ({ children, color, label }, ...props) => {
  return (
    <>
      <div {...props} style={{ color }}>
        <h1>{children}</h1>
        <h2>{label}</h2>
      </div>
    </>
  );
};

export default Alert;
