import { Portal, PortalTarget } from "components/Portal/Portal";

interface IProps {
  toggleModal: (value: boolean) => void;
}

export const Modal = ({ toggleModal }: IProps) => {
  return (
    <Portal target={PortalTarget.MODAL}>
      <div
        className="modal d-flex"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        <div className="modal-dialog d-flex align-items-center">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">You successfully authenticated</h5>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => toggleModal(false)}
              >
                Got it!
              </button>
            </div>
          </div>
        </div>
      </div>
    </Portal>
  );
};
