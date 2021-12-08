import { ErrorMessage, useField } from "formik";

const SelectField = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="pb-3 mb-2">
      <label htmlFor={field.name} className="mb-2">
        {label}
      </label>
      <select
        className={`form-select shadow-none ${
          meta.touched && meta.error && "is-invalid"
        }`}
        {...field}
        {...props}
      >
        <option value="">Seleccione un rol</option>
        {props.options.map((option, i) => (
          <option key={i} value={option}>{option}</option>
        ))}
      </select>
      <ErrorMessage
        component="div"
        name={field.name}
        className={`text-danger`}
      />
    </div>
  );
};

export default SelectField;
