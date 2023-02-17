import React from 'react'
import { useLocation, useOutlet } from 'react-router-dom'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { Box } from '@mui/material'
import TopNavBar from '../components/TopNavBar'
import { routes } from '../App'

const styles = {
  appContainer: {
    height: '100%',
  },
  pageContainer: {
    padding: { xs: '50px 20px', md: '50px 100px' },
    height: '100%',
  },
  sideBar: {
    width: '64px',
  },
}

export default function Root() {
  const location = useLocation()
  const currentOutlet = useOutlet()
  const { nodeRef } = routes.find((route) => route.path === location.pathname) ?? {}
  return (
    <Box className="app-container" sx={styles.appContainer}>
      <Box id="topbar">
        <TopNavBar />
      </Box>
      <SwitchTransition>
        <CSSTransition
          key={location.pathname}
          nodeRef={nodeRef}
          timeout={300}
          classNames="page"
          unmountOnExit
        >
          {() => (
            <Box ref={nodeRef} className="page" sx={styles.pageContainer}>
              {currentOutlet}
            </Box>
          )}
        </CSSTransition>
      </SwitchTransition>
    </Box>
  )
}
