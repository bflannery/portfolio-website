import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Box } from '@mui/material'
import TopNavBar from '../components/TopNavBar'
import Home from '../pages/Home'

const styles = {
  pageContainer: {
    padding: '50px',
    height: '100vh',
  },
  sideBar: {
    width: '64px',
  },
}
export default function Root() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <Box className="app-container">
      <Box id="topbar">
        <TopNavBar />
      </Box>
      <Box id="page-container" sx={styles.pageContainer}>
        {isHome ? <Home /> : <Outlet />}
      </Box>
    </Box>
  )
}
