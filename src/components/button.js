import React from 'react'

export const Button = ({name}) => {
  return (
      <div className="flex justify-center mb-4 mt-3">
        <div className="w-2/5">
          <button className="rounded-lg bg-orange-500 text-white py-2 px-4 w-full capitalize">
            {name}
          </button>
        </div>
      </div>
  );
}
