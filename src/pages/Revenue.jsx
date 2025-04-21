import React from 'react'

function Revenue() {
  return (
    <>
      <div className='bg-gray-400 h-screen'>

        <div className='flex gap-10 pt-10'>
          <div className='bg-white h-72 w-80 ml-14'>
            <h1>Orders Today</h1>
            <h3>1500</h3>
            <div className='flex gap-5'>
              <h4>Online 100</h4>
              <h4>Takeway 50</h4>
              <h4>Diamension 1350</h4>
            </div>
          </div>

          <div className='bg-white h-72 w-80'>
            <h2>Revenue Breakdown</h2>
          </div>

          <div className='bg-white h-72 w-80'>
            <h2>Menu Breakdown</h2>
            <h3>Veg Pie Chart</h3>
            <h3>Non-Veg Pie Chart</h3>
            <h3>Snacks Pie Chart</h3>
            <h3>Meals Pie Chart</h3>

          </div>
        </div>
      </div>
    </>
  )
}

export default Revenue