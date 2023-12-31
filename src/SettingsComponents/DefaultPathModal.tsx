import React from "react";

interface DefaultPathModalProps {
  onSave: () => void;
  name: string;
}

export function DefaultPathModal(props: DefaultPathModalProps) {
  return (
    <div
      className="modal fade"
      id="setYourRouteModal"
      tabIndex={-1}
      aria-labelledby="setYourRouteModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-6" id="setYourRouteModalLabel">
              Save{" "}
              <span className="fst-italic save-route-text-color">
                {props.name}{" "}
              </span>
              as your default option?
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div className="modal-footer border-top-0">
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary btn-sm"
              data-bs-dismiss="modal"
              onClick={props.onSave}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DefaultPathModal;
