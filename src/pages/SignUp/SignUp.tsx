import { SignUpForm } from "../../components/forms/SignUpForm";
import { Notification } from "../../components/ui/Notification";
import { useSelector } from "react-redux";
import bg from "../../assets/sign-up-bg.png";

export const SignUp = () => {
  const error = useSelector((state) => state.auth.error);
  const success = useSelector((state) => state.auth.regSuccess);

  return (
    <section className="bg-lightBlue sm:grid sm:grid-cols-[42%_58%] items-center justify-items-center xl:h-screen py-10">
      <div className="w-full bg-white h-full grid place-items-center px-5 sm:px-10">
        <SignUpForm />
      </div>
      <div className="hidden sm:grid bg-lightBlue h-full place-items-center">
        <img src={bg} alt="TeamForge Sign In" />
      </div>

      {success ? <Notification text="Registration was successful. Now you can Sign In." isVisible={ success } link="/sign-in" /> : <Notification text="Login is already used." isVisible={ error } />}

      <div className={`absolute top-0 sm:top-4 sm:right-4 bg-lightRed px-4 py-2 text-white sm:rounded transition-all duration-300 ease-in-out ${error ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}`}>Login is already used.</div>
    </section>
  );
};
