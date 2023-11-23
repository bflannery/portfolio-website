import React from 'react'
import FacebookLogin from '@greatsumini/react-facebook-login'

// default

const FB = () => {
  return (
    <FacebookLogin
      appId="2520247984842048"
      onSuccess={(response) => {
        console.log('Login Success!', response)
      }}
      onFail={(error) => {
        console.log('Login Failed!', error)
      }}
      onProfileSuccess={(response) => {
        console.log('Get Profile Success!', response)
      }}
    />
  )
}

export default FB
