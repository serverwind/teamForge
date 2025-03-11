import { ErrorMessage, Field } from "formik";

interface InputFormProps {
  label: string | null;
  name: string;
}

export const InputForm = ({ label, name }: InputFormProps) => {
  return (
    <>
      <label className="text-grey text-sm">{label}</label>
      <Field className="bg-lightestGrey1 h-10 rounded px-3 py-2 text-sm hover:bg-lightestGrey transition duration-300 focus:shadow-outline focus:outline-none" name={name} type="text" />
      <ErrorMessage name={name} component="div" className="text-xs text-lightRed" />
    </>
  );
};
