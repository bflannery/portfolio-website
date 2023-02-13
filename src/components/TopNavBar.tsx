import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import {
  Avatar,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { Link } from 'react-router-dom'

interface Route {
  id: string
  title: string
  route: string
}

const pages = ['Home', 'About', 'Experience', 'Contact']
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
  mobileNavAvatarContainer: { marginRight: 2 },
  mobileNavAvatarText: { fontWeight: 500, display: 'flex', alignItems: 'center' },
  navRoutesContainer: { flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'end' } },
  navRouteButton: {
    my: 2,
    fontFamily: 'Fira Code',
    color: '#64FFDA',
    display: 'block',
    textDecoration: 'none',
    fontSize: '16px',
    margin: '16px 20px',
  },
  resumeButton: {
    // fontFamily: 'Fira Code',
    // color: '#64FFDA',
  },
}

function TopNavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <AppBar position="static" sx={styles.appBar}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box className="nav-avatar-title-container" sx={styles.navAvatarTitleContainer}>
            <Box className="nav-avatar-container" sx={styles.navAvatarContainer}>
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
              <MenuIcon className="mobile-nav-hamburger-icon" />
            </IconButton>
            <Menu
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
              {pages.map((page) => (
                <MenuItem className="mobile-nav-menu-item" key={page} onClick={handleCloseNavMenu}>
                  <Typography className="mobile-nav-menu-item-text" textAlign="center">
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            className="mobile-nav-avatar-title-container"
            sx={styles.mobileNavAvatarTitleContainer}
          >
            <Box className="mobile-nav-avatar-container" sx={styles.mobileNavAvatarContainer}>
              <Avatar alt="Brian Flannery">BF</Avatar>
            </Box>
          </Box>

          <Box className="nav-routes-container" sx={styles.navRoutesContainer}>
            {ROUTES.map((route, i) => (
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
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default TopNavBar
