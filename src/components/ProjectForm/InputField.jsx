import { ErrorMessage, useField } from "formik";

const InputField = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="pb-3 mb-2">
      <label htmlFor={field.name} className={`mb-2`}>
        {label}
      </label>
      <input
        className={`form-control shadow-none ${
          meta.touched && meta.error && "is-invalid"
        }`}
        autoComplete="off"
        {...field}
        {...props}
      />
      <ErrorMessage
        component="div"
        name={field.name}
        className={`text-danger`}
      />
    </div>
  );
};

export default InputField;