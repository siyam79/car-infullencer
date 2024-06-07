import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    isDisable?: boolean;
    title?: string;
    buttonStyle?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    rightIcon?: string;
    btnType?: "button" | "submit";
    textStyles?: string;
};

export interface SearchMenuFecturerProps {
    manufacturer?: string;
    setManuFacturer?: (manufacturer: string) => void;

}


export interface CarsProps {
    city_mpg?: number,
    class?:string,
    combination_mpg?: number,
    cylinders?: number,
    displacement?: number,
    drive?: string,
    fuel_type?: string,
    highway_mpg?: number,
    make?: string,
    model?: string,
    transmission?: string,
    year?: number
}