import React from "react";
const Profile = () => {
  return (
    <section className='bg-slate-800 grid place-items-center h-[100vh]'>
      <div className=' w-full sm:w-1/2  h-1/2 bg-slate-900 px-2 pt-14'>
        <input type='file' className='cursor-pointer' />
        <h3>Basic Info</h3>
        <div className=''>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            className='bg-transparent py-2 w-full text-white/80'
          />
        </div>
      </div>
    </section>
  );
};

export default Profile;
