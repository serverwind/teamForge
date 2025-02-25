import { Formik } from "formik";
import { InputForm } from "../ui/InputForm";
import { ConfirmButton } from "../ui/ConfirmButton";
import { CancelButton } from "../ui/CancelButton";
import * as Yup from 'yup';

export const AddPlayerForm = () => {
  return (
    <Formik 
      initialValues={{ name: "", position: "", team: "", height: "", weight: "", birthday: "", number: "" }}
      onSubmit={(values) => {
        console.log(values);
      }}
      validationSchema={Yup.object({
        name: Yup.string().required("Required").max(20, 'Must be 20 characters or less'),
        position: Yup.string().required("Required").max(20, 'Must be 20 characters or less'),
        team: Yup.string().required("Required").max(20, 'Must be 20 characters or less'),
        height: Yup.string().required("Required").max(3, "Must be 3 digits or less"),
        weight: Yup.string().required("Required").max(3, "Must be 3 digits or less"),
        birthday: Yup.string().required("Required").length(4, "Must be exactly 4 digits").matches(/^\d{4}$/, "Must be a 4-digit number"),
        number: Yup.string().required("Required").max(2, "Must be 2 digits or less"),
      })}
    >
      {formik => (
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-6 sm:max-w-[80%]">
          <div className="flex flex-col gap-2">
            <InputForm label="Name" name="name" />
          </div>
          <div className="flex flex-col gap-2">
            <InputForm label="Position" name="position" />
          </div>
          <div className="flex flex-col gap-2">
            <InputForm label="Team" name="team" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
            <InputForm label="Height" name="height" />
            </div>
            <div className="flex flex-col gap-2">
            <InputForm label="Weight" name="weight" />
            </div>
            <div className="flex flex-col gap-2">
            <InputForm label="Birthday" name="birthday" />
            </div>
            <div className="flex flex-col gap-2">
            <InputForm label="Number" name="number" />
            </div>
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
