import React from 'react'

export const AppContext = React.createContext({
  businesses: [
    { id: '1', name: 'Wood Shavings Ltd.' },
    { id: '2', name: 'Fish Boys Inc.' },
  ],
})
