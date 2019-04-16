import React from 'react'
import classNames from 'classnames'

export const Card = ({ children, fancy }) => (
  <div className={classNames('card', { fancy })}>
    {children}
  </div>
)
