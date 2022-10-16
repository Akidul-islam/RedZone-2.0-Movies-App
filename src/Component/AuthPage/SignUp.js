import React, { useState } from "react";
import { UserAuth } from "./Authentication";
import { useNavigate, Link } from "react-router-dom";
import useStateManage from "../useStateManage";

const SignUp = () => {
  const { inputAnimite, inputAnimitFun } = useStateManage();
  const [error, SetError] = useState("");

  const { signUp } = UserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const fromSubmit = async (e) => {
    try {
      e.preventDefault();
      await signUp(email, password);
      navigate("/");
      SetError("");
    } catch (err) {
      SetError(err.code);
    }
  };

  const Input =
    "absolute top-0 left-4 duration-200 ease-linear text-lg pointer-events-none";

  return (
    <section
      className={`bg-black bg-center bg-no-repeat bg-cover bg-fixed h-[100vh] grid place-items-center`}
    >
      <div className=''>
        <form
          className=' w-[18rem] grid gap-y-4 mt-4'
          onSubmit={(e) => fromSubmit(e)}
        >
          {error ? <p className='text-white'>{error}</p> : ""}
          <div
            className='bg-slate-900 cursor-text py-6 pb-2 px-2 relative  rounded-sm duration-300 ease-in  hover:bg-slate-800 '
            onClick={() => inputAnimitFun(true)}
          >
            <label
              htmlFor='Email'
              className={`${Input} ${
                inputAnimite && "scale-75 -translate-x-5 -translate-y-4"
              }`}
            >
              Email or phone number
            </label>
            <input
              type='text'
              name='Email'
              className={`bg-transparent border-0 w-full px-3 text-white outline-none opacity-80 placeholder:bg-transparent`}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>

          <div
            className='bg-slate-900 hover:bg-slate-800 duration-300 ease-linear cursor-text py-6 pb-2 px-2 relative  rounded-sm'
            onClick={() => inputAnimitFun(1)}
          >
            <label
              htmlFor='password'
              className={`${Input} ${
                inputAnimite && "scale-75 -translate-x-4 -translate-y-4"
              }`}
            >
              Password
            </label>
            <input
              type='password'
              name='password'
              className={`placeholder:text-sm bg-transparent border-0 w-full px-3 text-white outline-none opacity-80`}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <input
            type='submit'
            className='text-lg bg-red-500 py-2 px-4 rounded-md font-semibold text-white ease-linear duration-500 cursor-pointer hover:bg-green-600'
            value='SIGN UP'
          />
          <p className=' text-lg  font-semibold text-white/80'>Need Help?</p>
          <h3 className=' text-[18px] inline font-semibold text-white/90 '>
            New to REDZone?{" "}
            <Link to='/login'>
              <span className='text-green-400'>LOGIN</span>
            </Link>
          </h3>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
