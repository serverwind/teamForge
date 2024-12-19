import bg from "../../assets/sign-in-bg.png";

export const SignIn = () => {
  return (
    <section className="bg-lightBlue grid grid-cols-[1fr_2fr] items-center justify-items-center lg:h-screen">
      <div className="w-full bg-white h-full grid place-items-center px-10">
        <form className="flex flex-col gap-6 w-[90%]">
        <h1 className="text-dark text-4xl mb-2">Sign In</h1>
          <div className="flex flex-col gap-2">
            <label className="text-gray text-sm" htmlFor="login">
              Login
            </label>
            <input className="bg-lightGray h-10 rounded" id="login" type="text" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-gray text-sm" htmlFor="password">
              Password
            </label>
            <input className="bg-lightGray h-10 rounded" id="password" type="password" />
          </div>
          <button className="bg-red text-white px-4 py-2 rounded">Sign In</button>
          <div className="text-center bg-lightBlue">
            <span className="text-gray text-sm">Not a member yet? </span>
            <a className="text-red text-sm underline" href="/sign-up">
              Sign Up
            </a>
          </div>
        </form>
      </div>
      <div className="bg-lightBlue h-full grid place-items-center">
        <img src={bg} alt="TeamForge Sign In" />
      </div>
    </section>
  );
};
