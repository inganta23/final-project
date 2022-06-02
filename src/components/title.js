import React from 'react'

export const Title = ({name, className}) => {
  return (
    <div className={`text-midBlue font-bold text-lg ${className}`}>{name}</div>
  );
}
