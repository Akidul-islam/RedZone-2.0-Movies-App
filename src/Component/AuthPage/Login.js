import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "./Authentication";
import useStateManage from "../useStateManage";
import "./Sign.css";

const Login = () => {
  const { inputAnimite, inputAnimitFun } = useStateManage();

  const { login } = UserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const fromSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/");
      setError("");
    } catch (err) {
      setError(err.code);
    }
  };

  const Input =
    "absolute top-0 left-4 duration-200 ease-linear text-lg pointer-events-none";

  return (
    <section className='bg-black h-[100vh] grid place-items-center'>
      <div className=''>
        <form
          className=' w-[18rem] grid gap-y-4 mt-4'
          onSubmit={(e) => fromSubmit(e)}
        >
          {error && <h3 className='text-white border-red-800/60'>{error}</h3>}
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
              className={`bg-transparent border-0 w-full px-3 text-white outline-none opacity-80`}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <input
            type='submit'
            className='text-lg bg-red-500 py-2 px-4 rounded-md font-semibold text-white ease-linear duration-500 cursor-pointer hover:bg-green-600'
            value='LOGIN'
          />
          <p className=' text-lg  font-semibold text-white/80'>Need Help?</p>
          <h3 className=' text-lg inline font-semibold text-white/90 '>
            New to REDZone?
            <Link to='/signup'>
              {" "}
              <span className='text-green-400'>SIGN UP</span>
            </Link>
          </h3>
        </form>
      </div>
    </section>
  );
};

export default Login;
