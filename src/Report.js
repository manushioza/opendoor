import * as React from "react";
import { GeolocateControl } from "react-map-gl";

function Report() {
  return (
    <div class="modal-dialog modal-dialog-centered">
      <form>
        <select class="form-select" aria-label="Select Incident Type">
          <option selected></option>
          <option value="Fire">Fire</option>
          <option value="Weather">Weather</option>
          <option value="Shooting">Shooting</option>
          <option value="Murder">Murder</option>
          <option value="Disturbance">Disturbance</option>
          <option value="Other">Other</option>
        </select>
        <GeolocateControl />
      </form>
    </div>
  );
}

export default Report;
