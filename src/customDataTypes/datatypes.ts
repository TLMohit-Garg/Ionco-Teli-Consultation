export type ButtonProps = {
  name?: string | any;
  className?: any;
  variant?: "text" | "outlined" | "contained";
  icon?: React.ReactNode;
  endIcon?: React.ReactNode;
  loading?: boolean;
  textcolor?: string;
  buttonWidth?: any;
  onClick?: (params?: any) => void;
  hoverBackgroundColor?: string;
  hoverTextColor?: string;
  type?: any;
};


interface SelectChangeEvent {
  target: {
    value: any;
  };
}
export type customSelectProps = {
  error?: boolean;
  errorCondition?: boolean;
  onSubmit?: () => void;
  control?: any;
  name?: any;
  form?: any;
  selectData?: any;
  placeHolder?: string;
  sx?: any;
  className?: string;
  selectFieldCss?: any;
  onChange?: (event: SelectChangeEvent, child?: React.ReactElement) => void;
  fullWidth?: boolean;
};
export interface Address {
  city: string;
  state: string;
}

export interface Hobby {
  name: string;
}

export interface FormData {
  name: string;
  price: number;
  quantity: number;
  // age: number;
  // gender: string;
  // address: Address;
  // hobbies: Hobby[];
  // startDate: Date;
  // subscribe: boolean;
  // referral: string;
}

export type DoctorPopoverProps = {
  open: boolean;
  anchorEl: HTMLButtonElement | null;
  handleClose: () => void;
};

export type PatientPopoverProps = {
  open: boolean;
  anchorEl: HTMLButtonElement | null;
  handleClose: () => void;
};
