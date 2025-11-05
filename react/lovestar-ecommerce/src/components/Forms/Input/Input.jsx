import stylesInput from "./input.module.css";

const FormInput = ({ label, id, error, required = false, ...props }) => {
  return (
    <div className={stylesInput.input}>
      <label htmlFor={id}>{label}</label>
      <input id={id} required={required} {...props} />
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default FormInput;