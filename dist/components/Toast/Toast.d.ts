import { FC } from "react";
import "../../styles.css";
export interface ToastProps {
    heading: string;
    message: string;
    status: "success" | "error" | "info" | "warning";
    position: "topL" | "topR" | "bottomL" | "bottomR";
    onClose: () => void;
    duration: number;
}
declare const Toast: FC<ToastProps>;
export default Toast;
