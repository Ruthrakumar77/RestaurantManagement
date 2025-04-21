import React from 'react'

function AddEmployeeMe() {
  return (
    <>
      <div className="min-h-screen absolute w-full top-0 left-0
        z-50 bg-opacity-60 bg-blue-300 text-2xl font-semibold flex  items-center justify-center ">
        {/* Employee Adding Form */}

        <form>
          
          <div className='flex'>
            <div className=''>
              <img className='h-60 w-60 ml-10 mt-6' src="https://static.vecteezy.com/system/resources/previews/000/439/863/large_2x/vector-users-icon.jpg" alt="" />
              {/* <button className='h-12 w-60 bg-blue-800 text-white'>Upload Photo</button> */}
              <input className='ml-10 w-72' type="file" />
            </div>

            <div className='bg-white text-black p-7'>
            <h1 className='text-2xl font-bold text-center'>New Employee</h1><br /><br />
            <label>Upload photo</label> <br />
            <input type="file" /> <br /><br />

              <label className=''>First Name : </label>
              <input className='mb-4 mr-5 ' type="text" />
              <label>Middle Name : </label>
              <input type="text" /> <br />
              <label>Last Name : </label>
              <input  className='mb-4 mr-6'  type="text" />
              <label>E-mail : </label>
              <input className='ml-20' type="email" /> <br />
              <label  className='mr-16'>DOB : </label>
              <input className='mb-4 mr-20' type="date" />
              <label>Department : </label>
              <input className='ml-4' type="text" /><br />
              <label className='mr-3'>Join Date : </label>
              <input className='mb-4 mr-20' type="date" />
              <label>city : </label>
              <input className='ml-28' type="text" /><br />
              <label className='mr-5'>PinCode : </label>
              <input className='mb-4 mr-8' type="number" />
              <label>State : </label>
              <input  className='ml-24' type="text" /> <br />
              <label className='mr-7'>PAN no : </label>
              <input className='mb-4 mr-8' type="text" />
              <label  className='mr-1'>Salary : </label>
              <input  className='ml-20' type="number" /> <br />

              <button className='h-11 w-52 bg-blue-600 text-neutral-50 ml-60 mt-7'>ADD Emp</button>

            </div>
          </div>

        </form>
      </div>
    </>
  )
}

export default AddEmployeeMe