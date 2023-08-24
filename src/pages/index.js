import MainNav from '@/components/shared/MainNav'
import Hero from '@/components/ui/Hero'
import HeroCard from '@/components/ui/HeroCard'
import SelectionForm from '@/components/ui/SelectionForm'
import { COLORS } from '@/constant/color'
import {
  Box,
  Card,
  Container,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import { gsap } from 'gsap'
import { useEffect, useState } from 'react'

export default function Home() {
  const [formData, setFormData] = useState([])

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

  console.log(formData)

  return (
    <>
      <Box className="hero_section">
        <MainNav />
        <Hero />
      </Box>
      <HeroCard />

      <Container maxWidth="lg" sx={{ my: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Card sx={{ mb: 3, p: 2 }}>
              <Typography
                variant="h5"
                component="h1"
                paragraph
                className="font-semibold"
              >
                Add Test
              </Typography>

              <SelectionForm onSet={setFormData} />
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ mb: 3, p: 2 }}>
              <Typography
                variant="h5"
                component="h1"
                paragraph
                className="font-semibold"
              >
                Test List
              </Typography>

              <TableContainer
                sx={{
                  borderRadius: 2,
                  borderWidth: 1,
                  borderStyle: 'solid',
                  borderLeft: 0,
                  borderRight: 0,
                  borderTop: 0,
                  paddingBottom: 2,
                }}
              >
                <Table sx={{ background: '#B2BEB5' }}>
                  <TableHead>
                    <TableRow>
                      <TableCell
                        sx={{ background: '#000', whiteSpace: 'nowrap' }}
                        className="text_white"
                      >
                        Serial
                      </TableCell>
                      <TableCell
                        sx={{ background: '#000', whiteSpace: 'nowrap' }}
                        className="text_white"
                        align="center"
                      >
                        Category
                      </TableCell>
                      <TableCell
                        sx={{ background: '#000', whiteSpace: 'nowrap' }}
                        className="text_white"
                        align="center"
                      >
                        Test
                      </TableCell>
                      <TableCell
                        sx={{ background: '#000', whiteSpace: 'nowrap' }}
                        className="text_white"
                        align="center"
                      >
                        Center
                      </TableCell>
                      <TableCell
                        sx={{ background: '#000', whiteSpace: 'nowrap' }}
                        className="text_white"
                        align="center"
                      >
                        Branch
                      </TableCell>
                      <TableCell
                        sx={{ background: '#000', whiteSpace: 'nowrap' }}
                        className="text_white"
                        align="right"
                      >
                        Price
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {formData.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell>{index}</TableCell>
                        <TableCell align="center">{row.category}</TableCell>
                        <TableCell align="center">{row.test}</TableCell>
                        <TableCell align="center">{row.center}</TableCell>
                        <TableCell align="center">{row.branches}</TableCell>
                        <TableCell align="right">{row.price}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>

              {/* <Typography
                sx={{ textAlign: 'right', marginRight: 2, marginTop: 2 }}
                variant="h6"
                component="h6"
                paragraph
              >
                {`Subtotal: ${allProducts.reduce(
                  (acc, cur) => acc + cur.number * cur.price,
                  0
                )}`}
              </Typography> */}
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}
