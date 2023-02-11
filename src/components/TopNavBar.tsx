import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import {
  Avatar,
  Box,
  Button,
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
  mobileNavContainer: { flexGrow: 1, display: { xs: 'flex', md: 'none' } },
  navAvatarTitleContainer: { display: { md: 'flex', alignItems: 'center' } },
  navAvatarContainer: { marginRight: 2, display: { xs: 'none', md: 'flex' } },
  navTitle: { xs: 'none', md: 'flex' },
  mobileNavMenu: { display: { xs: 'block', md: 'none' } },
  mobileNavAvatarTitleContainer: { display: { xs: 'flex', md: 'none' }, flexGrow: 1 },
  mobileNavAvatarContainer: { marginRight: 2 },
  mobileNavAvatarText: { fontWeight: 500, display: 'flex', alignItems: 'center' },
  navRoutesContainer: { flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'end' } },
  navRouteButton: {
    my: 2,
    color: 'white',
    display: 'block',
    textDecoration: 'none',
    fontSize: '20px',
    margin: '16px 20px',
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
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box className="nav-avatar-title-container" sx={styles.navAvatarTitleContainer}>
            <Box className="nav-avatar-container" sx={styles.navAvatarContainer}>
              <Avatar alt="Brian Flannery" src="B" />
            </Box>
            <Typography
              className="nav-title"
              variant="h6"
              noWrap
              component="a"
              sx={styles.navTitle}
            >
              Web Dev
            </Typography>
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
              <Avatar alt="Brian Flannery" src="B" />
            </Box>
            <Typography
              className="mobile-nav-avatar-text"
              variant="h5"
              noWrap
              sx={styles.mobileNavAvatarText}
            >
              Web Dev
            </Typography>
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
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default TopNavBar
