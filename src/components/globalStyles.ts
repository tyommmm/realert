import {
  faCheck,
  faXmark,
  faInfo,
  faExclamation,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

interface GlobalStylesTypes {
  colors: {
    success: string;
    error: string;
    info: string;
    warning: string;
  };
  icons: {
    success: IconDefinition;
    error: IconDefinition;
    info: IconDefinition;
    warning: IconDefinition;
  };
}

export const globalStyles: GlobalStylesTypes = {
  colors: {
    success: "#48D761",
    error: "#FE3559",
    info: "#2F85EC",
    warning: "#FDC122",
  },
  icons: {
    success: faCheck,
    error: faXmark,
    info: faInfo,
    warning: faExclamation,
  },
};
