import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    isDisable ?: boolean;
    title ?: string ;
    buttonStyle? : string ;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    rightIcon?: string ;
    btnType?:"button" | "submit";
    textStyles?: string;
}