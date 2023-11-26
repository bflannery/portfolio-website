import React from 'react'
import FacebookLogin from '@greatsumini/react-facebook-login'

// default

const FB = () => {
  return (
    <FacebookLogin
      appId="1432286387351640"
      onSuccess={(response) => {
        console.log('Login Success!', response)
      }}
      onFail={(error) => {
        console.log('Login Failed!', error)
      }}
      onProfileSuccess={(response) => {
        console.log('Get Profile Success!', response)
      }}
      scope="email,public_profile,pages_show_list,'instagram_basic','instagram_manage_insights',"
    />
  )
}

export default FB
