import { Formik } from "formik";
import * as Yup from "yup";
import { InputForm } from "../../components/ui/InputForm";

export const Search = () => {
  return (
    <Formik 
      initialValues={{ search: "" }}
      handleSubmit={(values) => {
        console.log(values);
      }}
      validationSchema={Yup.object({
        search: Yup.string().min(3, 'At least 3 characters'),
      })}
    >
      {formik => (
    <div>
      <InputForm label="Search" name="search" />
      <button>Add +</button>
    </div>
      )}
    </Formik>
  )
}
