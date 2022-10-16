import React from 'react'
import { Link } from 'react-router-dom'
import {UserAuth } from '../AuthPage/Authentication'
import useStateManage from '../useStateManage'

const Navber = () => {
  const {scroll, SignUpBtn} = useStateManage()
  const { user, logOut } = UserAuth();
  
  const inputActive = `relative z-[1] w-24 text-yellow-50  border border-solid  py-1 px-2 rounded-sm outline-none bg-transparent  font-semibold ease-in-out duration-300 hover:border-transparent before:absolute before:content[''] before:top-0  before:w-0 before:h-full  from-indigo-500 via-purple-500 to-pink-500 before:z-[-1] before:ease-linear before:duration-300 before:rounded-sm before:bg-gradient-to-r
  hover:before:w-full`;

  return (
    <nav className={`fixed left-0 top-0  z-50 w-full  py-3 px-8 sm:px-6 sm:pr-10 flex justify-between ease-linear duration-300 ${scroll? 'bg-gradient-to-l from-black to-transparent':'bg-transparent'}`}>
        <Link to='/'><h1 className="shadow-2xl font-semibold text-rose-600 text-3xl italic">REDZone</h1></Link>
       {user?(<div className="flex gap-x-4 sm:gap-x-3">
        <Link to='/profile'> <button className={`${inputActive} ${scroll ? 'border-red-500 before:left-0':'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-none before:left-0'}`}>Profile</button>
        </Link>
         <Link to='/login'>
          <button onClick={logOut} className={`${inputActive} ${scroll ?'before:right-0':'bg-slate-800 border-none before:right-0 before:bg-none before:bg-slate-700'}`}>LogOut</button>
          </Link> 
        </div>)
        :
        (<div className="flex gap-x-4 sm:gap-x-3">
        <Link to='/signup'>
           <button className={`${inputActive} ${scroll ? 'border-red-500 before:left-0':'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-none before:left-0'}`} onClick={() =>SignUpBtn()}>SIGN UP</button>
        </Link>
         <Link to='/login'>
          <button className={`${inputActive} ${scroll ?'before:right-0':'bg-slate-800 border-none before:right-0 before:bg-none before:bg-slate-700'}`} >LOGIN</button>
          </Link> 
        </div>)
        
        }
    </nav>
  )
}

export default Navber