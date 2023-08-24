import { COLORS } from '@/constant/color'
import { Container, Grid, Box, Typography } from '@mui/material'

const Hero = () => {
  return (
    <Box>
      <Container>
        <Grid container className="pt-4 pb-5">
          <Grid item xs={12} md={8} gap={2}>
            <Box className="flex items-center ">
              <Typography
                sx={{
                  color: 'white',
                  fontWeight: '600',
                  fontSize: {
                    xs: '2rem',
                    md: '3.8rem',
                  },
                }}
              >
                Best Result
              </Typography>
              <Box
                sx={{
                  display: {
                    xs: 'none',
                    md: 'inline-block',
                  },
                }}
                className="h-14 w-1 bg-white ml-[auto] mr-[auto]"
              ></Box>
            </Box>

            <Box className="flex items-center ">
              <Box sx={{ display: 'inline-block', marginRight: 5 }}>
                <Typography
                  variant="body2"
                  sx={{ color: 'white', fontSize: 12 }}
                >
                  Established
                </Typography>
                <Typography
                  sx={{ color: 'white', fontSize: 27, fontWeight: '600' }}
                >
                  2019
                </Typography>
              </Box>

              <Typography
                sx={{
                  color: 'white',
                  fontWeight: '600',
                  fontSize: {
                    xs: '2rem',
                    md: '3.8rem',
                  },
                }}
              >
                In <span style={{ color: `${COLORS.PRIMARY}` }}>RMS</span>
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Grid container>
              <Grid item xs={12} sx={{ mb: 3 }}>
                <Typography
                  sx={{
                    color: 'white',
                    fontSize: 15,
                    textAlign: 'justify',
                    mt: 2,
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias reiciendis exercitationem quoLorem ipsum dolor sit
                  amet consectetur adipisicing adipisicing elit.
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography
                  sx={{
                    color: 'white',
                    fontSize: 20,
                    textAlign: 'justify',
                    fontWeight: 'bold',
                  }}
                >
                  80K <span className="text-[#34C9B0]">+</span>
                </Typography>
                <Typography
                  sx={{
                    color: 'white',
                    fontSize: 12,
                    textAlign: 'justify',
                  }}
                >
                  Patients
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography
                  sx={{
                    color: 'white',
                    fontSize: 20,
                    textAlign: 'justify',
                    fontWeight: 'bold',
                  }}
                >
                  54K <span className="text-[#34C9B0]">+</span>
                </Typography>
                <Typography
                  sx={{
                    color: 'white',
                    fontSize: 12,
                    textAlign: 'justify',
                  }}
                >
                  Tests
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography
                  sx={{
                    color: 'white',
                    fontSize: 20,
                    textAlign: 'justify',
                    fontWeight: 'bold',
                  }}
                >
                  200K <span className="text-[#34C9B0]">+</span>
                </Typography>
                <Typography
                  sx={{
                    color: 'white',
                    fontSize: 12,
                    textAlign: 'justify',
                  }}
                >
                  Positive Reviews
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Hero
