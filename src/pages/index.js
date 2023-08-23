import MainNav from '@/components/shared/MainNav'
import Hero from '@/components/ui/Hero'
import HeroCard from '@/components/ui/HeroCard'
import SelectionForm from '@/components/ui/SelectionForm'
import { COLORS } from '@/constant/color'
import { Box, Container, Grid } from '@mui/material'
import { gsap } from 'gsap'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    const navbar = document.querySelector('#navbar')
    const timeline = gsap.timeline({ paused: true })

    timeline.to(navbar, { backgroundColor: COLORS.SECONDARY })

    const scrollListener = () => {
      if (window.scrollY === 0) {
        timeline.reverse()
      } else {
        timeline.play()
      }
    }

    window.addEventListener('scroll', scrollListener)

    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, [])

  return (
    <>
      <Box className="hero_section">
        <MainNav />
        <Hero />
      </Box>
      <HeroCard />

      <Container maxWidth="lg" sx={{my: 4}}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <SelectionForm />
          </Grid>
          <Grid item xs={12} sm={6}></Grid>
        </Grid>
      </Container>
    </>
  )
}
