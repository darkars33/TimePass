import React from 'react'
import {Pie} from 'react-chartjs-2'

const PeiChart = ({chartData}) => {
  return (
    <div className='w-[400px] h-[500px] '>
      <h1 className='text-center text-[2rem] text-red-400'>Pei Chart</h1>
      <Pie data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Users Gained between 2016-2020"
            }
          }
        }} />
    </div>
  )
}

export default PeiChart
