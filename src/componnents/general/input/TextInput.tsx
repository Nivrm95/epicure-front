import React, { useState } from "react";
import "./TextInput.css";

interface ITextInput {
  label: string;
  name?: string;
  type?: string;
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: React.FC<ITextInput> = ({ label, type = "test", name, value, onChange }) => {

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    onChange && onChange(e); 
  }

  return (
    <div className="input-container">
      <input type={type} value={value} onChange={handleChange} name={name} />
      <label className={name || value  ? "filled" : ""}>{label}</label>
    </div>
  );
};
export default TextInput;