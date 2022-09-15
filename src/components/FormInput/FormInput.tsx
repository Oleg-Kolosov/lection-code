import { SignInFormValues } from "components/FormSignIn/FormSignIn";
import { SignUpFormValues } from "components/FormSignUp/FormSignUp";
import { HTMLInputTypeAttribute } from "react";
import { Control, Controller } from "react-hook-form";

interface IProps {
  name: keyof SignUpFormValues | keyof SignInFormValues;
  control: Control<SignUpFormValues | SignInFormValues>;
  label: string;
  type: HTMLInputTypeAttribute;
  validationFieldType: keyof typeof validateRules;
}

const validateRules = {
  password: {
    requared: "Password is requared !",
    minLength: {
      value: 6,
      message: "Password must be at least 6 characters",
    },
    maxLength: {
      value: 20,
      message: "Password must be at most 20 characters",
    },
  },
  email: {
    requared: "Email is requared !",
    pattern: {
      value: /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
      message: "Please enter a valid email",
    },
  },
};

export const FormInput = ({ name, control, label, type, validationFieldType }: IProps) => {
  return (
    <label>
      {label}
      <Controller
        name={name}
        control={control}
        rules={validateRules[validationFieldType]}
        render={({ field: { onChange, value } }) => {
          return (
            <input
              type={type}
              value={value}
              onChange={onChange}
              className="form-control"
            />
          );
        }}
      />
    </label>
  );
};
