import { FormInput } from "components";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { fetchSignInUser } from "store/feautures/userSlice";
import { useAppDispatch, useAppSelector } from "store/hooks/hooks";
import { getUserInfo } from "store/selectors/userSelectors";

export type SignUpFormValues = {
  email: string;
  password: string;
  name: string;
};

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

export const FormSignUp = () => {
  const { isPendingAuth, error } = useAppSelector(getUserInfo);
  const dispatch = useAppDispatch();

  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<SignUpFormValues>({
    defaultValues: { email: "", password: "", name: "" },
  });

  const onSubmit: SubmitHandler<SignUpFormValues> = (userInfo) => {
    dispatch(fetchSignInUser(userInfo));
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="d-flex flex-column gap-3 p-3 rounded shadow-lg w-100"
      style={{ maxWidth: 400 }}
    >
      <label>
        Email:
        <Controller
          name="email"
          control={control}
          rules={validateRules.email}
          render={({ field: { value, onChange } }) => {
            return (
              <FormInput
                value={value}
                onChange={onChange}
                type="text"
              />
            );
          }}
        />
      </label>
      {errors.email && <p className="text-danger">{errors.email.message}</p>}
      <label>
        Password:
        <Controller
          name="password"
          control={control}
          rules={validateRules.password}
          render={({ field: { value, onChange } }) => {
            return (
              <FormInput
                value={value}
                onChange={onChange}
                type="password"
              />
            );
          }}
        />
      </label>
      {errors.password && <p className="text-danger">{errors.password.message}</p>}

      <p>
        Already have an account? <Link to="/sign-in">Sign In</Link>
      </p>
      {error && <p className="text-danger font-bold">{error}</p>}
      <button
        type="submit"
        className="btn btn-primary"
      >
        Sign Up{" "}
        {isPendingAuth && (
          <div className="spinner-border text-white">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
      </button>
    </form>
  );
};
