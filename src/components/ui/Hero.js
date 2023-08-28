'use client'

import { styled } from '@mui/material/styles'
import { Container, Box, Stack, Typography } from '@mui/material'
import { motion } from 'framer-motion'

const ContentStyle = styled(props => <Stack spacing={5} {...props} />)(
  ({ theme }) => ({
    zIndex: 10,
    maxWidth: '100%',
    margin: 'auto',
    textAlign: 'center',
    position: 'relative',
    paddingBottom: theme.spacing(15),
    [theme.breakpoints.up('md')]: {
      margin: 'unset',
      textAlign: 'center',
    },
  })
)

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 1 } },
  }

  const headingVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { delay: 0.5 } },
  }

  const sloganVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { delay: 2 } },
  }

  return (
    <Box>
      <Container>

        {/* */}
        <Container>
          <ContentStyle
            style={{
              display: 'flex',
              textAlign: 'center',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* Logo */}
            <motion.img
              style={{ width: 180, height: 180, cursor: 'pointer' }}
              src="health.png"
              alt="hero"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            />

            {/* Main heading */}
            <motion.div
              variants={headingVariants}
              initial="hidden"
              animate="visible"
              style={{ marginTop: 0 }}
            >
              <Typography variant="h3" sx={{ color: 'common.white' }}>
                Health Test
              </Typography>
            </motion.div>

            {/* Slogan */}
            <motion.div
              variants={sloganVariants}
              initial="hidden"
              animate="visible"
              style={{ marginTop: 10 }}
            >
              <Typography
                variant="body2"
                sx={{
                  color: 'common.white',
                  width: {
                    xs: '100%',
                    sm: '70%',
                  },
                  textAlign: 'center',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  fontFamily: 'Saira Condensed, sans-serif',
                  fontWeight: 500,
                  fontSize: '1.05rem',
                  wordSpacing: '0.1rem',
                }}
              >
                CMS is a platform that allows you to place orders, book orders
                and deliver orders.
              </Typography>
            </motion.div>
          </ContentStyle>
        </Container>
      </Container>
    </Box>
  )
}

export default Hero
