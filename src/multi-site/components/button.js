import React from 'react'

export const Button = ({ children, ...args }) => (
  <button className="button" {...args}>
    {children}
  </button>
)
