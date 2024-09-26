import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
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
export declare const globalStyles: GlobalStylesTypes;
export {};
