import { Formik, Field } from "formik";
import bg from "../../assets/sign-in-bg.png";

const SignInForm = () => {
  return (
    <Formik 
      initialValues={{ login: "", password: "" }}
      onSubmit={(values) => {
        console.log(values);
      }}>
      {formik => (
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-6 min-w-[99%] sm:min-w-[75%]">
          <h1 className="text-darkGrey text-center sm:text-left text-4xl mb-2">Sign In</h1>
          <div className="flex flex-col gap-2">
            <label className="text-grey text-sm" htmlFor="login"> Login </label>
            <Field className="bg-lightestGrey1 h-10 rounded px-3 py-2 text-sm hover:bg-lightestGrey transition duration-300 focus:shadow-outline focus:outline-none" name="login" type="text" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-grey text-sm" htmlFor="password"> Password </label>
            <Field className="bg-lightestGrey1 h-10 rounded px-3 py-2 text-sm  hover:bg-lightestGrey transition duration-300 focus:shadow-outline focus:outline-none" name="password" type="password" />
          </div>
          <button className="bg-red text-white px-4 py-2 rounded hover:bg-lightRed transition duration-300">Sign In</button>
          <div className="text-center">
            <span className="text-grey text-sm">Not a member yet? </span>
            <a className="text-red text-sm underline" href="/sign-up"> Sign Up </a>
          </div>
        </form>

      )}
    </Formik>
  )
}

export const SignIn = () => {
  return (
    <section className="bg-lightBlue sm:grid sm:grid-cols-[42%_58%] items-center justify-items-center h-screen">
      <div className="w-full bg-white h-full grid place-items-center px-5 sm:px-10">
        <SignInForm />
      </div>
      <div className="hidden sm:grid bg-lightBlue h-full place-items-center">
        <img src={bg} alt="TeamForge Sign In" />
      </div>
    </section>
  );
};
