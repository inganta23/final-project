import React from 'react'

export const Button = ({name, handleOnClick}) => {
  return (
      <div className="flex justify-center mb-4 mt-3">
        <div className="w-2/5">
          <button className="rounded-lg bg-orange-500 text-white py-2 px-4 w-full capitalize" onClick={handleOnClick}>
            {name}
          </button>
        </div>
      </div>
  );
}
