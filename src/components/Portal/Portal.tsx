import { ReactNode } from "react";
import ReactDOM from "react-dom";

export enum PortalTarget {
  ROOT = "root",
  MODAL = "modal",
}

interface IPortalProps {
  children: ReactNode;
  target: PortalTarget;
}

export const Portal = ({ children, target }: IPortalProps) => {
  const root = document.getElementById(target);

  return root ? ReactDOM.createPortal(children, root) : null;
};
