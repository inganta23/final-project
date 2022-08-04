import React from 'react'

export const TicketEmpty = ({description, title, children}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 text-gray-500 pt-6">
      <div className="flex justify-center">{children}</div>
      <p className="text-2xl font-light">{title}</p>
      <p className="text-normal font-medium mt-1">{description}</p>
    </div>
  );
}
