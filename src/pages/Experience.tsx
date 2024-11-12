import React from 'react'
import { Box, Divider, Typography } from '@mui/material'
import { slate } from '../themes/palette'
import reactLogo from '../images/logos/react-logo.png'
import graphqlLogo from '../images/logos/graphql-logo.png'
import reduxLogo from '../images/logos/redux-logo.png'
import typescriptLogo from '../images/logos/typescript-logo.png'
import pythonLogo from '../images/logos/python-logo.png'
import postgresLogo from '../images/logos/postgres-logo.png'
import mysqlLogo from '../images/logos/mysql-logo.png'
import awsLogo from '../images/logos/aws-logo.png'
import stripeLogo from '../images/logos/stripe-logo.png'
import dockerLogo from '../images/logos/docker-logo.png'
import syncPortal from '../images/screenshots/sync-computing-dashboard.png'
import loudcrowdPortal from '../images/screenshots/loudcrowd-dashboard.png'
import unionPortal from '../images/screenshots/union-login.png'

const styles = {
  title: {
    marginBottom: '50px',
  },
  experienceContainer: {
    display: 'flex',
  },
  timelineContainer: {
    flexGrow: 1,
    height: '100vh',
  },
  companyDateRange: {
    whiteSpace: 'nowrap',
    minWidth: '175px',
    marginRight: '20px',
  },
  companiesContainer: {
    flexGrow: 3,
  },
  companyContainer: {
    display: 'flex',
    marginBottom: '35px',
  },
  companyDetailsContainer: {
    display: 'flex',
    borderLeft: `1px solid ${slate[100]}`,
  },
  companyInfoContainer: {
    marginLeft: '20px',
    minWidth: '750px',
  },
  companyTitleDescContainer: {
    marginBottom: '20px',
  },
  companyDesc: {
    width: '90%',
    color: slate[100],
  },
  companyRoles: {
    width: '90%',
  },
  techLogos: {
    marginTop: '30px',
  },
  techLogo: {
    marginRight: '5px',
    marginLeft: '5px',
  },
  companyImageContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  divider: {
    height: '1px',
    marginY: '5px',
    backgroundColor: slate[100],
  },
}
function Experience() {
  return (
    <Box>
      <Typography variant="h4" color="primary" sx={styles.title}>
        Experience
      </Typography>
      <Box className="experience-container" sx={styles.experienceContainer}>
        <Box className="companies-container" sx={styles.companiesContainer}>
          <Box id="current" className="company-container" sx={styles.companyContainer}>
            <Box id="sync-timeline" sx={styles.companyDateRange}>
              <Typography variant="h6" color="secondary">
                2022 - Present
              </Typography>
            </Box>
            <Box className="company-details-container" sx={styles.companyDetailsContainer}>
              <Box className="company-info-container" sx={styles.companyInfoContainer}>
                <Box sx={styles.companyTitleDescContainer}>
                  <Typography variant="h5" color="secondary" marginBottom="10px">
                    Sync Computing
                  </Typography>
                  <Typography variant="body1" color="primary" sx={styles.companyDesc}>
                    Staff Fullstack Engineer
                  </Typography>
                </Box>
                <Box sx={styles.companyRoles}>
                  <Typography variant="body1" color="primary">
                    - Lead engineer on React based SaaS analytics and monitoring application
                    providing enhanced user experience through implementing intuitive interfaces and
                    responsive designs
                  </Typography>
                  <Typography variant="body1" color="primary">
                    - Work with Data Science team to surface key metrics from customers Databricks
                    workspace via various ingestion pipelines.
                  </Typography>
                  <Typography variant="body1" color="primary">
                    - Ensure high reliability and performance of external API services using
                    FastAPI, delivering robust and scalable solutions.
                  </Typography>
                  <Typography variant="body1" color="primary">
                    - Monitor API usage, analyze patterns, and implement optimizations for
                    scalability with Datadog.
                  </Typography>
                </Box>
                <Box sx={styles.techLogos}>
                  <img src={reactLogo} height={25} width={25} style={styles.techLogo} />
                  <img src={reduxLogo} height={25} width={25} style={styles.techLogo} />
                  <img src={typescriptLogo} height={25} width={35} style={styles.techLogo} />
                  <img src={pythonLogo} height={25} width={25} style={styles.techLogo} />
                  <img src={postgresLogo} height={25} width={25} style={styles.techLogo} />
                  <img src={awsLogo} height={25} width={35} style={styles.techLogo} />
                </Box>
              </Box>
              <Box sx={styles.companyImageContainer}>
                <img src={syncPortal} height={300} width={550} />
              </Box>
            </Box>
            <Divider sx={styles.divider} />
          </Box>
          <Box id="loudcrowd" className="company-container" sx={styles.companyContainer}>
            <Box id="loudcrowd-timeline" sx={styles.companyDateRange}>
              <Typography variant="h6" color="secondary">
                2020 - 2022
              </Typography>
            </Box>
            <Box className="company-details-container" sx={styles.companyDetailsContainer}>
              <Box className="company-info-container" sx={styles.companyInfoContainer}>
                <Box sx={styles.companyTitleDescContainer}>
                  <Typography variant="h5" color="secondary">
                    Loudcrowd
                  </Typography>
                  <Typography variant="body1" color="primary" sx={styles.companyDesc}>
                    Fullstack Software Engineer
                  </Typography>
                </Box>
                <Box sx={styles.companyRoles}>
                  <Typography variant="body1" color="primary">
                    - Automated and optimized high-volume media ingestion from Meta APIs to Postgres
                    Databases using infrastructure as code to manage AWS resources
                  </Typography>
                  <Typography variant="body1" color="primary">
                    - Coordinate with other engineers to evaluate and improve software and hardware
                    interfaces
                  </Typography>
                  <Typography variant="body1" color="primary">
                    - Manage and optimize full-stack client, server, and database applications on
                    AWS infrastructure.
                  </Typography>
                  <Typography variant="body1" color="primary">
                    - Built highly responsive, React based SaaS application using Auth0 to
                    authenticate users for a secure experience
                  </Typography>
                  <Typography variant="body1" color="primary">
                    - Implemented self-service subscription model using Stripe payments in app and
                    server- side for end-to-end management
                  </Typography>
                </Box>
                <Box sx={styles.techLogos}>
                  <img src={reactLogo} height={25} width={25} style={styles.techLogo} />
                  <img src={graphqlLogo} height={25} width={25} style={styles.techLogo} />
                  <img src={typescriptLogo} height={25} width={35} style={styles.techLogo} />
                  <img src={pythonLogo} height={25} width={25} style={styles.techLogo} />
                  <img src={dockerLogo} height={25} width={25} style={styles.techLogo} />
                  <img src={postgresLogo} height={25} width={25} style={styles.techLogo} />
                  <img src={awsLogo} height={25} width={35} style={styles.techLogo} />
                  <img
                    src={stripeLogo}
                    height={25}
                    width={35}
                    style={{ ...styles.techLogo, marginLeft: '5px' }}
                  />
                </Box>
              </Box>
              <Box sx={styles.companyImageContainer}>
                <img src={loudcrowdPortal} height={300} width={550} />
              </Box>
            </Box>
            <Divider sx={styles.divider} />
          </Box>
          <Box id="union" className="company-container" sx={styles.companyContainer}>
            <Box id="union-timeline" sx={styles.companyDateRange}>
              <Typography variant="h6" color="secondary">
                2017 - 2020
              </Typography>
            </Box>
            <Box className="company-details-container" sx={styles.companyDetailsContainer}>
              <Box className="company-info-container" sx={styles.companyInfoContainer}>
                <Box sx={styles.companyTitleDescContainer}>
                  <Typography variant="h5" color="secondary">
                    Union
                  </Typography>
                  <Typography variant="body1" color="primary" sx={styles.companyDesc}>
                    Fullstack Software Engineer
                  </Typography>
                </Box>
                <Box sx={styles.companyRoles}>
                  <Typography variant="body1" color="primary">
                    - Contributed strong test-driven, mobile-responsive, Javascript code to React
                    administrative and reporting portal for company clients.
                  </Typography>
                  <Typography variant="body1" color="primary">
                    - Managed AWS infrastructure minimizing downtime and ensuring successful
                    deployments.
                  </Typography>
                  <Typography variant="body1" color="primary">
                    - Delivered documentation for design decisions, estimating assumptions, code
                    modules and performance metrics.
                  </Typography>
                </Box>
                <Box sx={styles.techLogos}>
                  <img src={reactLogo} height={25} width={25} style={styles.techLogo} />
                  <img src={reduxLogo} height={25} width={25} style={styles.techLogo} />
                  <img src={pythonLogo} height={25} width={25} style={styles.techLogo} />
                  <img src={dockerLogo} height={25} width={25} style={styles.techLogo} />
                  <img src={mysqlLogo} height={25} width={35} style={styles.techLogo} />
                  <img src={awsLogo} height={25} width={35} style={styles.techLogo} />
                </Box>
              </Box>
              <Box sx={styles.companyImageContainer}>
                <img src={unionPortal} height={300} width={550} />
              </Box>
            </Box>
            <Divider sx={styles.divider} />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Experience
