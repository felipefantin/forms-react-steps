import type { CSSProperties } from "react";

type InputProps = {
  label: string;
  placeholder: string;
  inputStyle?: CSSProperties;
};

function Input({ label, placeholder }: InputProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <label>{label}</label>
      <input placeholder={placeholder} style={{ padding: 8 }} />
    </div>
  );
}

export default Input;
