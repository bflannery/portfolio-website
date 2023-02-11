import React from 'react'
import { Outlet } from 'react-router-dom'
import { Box, Typography } from '@mui/material'
import TopNavBar from '../components/TopNavBar'

export default function Root() {
  return (
    <>
      <Box id="topbar">
        <TopNavBar />
      </Box>
      <Box id="detail">
        <Outlet />
      </Box>
    </>
  )
}
