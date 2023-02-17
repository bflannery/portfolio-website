import React from 'react'
import { Avatar, Box, Link, Typography } from '@mui/material'
import linkedinLogo from '../images/logos/linkedin-logo.png'
import githubLogo from '../images/logos/github-logo.png'
import twitterLogo from '../images/logos/twitter-logo.png'
import igLogo from '../images/logos/instagram-logo.png'
import headshot from '../images/screenshots/headshot.jpg'
import { slate } from '../themes/palette'

const styles = {
  rootContainer: {
    display: 'flex',
    flexDirection: { xs: 'column-reverse', md: 'row' },
    alignItems: { xs: 'center', md: 'flex-end' },
    paddingBottom: { xs: '50px' },
  },
  aboutContainer: {},
  name: { marginBottom: { xs: '10px' } },
  socialContainer: { marginBottom: { xs: '20px' } },
  bioHeadshotContainer: {},
  headshotContainer: { marginBottom: { xs: '20px', md: 0 } },
  headshot: { height: { xs: '200px', md: '400px' }, width: { xs: '200px', md: '400px' } },
  bioContainer: { marginRight: { md: '50px' } },
  socialLogo: {
    marginRight: '15px',
  },
  bio: {
    color: slate[500],
    marginBottom: '20px',
  },
}
function About() {
  return (
    <Box className="about-root-container" sx={styles.rootContainer}>
      <Box className="about-container" sx={styles.aboutContainer}>
        <Typography variant="h3" color="primary" sx={styles.name}>
          Brian Flannery
        </Typography>
        <Box className="social-container" sx={styles.socialContainer}>
          <Link
            style={styles.socialLogo}
            href="https://www.linkedin.com/in/bflanneryatx/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinLogo} height={50} width={50} />
          </Link>
          <Link
            href="https://github.com/bflannery"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.socialLogo}
          >
            <img src={githubLogo} height={55} width={55} />
          </Link>
          <Link
            href="https://twitter.com/flanst1gram"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.socialLogo}
          >
            <img src={twitterLogo} height={50} width={50} />
          </Link>
          <Link
            style={styles.socialLogo}
            href="https://www.instagram.com/flanst1gram/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={igLogo} height={50} width={50} />
          </Link>
        </Box>
        <Box sx={styles.bioContainer}>
          <Typography sx={styles.bio}>
            After graduating Georgia State University with a film degree, I moved to Austin, Texas
            in 2011 to pursue photography and videography. While freelancing, I began evolving my
            work from just photo and video to building websites for clients.
          </Typography>
          <Typography sx={styles.bio}>
            In 2016 I decided to make a career change and dive full-time into web development and
            attended a Front-End bootcamp, learning all about HTML, CSS, Javascript and React. Since
            then I’ve continued to explore new technologies across the stack to broaden my skill set
            which ranges from front-end UI/UX, server-side API work, database management, and dev
            ops infrastructure architecture.
          </Typography>
          <Typography sx={{ ...styles.bio, marginBottom: 0 }}>
            Going on 7 years in the tech industry I’ve worked on for a variety of different
            startups, on unique freelance projects, and have been a part of some amazing teams that
            have all helped get me to where I am today. I approach each day not only as a new chance
            to learn something new but also an opportunity to share my knowledge with others.
          </Typography>
        </Box>
      </Box>
      <Box className="headshot-container" sx={styles.headshotContainer}>
        <Avatar src={headshot} sx={styles.headshot} />
      </Box>
    </Box>
  )
}

export default About
