import React, { createContext, useState } from 'react'

const Context = createContext({})

export const UsersProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => {
    return window.sessionStorage.getItem('token')
  })

  const value = {
    isAuth,
    activateUser: token => {
      setIsAuth(true)
      window.sessionStorage.setItem('token', token)
    },
    removeUser: token => {
      setIsAuth(false)
      window.sessionStorage.removeItem('item')
    }
  }

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}

export default Context
