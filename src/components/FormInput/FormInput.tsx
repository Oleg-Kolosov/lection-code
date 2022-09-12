import { Controller } from "react-hook-form";

interface IProps {
  name: string;
  control: any;
}

export const FormInput = ({ name, control }: IProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => {
        return <input value={value} onChange={onChange} className="form-control" />;
      }}
    />
  );
};
