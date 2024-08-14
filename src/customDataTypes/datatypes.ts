export type ButtonProps ={
    name?: string | any;
    className?:  any;
    variant: "text" | "outlined" | "contained";
    // variant: any;
    icon?: React.ReactNode;
    endIcon?: React.ReactNode;
    loading?: boolean;
    textcolor?: string;
    buttonWidth?: any;
    onClick?: (params?: any) => void;
    hoverBackgroundColor?: string;
    hoverTextColor?: string;
}