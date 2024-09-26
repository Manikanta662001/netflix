export interface ForgotVal {
  email: string;
}

export interface PwdFiledsFormikInterface {
  password: string;
  cnfPassword: string;
}
export interface PwdFiledsInterface {
  handleChangePwd: (vals: PwdFiledsFormikInterface) => void;
}
