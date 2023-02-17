import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import { Avatar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { Link } from 'react-router-dom'
import { navy } from '../themes/palette'

interface Route {
  id: string
  title: string
  route: string
}

const ROUTES: Route[] = [
  {
    id: 'home',
    title: 'Home',
    route: '/',
  },
  {
    id: 'about',
    title: 'About',
    route: '/about',
  },
  {
    id: 'experience',
    title: 'Experience',
    route: '/experience',
  },
  {
    id: 'contact',
    title: 'Contact',
    route: '/contact',
  },
]

const styles = {
  appBar: { backgroundColor: 'transparent', boxShadow: 'none' },
  mobileNavContainer: { flexGrow: 1, display: { xs: 'flex', md: 'none' } },
  navAvatarTitleContainer: {
    display: { md: 'flex', alignItems: 'center', color: '#64FFDA' },
  },
  navAvatarContainer: { marginRight: 2, display: { xs: 'none', md: 'flex' } },
  navTitle: { xs: 'none', md: 'flex' },
  mobileNavMenu: { display: { xs: 'block', md: 'none' } },
  mobileNavAvatarTitleContainer: { display: { xs: 'flex', md: 'none' }, flexGrow: 1 },
  mobileNavAvatarText: { fontWeight: 500, display: 'flex', alignItems: 'center' },
  navRoutesContainer: { flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'end' } },
  mobileNavItem: {
    backgroundColor: navy[500],
  },
  mobileNavButton: {
    textDecoration: 'none',
    fontFamily: 'Fira Code',
    color: '#64FFDA',
  },
  navRouteButton: {
    my: 2,
    fontFamily: 'Fira Code',
    color: '#64FFDA',
    display: 'block',
    textDecoration: 'none',
    fontSize: '16px',
    margin: '16px 20px',
  },
  resumeButton: { marginLeft: { md: '10px' } },
}

function TopNavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const onResumeButtonClick = () => {
    fetch('https://bf-web-dev-portfolio.s3.amazonaws.com/Brian_Flannery_Resume_2022.pdf').then(
      (response) => {
        response.blob().then((blob) => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob)
          // Setting various property values
          const alink = document.createElement('a')
          alink.href = fileURL
          alink.download = 'brian_flannery_resume.pdf'
          alink.click()
        })
      },
    )
  }

  return (
    <AppBar position="static" sx={styles.appBar}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box className="nav-avatar-title-container" sx={styles.navAvatarTitleContainer}>
            <Box className="nav-avatar-container" sx={styles.navAvatarContainer}>
              <Link to="/" style={{ textDecoration: 'none' }}>
                <Avatar
                  alt="Brian Flannery"
                  sx={{
                    color: '#64FFDA',
                    backgroundColor: '#0D1A2D',
                    border: '1px solid #64FFDA',
                  }}
                >
                  BF
                </Avatar>
              </Link>
            </Box>
          </Box>
          {/*Mobile Nav*/}
          <Box className="mobile-nav-container" sx={styles.mobileNavContainer}>
            <IconButton
              className="mobile-nav-hamburger-button"
              size="large"
              aria-label="mobile-nav-hamburger-button"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon className="mobile-nav-hamburger-icon" viewBox="0 0 24 24" />
            </IconButton>
            <Menu
              MenuListProps={{
                sx: {
                  padding: 0,
                },
              }}
              className="mobile-nav-menu"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={styles.mobileNavMenu}
            >
              {ROUTES.map((route) => (
                <MenuItem
                  sx={styles.mobileNavItem}
                  className="mobile-nav-menu-item"
                  key={route.id}
                  onClick={handleCloseNavMenu}
                >
                  <Link
                    to={route.route}
                    className="mobile-nav-menu-route"
                    style={styles.mobileNavButton}
                  >
                    {route.title}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box className="nav-routes-container" sx={styles.navRoutesContainer}>
            {ROUTES.map((route) => (
              <Link
                key={route.id}
                to={route.route}
                className="nav-route-button"
                style={styles.navRouteButton}
              >
                {route.title}
              </Link>
            ))}
          </Box>
          <Button
            variant="outlined"
            color="secondary"
            sx={styles.resumeButton}
            onClick={onResumeButtonClick}
          >
            Resume
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default TopNavBar
