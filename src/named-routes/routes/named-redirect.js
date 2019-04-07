import React from 'react'
import { generatePath } from 'react-router'
import { Redirect } from 'react-router-dom'

export const NamedRedirect = ({ to, params = {}, ...args }) => (
  <Redirect
    to={generatePath(to, params)}
    {...args}
  />
)
