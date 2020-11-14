import React from "react";
import "./index.scss";

export default function Input({ ...props }) {
  return (
    <div className="app_input_container">
      <input {...props} />
    </div>
  );
}
