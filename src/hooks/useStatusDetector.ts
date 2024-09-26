import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { globalStyles } from "../components/globalStyles";

const useStatusDetector = (
  status: "success" | "error" | "info" | "warning" | ""
): { color: string; icon: IconDefinition } => {
  switch (status) {
    case "success":
      return {
        color: globalStyles.colors.success,
        icon: globalStyles.icons.success,
      };
    case "error":
      return {
        color: globalStyles.colors.error,
        icon: globalStyles.icons.error,
      };
    case "info":
      return { color: globalStyles.colors.info, icon: globalStyles.icons.info };
    case "warning":
      return {
        color: globalStyles.colors.warning,
        icon: globalStyles.icons.warning,
      };
    default:
      return {
        color: globalStyles.colors.error,
        icon: globalStyles.icons.error,
      };
  }
};

export default useStatusDetector;
