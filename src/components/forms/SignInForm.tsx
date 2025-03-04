import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector  } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import { login } from "../../store/authReducer"
import { AuthLink } from "../../components/ui/AuthLink";
import { ConfirmButton } from "../../components/ui/ConfirmButton";
import { InputForm } from "../../components/ui/InputForm";
import { Heading } from "../ui/Heading";

export const SignInForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector(state => state.auth.isAuth);

  useEffect(() => {
    if (isAuth) {
      navigate('/teams');
    }
  })

  return (
    <Formik 
      initialValues={{ login: "", password: "" }}
      onSubmit={(values) => {
        dispatch(login({ login: values.login, password: values.password }))
      }}
      validationSchema={Yup.object({
        login: Yup.string().required("Required").max(20, 'Must be 20 characters or less'),
        password: Yup.string().required("Required").max(20, 'Must be 20 characters or less'),
      })}
    >
      {formik => (
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-6 min-w-[99%] sm:min-w-[75%]">
          <Heading text="Sign In" />
          <div className="flex flex-col gap-2">
            <InputForm label="Login" name="login" />
          </div>
          <div className="flex flex-col gap-2">
            <InputForm label="Password" name="password" />
          </div>
          <ConfirmButton text="Sign In" />
          <AuthLink text="Sign Up" question="Not a member yet?" link="/sign-up" />
        </form>
      )}
    </Formik>
  )
}
