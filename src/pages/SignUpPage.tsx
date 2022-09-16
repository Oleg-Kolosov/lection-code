import { Modal } from "components/Modal/Modal";
import { useState } from "react";
import { FormSignUp } from "../components/FormSignUp/FormSignUp";

export const SignUpPage = () => {
  const [isOpen, toggleModal] = useState(false);

  return (
    <div className="d-flex flex-column align-items-center gap-5">
      <h1>Sign Up free with email 👻</h1>
      <FormSignUp toggleModal={toggleModal} />
      {isOpen && <Modal toggleModal={toggleModal} />}
    </div>
  );
};
