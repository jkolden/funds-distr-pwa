import React from "react";

/* import mobiscroll */
import mobiscroll from "@mobiscroll/react-lite";
import "@mobiscroll/react-lite/dist/css/mobiscroll.min.css";

export default function LocalitySelect({ hourlyEntry, handleChange }) {
  return (
    <React.Fragment>
      <div className="mbsc-form-group-title">Locality</div>
      <mobiscroll.Radio
        name="group"
        value="Central"
        checked={hourlyEntry["locality"] === "Central"}
        onChange={handleChange("locality")}
      >
        Central
      </mobiscroll.Radio>
      <mobiscroll.Radio
        name="group"
        value="St. Louis"
        onChange={handleChange("locality")}
        checked={hourlyEntry["locality"] === "St. Louis"}
      >
        St. Louis
      </mobiscroll.Radio>
      <mobiscroll.Radio
        name="group"
        value="Northeast"
        onChange={handleChange("locality")}
        checked={hourlyEntry["locality"] === "Northeast"}
      >
        Northeast
      </mobiscroll.Radio>
      <mobiscroll.Radio
        name="group"
        value="Southeast"
        onChange={handleChange("locality")}
        checked={hourlyEntry["locality"] === "Southeast"}
      >
        Southeast
      </mobiscroll.Radio>
    </React.Fragment>
  );
}
