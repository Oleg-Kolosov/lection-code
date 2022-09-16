import { ChangeEvent, HTMLInputTypeAttribute } from "react";

interface IProps {
  value: string;
  type: HTMLInputTypeAttribute;
  onChange: (value: ChangeEvent<HTMLInputElement>) => void;
}

export const FormInput = ({ value, type, onChange }: IProps) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      className="form-control"
    />
  );
};
