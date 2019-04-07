import React from 'react'
import { generatePath } from 'react-router'
import { Link } from 'react-router-dom'

export const NamedLink = ({ to, params = {}, ...args }) => (
  <Link to={generatePath(to, params)} {...args} />
)
