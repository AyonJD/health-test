import { FAKE_DATA } from '@/constant/fakeData'
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@mui/material'
import React, { useState } from 'react'

const SelectionForm = () => {
  const [selectedTest, setSelectedTest] = useState('')
  const [selectedCenters, setSelectedCenters] = useState('')
  const [selectedBranches, setSelectedBranches] = useState('')

  const [formData, setFormData] = useState({
    category: '',
    test: '',
    center: '',
    branches: '',
  })

  const handleChange = event => {
    const { name, value } = event.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = event => {
    event.preventDefault()
    console.log(formData)
  }

  return (
    <Box>
      <Box sx={{ maxWidth: '100%' }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              md={selectedTest && selectedTest.length > 0 ? 6 : 12}
            >
              <FormControl fullWidth sx={{ maxWidth: '100%' }}>
                <InputLabel>Category</InputLabel>
                <Select
                  name="category"
                  label="Category"
                  value={formData.category || ''}
                  onChange={handleChange}
                >
                  {FAKE_DATA.map((item, itemIndex) => (
                    <MenuItem value={item.category} key={itemIndex}>
                      <Typography
                        style={{ display: 'block' }}
                        onClick={() => setSelectedTest(item.tests)}
                      >
                        {item.category}
                      </Typography>
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            {selectedTest && selectedTest.length > 0 && (
              <Grid item xs={12} md={6}>
                <FormControl fullWidth sx={{ maxWidth: '100%' }}>
                  <InputLabel>Test</InputLabel>
                  <Select
                    name="test"
                    label="Test"
                    value={formData.test || ''}
                    onChange={handleChange}
                  >
                    {selectedTest.map((item, itemIndex) => (
                      <MenuItem value={item.test} key={itemIndex}>
                        <Typography
                          style={{ display: 'block' }}
                          onClick={() => setSelectedCenters(item.centers)}
                        >
                          {item.test}
                        </Typography>
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            )}

            {selectedCenters && selectedCenters.length > 0 && (
              <Grid
                item
                xs={12}
                md={
                  selectedBranches && selectedBranches.length > 0 > 0 ? 6 : 12
                }
              >
                <FormControl fullWidth sx={{ maxWidth: '100%' }}>
                  <InputLabel>Center</InputLabel>
                  <Select
                    name="center"
                    label="Center"
                    value={formData.center || ''}
                    onChange={handleChange}
                  >
                    {selectedCenters.map((item, itemIndex) => (
                      <MenuItem value={item.center} key={itemIndex}>
                        <Typography
                          style={{ display: 'block' }}
                          onClick={() => setSelectedBranches(item.branches)}
                        >
                          {item.center}
                        </Typography>
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            )}

            {selectedBranches && selectedBranches.length > 0 && (
              <Grid item xs={12} md={6}>
                <FormControl fullWidth sx={{ maxWidth: '100%' }}>
                  <InputLabel>Branch</InputLabel>
                  <Select
                    name="branches"
                    label="Branch"
                    value={formData.branches || ''}
                    onChange={handleChange}
                  >
                    {selectedBranches.map((item, itemIndex) => (
                      <MenuItem value={item} key={itemIndex}>
                        <Typography style={{ display: 'block' }}>
                          {item}
                        </Typography>
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            )}
          </Grid>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ marginTop: 4 }}
          >
            Submit
          </Button>
        </form>
      </Box>
    </Box>
  )
}

export default SelectionForm
