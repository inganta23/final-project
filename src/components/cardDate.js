import React from 'react'

export const CardDate = ({date, day}) => {
  return (
    <div className="bg-midBlue text-white w-full mx-2 text-center rounded-lg shadow-lg py-1 cursor-pointer capitalize">
      <p>{day}</p>
      <p>{date}</p>
    </div>
  );
}
