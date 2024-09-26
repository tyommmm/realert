import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
declare const useStatusDetector: (status: "success" | "error" | "info" | "warning" | "") => {
    color: string;
    icon: IconDefinition;
};
export default useStatusDetector;
