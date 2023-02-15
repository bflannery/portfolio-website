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
    // borderLeft: `1px solid ${slate[100]}`,
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
      <Typography variant="h2" color="primary" sx={styles.title}>
        Experience
      </Typography>
      <Box className="experience-container" sx={styles.experienceContainer}>
        {/*<Box className="timeline-container" sx={styles.timelineContainer}>*/}
        {/*  <Box id="sync-timeline" sx={styles.companyDateRange}>*/}
        {/*    <Typography variant="h6" color="secondary">*/}
        {/*      2022 - Present*/}
        {/*    </Typography>*/}
        {/*  </Box>*/}
        {/*  <Box id="loudcrowd-timeline" sx={styles.companyDateRange}>*/}
        {/*    <Typography variant="h6" color="secondary">*/}
        {/*      2020 - 2022*/}
        {/*    </Typography>*/}
        {/*  </Box>*/}
        {/*  <Box id="union-timeline" sx={styles.companyDateRange}>*/}
        {/*    <Typography variant="h6" color="secondary">*/}
        {/*      2017 - 2020*/}
        {/*    </Typography>*/}
        {/*  </Box>*/}
        {/*</Box>*/}
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
                    Lower cloud costs, accelerate runtimes, and simplify infrastructure for Apache
                    Spark on AWS, with no code changes
                  </Typography>
                </Box>
                <Box sx={styles.companyRoles}>
                  <Typography variant="body1" color="primary">
                    - Re-write front-end React app to more scalable approach following community
                    standard and best practices.
                  </Typography>
                  <Typography variant="body1" color="primary">
                    - Implement testing, code quality, and code coverage into codebase and CI/CD
                    pipeline
                  </Typography>
                  <Typography variant="body1" color="primary">
                    - Provide technical support using knowledge of complex technology to solve
                    problems and support new projects.
                  </Typography>
                  <Typography variant="body1" color="primary">
                    - Review project specifications and design technology solutions that met or
                    exceeded performance expectations.
                  </Typography>
                </Box>
                <Box sx={styles.techLogos}>
                  <img src={reactLogo} height={25} width={25} style={styles.techLogo} />
                  <img src={reduxLogo} height={25} width={25} style={styles.techLogo} />
                  <img src={typescriptLogo} height={25} width={35} style={styles.techLogo} />
                  <img src={pythonLogo} height={25} width={25} style={styles.techLogo} />
                  <img
                    src={postgresLogo}
                    height={25}
                    width={25}
                    style={{ ...styles.techLogo, marginRight: '10px' }}
                  />
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
                    The only brand ambassador marketing platform to measure your UGC and find loyal
                    Instagram brand ambassadors within your customers.
                  </Typography>
                </Box>
                <Box sx={styles.companyRoles}>
                  <Typography variant="body1" color="primary">
                    - Automate and optimize high-volume media ingestion from Facebook API.
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
                    - Train and mentor junior developers and engineers, working to improve overall
                    team performance..
                  </Typography>
                </Box>
                <Box sx={styles.techLogos}>
                  <img src={reactLogo} height={25} width={25} style={styles.techLogo} />
                  <img src={graphqlLogo} height={25} width={25} style={styles.techLogo} />
                  <img src={typescriptLogo} height={25} width={35} style={styles.techLogo} />
                  <img src={pythonLogo} height={25} width={25} style={styles.techLogo} />
                  <img src={dockerLogo} height={25} width={25} style={styles.techLogo} />
                  <img
                    src={postgresLogo}
                    height={25}
                    width={25}
                    style={{ ...styles.techLogo, marginRight: '10px' }}
                  />
                  <img src={awsLogo} height={25} width={35} style={styles.techLogo} />
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
                    The first POS built exclusively for high volume high touch venues and their
                    unique operating requirements.
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
                  <img
                    src={mysqlLogo}
                    height={25}
                    width={35}
                    style={{ ...styles.techLogo, marginRight: '10px' }}
                  />
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
