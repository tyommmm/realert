import React, { FC, ReactElement } from "react";
import "../../styles.css";

export interface AlertProps {
  children: ReactElement;
  color: string;
  label: string;
}
const wrapperStyles: React.CSSProperties = {
  width: "30px",
  height: "30px",
};

const Alert: FC<AlertProps> = ({ children, color, label }, ...props) => {
  return (
    <div className={`absoluteCenter`} style={{ width: "30px", height: "30px" }}>
      <div
        {...props}
        style={{
          color,
        }}
      >
        <h1>{children}</h1>
        <h2>{label}</h2>
      </div>
    </div>
  );
};

export default Alert;
