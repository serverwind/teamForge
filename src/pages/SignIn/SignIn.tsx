import { SignInForm } from "../../components/forms/SignInForm";
import bg from "../../assets/sign-in-bg.png";

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
