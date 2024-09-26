import React, { useState } from "react";
import { PwdFiledsFormikInterface, PwdFiledsInterface } from "./types";
import { ErrorMessage, Field, Formik, Form } from "formik";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const PwdFields: React.FC<PwdFiledsInterface> = ({ handleChangePwd }) => {
  const initialValues: PwdFiledsFormikInterface = {
    password: "",
    cnfPassword: "",
  };
  const [hide, setHide] = useState({ password: true, cnfPassword: true });
  const handlevalidate = (values: PwdFiledsFormikInterface) => {
    const errors: PwdFiledsFormikInterface = {} as PwdFiledsFormikInterface;
    const { password, cnfPassword } = values;
    if (!password) errors.password = "Required";
    else if (password.length < 6) errors.password = "Mimimum Six Characters";
    if (!cnfPassword) errors.cnfPassword = "Required";
    else if (password !== cnfPassword)
      errors.cnfPassword = "Password Not Matching";
    return errors;
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        validate={(values) => handlevalidate(values)}
        onSubmit={(values) => {
          console.log("SUB1::::", values);
          handleChangePwd(values);
        }}
      >
        <Form>
          <div className="mb-[0.8rem] relative">
            <Field
              type={hide.password ? "password" : "text"}
              name="password"
              placeholder="Password"
              className="w-full bg-dark-grey text-slate-100/30 px-[10px] py-[15px] border-[1px] border-slate-100/30 rounded-md"
            />
            <ErrorMessage
              name="password"
              component={"div"}
              className="text-center text-error-color"
            />
            <span
              className="absolute text-slate-100/30 right-[3px] top-[16px]"
              onClick={() => setHide({ ...hide, password: !hide.password })}
            >
              {hide.password ? (
                <VisibilityOffIcon fontSize="medium" />
              ) : (
                <VisibilityIcon fontSize="medium" />
              )}
            </span>
          </div>
          <div className="mb-[0.8rem] relative">
            <Field
              type={hide.cnfPassword ? "password" : "text"}
              name="cnfPassword"
              placeholder="Confirm Password"
              className="w-full bg-dark-grey text-slate-100/30 px-[10px] py-[15px] border-[1px] border-slate-100/30 rounded-md"
            />
            <ErrorMessage
              name="cnfPassword"
              component={"div"}
              className="text-center text-error-color"
            />
            <span
              className="absolute text-slate-100/30 right-[3px] top-[16px]"
              onClick={() =>
                setHide({ ...hide, cnfPassword: !hide.cnfPassword })
              }
            >
              {hide.cnfPassword ? (
                <VisibilityOffIcon fontSize="medium" />
              ) : (
                <VisibilityIcon fontSize="medium" />
              )}
            </span>
          </div>
          <button
            type="submit"
            className="w-full mb-[0.8rem] px-[10px] py-[8px] border-[1px] border-slate-100/30 rounded-md text-white bg-header-color"
          >
            Change Password
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default PwdFields;
