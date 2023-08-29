import { Buttons } from '@/components/shared/CommonButton'
import MainNav from '@/components/shared/MainNav'
import Hero from '@/components/ui/Hero'
// import HeroCard from '@/components/ui/HeroCard'
import SelectionForm from '@/components/ui/SelectionForm'
import { COLORS } from '@/constant/color'
import { FAKE_DATA } from '@/constant/fakeData'
import {
  Box,
  Button,
  Card,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from '@mui/material'
import { gsap } from 'gsap'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function Home() {
  const router = useRouter()
  const [selectedIndex, setSelectedIndex] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('')
  const [testId, setTestId] = useState('')

  const [formData, setFormData] = useState([])
  const [subtotal, setSubtotal] = useState(0)
  const [executive, setExecutive] = useState('')

  const [selectedTest, setSelectedTest] = useState([])

  useEffect(() => {
    setSubtotal(formData.reduce((acc, cur) => acc + cur.price, 0))
  }, [formData])

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

  const handlePrint = () => {
    if (formData.length === 0) {
      alert('Please add test first')
      return
    }

    const dataArray = encodeURIComponent(JSON.stringify(formData))
    const subtotalParam = encodeURIComponent(subtotal)
    const executiveParam = encodeURIComponent(executive)
    const testIdParam = encodeURIComponent(testId)

    router.push({
      pathname: '/invoice',
      query: {
        dataArray,
        subtotal: subtotalParam,
        executive: executiveParam,
        testId: testIdParam,
      },
    })
  }

  return (
    <>
      <Box className="hero_section ">
        <MainNav />
        <Hero />
      </Box>
      {/* <HeroCard /> */}
      <Box className="bg-[#e2e1e0] ">
        <Container maxWidth="lg" sx={{ py: 4, mt: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sx={{ textAlign: 'center' }}>
              {FAKE_DATA.map((item, itemIndex) => (
                <Button
                  className={`category_button ${
                    selectedIndex === itemIndex ? 'active_category' : ''
                  }`}
                  key={itemIndex}
                  variant="outlined"
                  color="primary"
                  size="small"
                  sx={{ marginRight: 1, marginBottom: 1 }}
                  onClick={() => {
                    setSelectedTest(item.tests)
                    setSelectedIndex(itemIndex)
                    setSelectedCategory(item.category)
                  }}
                >
                  {item.category}
                </Button>
              ))}
            </Grid>

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

                <SelectionForm
                  onSet={setFormData}
                  selectedTest={selectedTest}
                  setSelectedTest={setSelectedTest}
                  selectedCategory={selectedCategory}
                />
              </Card>

              <Card
                sx={{
                  mt: 3,
                  p: 2,
                }}
              >
                <TextField
                  sx={{ width: '100%', marginBottom: 2 }}
                  label="Manual Test ID"
                  variant="outlined"
                  onChange={e => setTestId(e.target.value)}
                />

                <FormControl fullWidth sx={{ maxWidth: '100%' }}>
                  <InputLabel>Select Executive</InputLabel>
                  <Select
                    label="Select Executive"
                    name="executive"
                    value={executive || ''}
                    onChange={e => setExecutive(e.target.value)}
                  >
                    <MenuItem value="Executive 1">Executive 1</MenuItem>
                    <MenuItem value="Executive 2">Executive 2</MenuItem>
                    <MenuItem value="Executive 3">Executive 3</MenuItem>
                  </Select>
                </FormControl>

                <Buttons.CommonButton func={handlePrint}>
                  Print
                </Buttons.CommonButton>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  mb: 3,
                  p: 2,
                }}
              >
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
                    height: formData.length === 0 ? '468px' : '355px',
                    overflowY: 'scroll',
                  }}
                >
                  <Table
                    sx={{
                      background: '#B2BEB5',
                    }}
                  >
                    <TableHead>
                      <TableRow>
                        <TableCell
                          sx={{ background: '#05272D', whiteSpace: 'nowrap' }}
                          className="text_white"
                        >
                          Serial
                        </TableCell>
                        <TableCell
                          sx={{ background: '#05272D', whiteSpace: 'nowrap' }}
                          className="text_white"
                          align="center"
                        >
                          Category
                        </TableCell>
                        <TableCell
                          sx={{ background: '#05272D', whiteSpace: 'nowrap' }}
                          className="text_white"
                          align="center"
                        >
                          Test
                        </TableCell>
                        <TableCell
                          sx={{ background: '#05272D', whiteSpace: 'nowrap' }}
                          className="text_white"
                          align="center"
                        >
                          Center
                        </TableCell>
                        <TableCell
                          sx={{ background: '#05272D', whiteSpace: 'nowrap' }}
                          className="text_white"
                          align="center"
                        >
                          Branch
                        </TableCell>
                        <TableCell
                          sx={{ background: '#05272D', whiteSpace: 'nowrap' }}
                          className="text_white"
                          align="right"
                        >
                          Price
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    {formData.length === 0 ? (
                      <TableBody>
                        <TableRow>
                          <TableCell colSpan={6} align="center">
                            No Data Found
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    ) : (
                      <TableBody>
                        {formData.map((row, index) => (
                          <TableRow key={index}>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell align="center">{row.category}</TableCell>
                            <TableCell align="center">{row.test}</TableCell>
                            <TableCell align="center">{row.center}</TableCell>
                            <TableCell align="center">{row.branches}</TableCell>
                            <TableCell align="right">{row.price}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    )}
                  </Table>
                </TableContainer>
                {formData.length !== 0 && (
                  <>
                    <Typography
                      sx={{ textAlign: 'right', marginRight: 2, marginTop: 2 }}
                      variant="body"
                      className="font-semibold"
                      paragraph
                    >
                      {`Subtotal: ${subtotal}`}
                    </Typography>

                    <TextField
                      sx={{ width: '100%' }}
                      label="Subtotal"
                      variant="outlined"
                      value={subtotal}
                      onChange={e => setSubtotal(e.target.value)}
                    />
                  </>
                )}
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}
