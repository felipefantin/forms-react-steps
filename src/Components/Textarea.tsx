type TextareaProps = {
  label: string;
  placeholder: string;
  ehExpandivel: boolean;
};

function Textarea({ label, placeholder, ehExpandivel }: TextareaProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <label>{label}</label>
      <textarea
        placeholder={placeholder}
        style={{ resize: ehExpandivel ? "both" : "none" }}
        rows={8}
      />
    </div>
  );
}

export default Textarea;