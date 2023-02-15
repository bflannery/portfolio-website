import React from 'react'
import { useLocation, useOutlet } from 'react-router-dom'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { Box } from '@mui/material'
import TopNavBar from '../components/TopNavBar'
import { routes } from '../App'

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
  const currentOutlet = useOutlet()
  const { nodeRef } = routes.find((route) => route.path === location.pathname) ?? {}
  return (
    <Box className="app-container">
      <Box id="topbar">
        <TopNavBar />
      </Box>
      <Box>
        <SwitchTransition>
          <CSSTransition
            key={location.pathname}
            nodeRef={nodeRef}
            timeout={300}
            classNames="page"
            unmountOnExit
          >
            {/*{isHome ? <Home /> : <Outlet />}*/}
            {() => (
              <Box ref={nodeRef} className="page">
                <Box id="page-container" sx={styles.pageContainer}>
                  {currentOutlet}
                </Box>
              </Box>
            )}
          </CSSTransition>
        </SwitchTransition>
      </Box>
    </Box>
  )
}
