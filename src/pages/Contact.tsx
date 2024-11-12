import React from 'react'
import { Box, Typography } from '@mui/material'
import { green, slate } from '../themes/palette'
import emailLogo from '../images/logos/email-logo.png'

const styles = {
  contactRootContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  contactContainer: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
  },
  introContainer: {
    display: 'flex',
    flexAlign: 'center',
    flexDirection: 'column',
    marginRight: '75px',
  },
  intro: {
    color: slate[100],
    marginRight: '24px',
    marginBottom: '5px',
  },
  introName: {
    color: green[500],
    marginBottom: '5px',
  },
  introTagline: {
    marginTo: '15px',
    color: slate[500],
    marginBottom: '30px',
  },
  emailContainer: {
    display: 'flex',
    alignItems: 'center',
    height: '200px',
    width: '200px',
  },
}
function Contact() {
  return (
    <Box className="home-root-container" sx={styles.contactRootContainer}>
      <Typography variant="h4" color="primary">
        Contact
      </Typography>
      <Box className="home-root-container" sx={styles.contactContainer}>
        <Box className="intro-container" sx={styles.introContainer}>
          <Box display="flex" flexDirection="column">
            <Typography variant="h4" color="primary" sx={styles.intro}>
              For all inquiries, please email me at
            </Typography>
            <Typography variant="h4" color="primary" sx={styles.introName}>
              brian@paradigmshiftdev.io
            </Typography>
          </Box>
          <Typography variant="h5" sx={styles.introTagline}>
            {`I'll get back to you as soon as possible.`}
          </Typography>
        </Box>
        <Box className="tech-logos" sx={styles.emailContainer}>
          <img src={emailLogo} height={200} width={200} />
        </Box>
      </Box>
    </Box>
  )
}

export default Contact
