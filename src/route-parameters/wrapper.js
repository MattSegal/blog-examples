import React from 'react'
import { Redirect } from 'react-router-dom'

import { AppContext } from './context'

// Passes a business object to the Child component.
// Returns a "not found" redirect if a business cannot be found.
export const withBusiness = Child => props => (
  <AppContext.Consumer>
    {app => {
      const {
        match: {
          params: { businessId },
        },
      } = props
      const business = app.businesses.find(b => b.id === businessId)
      return business ? (
        <Child business={business} {...props} />
      ) : (
        <Redirect to="/not-found" />
      )
    }}
  </AppContext.Consumer>
)
