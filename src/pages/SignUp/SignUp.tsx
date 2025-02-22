import { SignUpForm } from "../../components/forms/SignUpForm";
import bg from "../../assets/sign-up-bg.png";

export const SignUp = () => {
  return (
    <section className="bg-lightBlue sm:grid sm:grid-cols-[42%_58%] items-center justify-items-center xl:h-screen py-10">
      <div className="w-full bg-white h-full grid place-items-center px-5 sm:px-10">
        <SignUpForm />
      </div>
      <div className="hidden sm:grid bg-lightBlue h-full place-items-center">
        <img src={bg} alt="TeamForge Sign In" />
      </div>
    </section>
  );
};
