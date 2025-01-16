import * as React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Sidebar.css";

function Sidebar() {
  function showForm() {}

  return (
    <div className="sidebar">
      <h3 className="title">OPEN DOOR </h3>
      <p>
        To share a new incident, click the button below and fill out the details
      </p>
      <div className="newIncident">
        <button
          type="button"
          class="btn btn-outline-dark btn-sm"
          data-bs-toggle="modal"
          onClick={showForm}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default React.memo(Sidebar);
