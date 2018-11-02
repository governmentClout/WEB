import React from "react";
import "./uploadModal.css";

const UploadModal = ({ handleClose, show, uploadType }) => {
  const showHideClassName = show
    ? "upload-modal d-block opa-1"
    : "upload-modal d-none opa-0";

  return (
    <div className={showHideClassName}>
      <section className="modal-main text-center">
        <div className="btn-upload-wrapper">
          <button className="btn-upload">Upload your {uploadType}</button>
          <input type="file" name="myFile" />
        </div>
        <div className="d-flex mx-auto">
          <button
            className="btn btn-gclout-dark"
            type="button"
            style={{ marginRight: "10px" }}
            onClick={handleClose}
          >
            Cancel
          </button>
          <button
            className="btn btn-gclout-blue"
            type="submit"
            style={{ marginLeft: "10px" }}
          >
            Save
          </button>
        </div>
      </section>
    </div>
  );
};
export default UploadModal;
