import React from 'react'
import { Box, Typography } from '@mui/material'
import Carousel from 'react-material-ui-carousel'
import { green, slate } from '../themes/palette'

import reactLogo from '../images/logos/react-logo-250.png'
import graphqlLogo from '../images/logos/graphql-logo-250.png'
import reduxLogo from '../images/logos/redux-logo-250.png'
import typescriptLogo from '../images/logos/typescript-logo-250.png'
import pythonLogo from '../images/logos/python-logo-250.png'
import nodeLogo from '../images/logos/node-logo-250.png'
import postgresLogo from '../images/logos/postgres-logo-250.png'
import mysqlLogo from '../images/logos/mysql-logo-250.png'
import awsLogo from '../images/logos/aws-logo-250.png'
import dockerLogo from '../images/logos/docker-logo-250.png'

const styles = {
  homeContainer: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
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
  techLogos: {
    minWidth: '250px',
  },
}

const logos = [
  nodeLogo,
  reactLogo,
  typescriptLogo,
  graphqlLogo,
  reduxLogo,
  awsLogo,
  postgresLogo,
  pythonLogo,
  mysqlLogo,
  dockerLogo,
]

function Home() {
  return (
    <Box className="home-root-container" sx={styles.homeContainer}>
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
      <Box className="tech-logos" sx={styles.techLogos}>
        <Carousel
          indicators={false}
          interval={2000}
          duration={500}
          navButtonsAlwaysVisible={false}
          navButtonsAlwaysInvisible={true}
        >
          {logos.map((logo, i) => (
            <img key={i} src={logo} height={250} width={250} />
          ))}
        </Carousel>
      </Box>
    </Box>
  )
}

export default Home
