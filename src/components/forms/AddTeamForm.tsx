import { Formik } from "formik";
import { InputForm } from "../ui/InputForm";
import { ConfirmButton } from "../ui/ConfirmButton";
import { CancelButton } from "../ui/CancelButton";
import * as Yup from 'yup';

export const AddTeamForm = () => {
  return (
    <Formik 
      initialValues={{ name: "", division: "", conference: "", year: "" }}
      onSubmit={(values) => {
        console.log(values);
      }}
      validationSchema={Yup.object({
        name: Yup.string().required("Required").max(20, 'Must be 20 characters or less'),
        division: Yup.string().required("Required").max(20, 'Must be 20 characters or less'),
        conference: Yup.string().required("Required").max(20, 'Must be 20 characters or less'),
        year: Yup.string().required("Required").length(4, "Must be exactly 4 digits").matches(/^\d{4}$/, "Must be a 4-digit number"),
      })}
    >
      {formik => (
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-6 sm:max-w-[80%]">
          <div className="flex flex-col gap-2">
            <InputForm label="Name" name="name" />
          </div>
          <div className="flex flex-col gap-2">
            <InputForm label="Division" name="division" />
          </div>
          <div className="flex flex-col gap-2">
            <InputForm label="Conference" name="conference" />
          </div>
          <div className="flex flex-col gap-2">
            <InputForm label="Year of foundation" name="year" />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <CancelButton text="Cancel" />
            <ConfirmButton text="Save" />
          </div>
        </form>
      )}
    </Formik>
  )
}
