import { ErrorMessage, Field } from "formik";

interface CheckboxProps {
  label: string;
  name: string;
}

export const Checkbox = ({ label, name }: CheckboxProps) => {
  return (
    <>
      <label className="text-grey text-sm">
        <Field name={name} type="checkbox" />
        <span className="ml-2">{label}</span>
      </label>
      <ErrorMessage name={name} component="div" className="text-xs text-lightRed" />
    </>
  );
};
