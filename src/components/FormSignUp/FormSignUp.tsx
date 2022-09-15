import { FormInput } from "components";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { getFirebaseMessage } from "utils";

export type SignUpFormValues = {
  email: string;
  password: string;
};

export const FormSignUp = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const {
    handleSubmit,
    reset,
    formState: { errors },
    control,
  } = useForm<SignUpFormValues>();

  const onSubmit: SubmitHandler<SignUpFormValues> = ({ email, password }) => {
    setIsLoading(true);
    setErrorMessage(null);
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((_) => {
        navigate("/");
      })
      .catch((err) => {
        setErrorMessage(getFirebaseMessage(err.code));
      })
      .finally(() => {
        setIsLoading(false);
      });
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="d-flex flex-column gap-3 p-3 rounded shadow-lg w-100"
      style={{ maxWidth: 400 }}
    >
      <FormInput
        name="email"
        control={control}
        label="Email"
        type="text"
        validationFieldType="email"
      />
      {errors.email && <p className="text-danger">{errors.email.message}</p>}

      <FormInput
        name="password"
        control={control}
        label="Password"
        type="password"
        validationFieldType="password"
      />
      {errors.password && <p className="text-danger">{errors.password.message}</p>}

      <p>
        Already have an account? <Link to="/sign-in">Sign In</Link>
      </p>
      {errorMessage && <p className="text-danger font-bold">{errorMessage}</p>}
      <button
        type="submit"
        className="btn btn-primary"
      >
        Sign Up{" "}
        {isLoading && (
          <div className="spinner-border text-white">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
      </button>
    </form>
  );
};
