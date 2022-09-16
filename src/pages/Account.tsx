import React from "react";
import { useAppSelector } from "store/hooks/hooks";
import { getUserInfo } from "store/selectors/userSelectors";

export const Account = () => {
  const { email, creationTime } = useAppSelector(getUserInfo);

  return (
    <div>
      <h4>Email: {email}</h4>
      <h5>Account creation time: {new Date(creationTime).toLocaleDateString()}</h5>
    </div>
  );
};
