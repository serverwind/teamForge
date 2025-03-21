import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { register } from "../../store/authReducer";
import { AuthLink } from "../../components/ui/AuthLink";
import { ConfirmButton } from "../../components/ui/ConfirmButton";
import { InputForm } from "../../components/ui/InputForm";
import { Checkbox } from "../ui/Checkbox";
import { Heading } from "../ui/Heading";

export const SignUpForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik 
      initialValues={{ name: "", login: "", password: "", confirmPassword: "", agreement: false }}
      onSubmit={(values) => {
        dispatch(register({ name: values.name, login: values.login, password: values.password }))
      }}
      validationSchema={Yup.object({
        name: Yup.string().required("Required").max(20, 'Must be 20 characters or less'),
        login: Yup.string().required("Required").max(20, 'Must be 20 characters or less'),
        password: Yup.string().required("Required").max(20, 'Must be 20 characters or less'),
        confirmPassword: Yup.string().required("Required").max(20, 'Must be 20 characters or less').oneOf([Yup.ref('password')], 'Passwords must match'),
        agreement: Yup.boolean().oneOf([true], 'You must accept the agreement'),
      })}
    >
      {formik => (
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-6 min-w-[99%] sm:min-w-[75%]">
          <Heading text="Sign Up" />
          <div className="flex flex-col gap-2">
            <InputForm label="Name" name="name" />
          </div>
          <div className="flex flex-col gap-2">
            <InputForm label="Login" name="login" />
          </div>
          <div className="flex flex-col gap-2">
            <InputForm label="Password" name="password" />
          </div>
          <div className="flex flex-col gap-2">
            <InputForm label="Confirm Password" name="confirmPassword" />
          </div>
          <div className="flex flex-col gap-2">
            <Checkbox label="I accept the agreement" name="agreement" />
          </div>
          <ConfirmButton text="Sign Up" />
          <AuthLink text="Sign In" question="Already a member?" link="/sign-in" />
        </form>
      )}
    </Formik>
  )
}
