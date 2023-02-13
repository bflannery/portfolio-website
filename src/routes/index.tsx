import React from 'react'
import { Outlet } from 'react-router-dom'
import { Box, Typography } from '@mui/material'
import TopNavBar from '../components/TopNavBar'
import { green, slate } from '../themes/palette'

const styles = {
  pageContainer: {
    padding: '100px',
  },
  sideBar: {
    width: '64px',
  },
  introContainer: {
    display: 'flex',
    flexAlign: 'center',
    flexDirection: 'column',
    width: '75%',
  },
  intro: {
    color: slate[100],
    marginRight: '24px',
    marginBottom: '20px',
  },
  introName: {
    color: green[500],
  },
  introTagline: {
    color: slate[500],
    marginBottom: '30px',
  },
  introDescription: {
    color: slate[500],
  },
}
export default function Root() {
  return (
    <Box className="app-container">
      <Box id="topbar">
        <TopNavBar />
      </Box>
      <Box id="page-container" sx={styles.pageContainer}>
        {/*<Outlet />*/}
        <Box id="sidebar">
          <Box sx={styles.sideBar} />
        </Box>
        <Box className="intro-container" sx={styles.introContainer}>
          <Box display="flex">
            <Typography variant="h3" color="primary" sx={styles.intro}>
              Hi, my name is
            </Typography>
            <Typography variant="h3" color="primary" sx={styles.introName}>
              Brian.
            </Typography>
          </Box>
          <Typography variant="h3" sx={styles.introTagline}>
            I build things for the web.
          </Typography>
          <Typography variant={'h6'} sx={styles.introDescription}>
            I’m a fullstack software engineer specializing in building scalable web applications.
            Currently, I’m focused on customer-centered products for optimizing Databricks and Spark
            applications at SyncComputing.
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
