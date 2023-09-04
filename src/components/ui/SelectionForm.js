import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@mui/material'
import React, { useState } from 'react'
import { Buttons } from '../shared/CommonButton'
import LibraryAddIcon from '@mui/icons-material/LibraryAdd'

const SelectionForm = ({ onSet, selectedTest, selectedCategory }) => {
  const [selectedCenters, setSelectedCenters] = useState([])
  const [selectedBranches, setSelectedBranches] = useState([])
  const [price, setPrice] = useState(null)

  const [singleFormData, setSingleFormData] = useState({
    category: '',
    test: '',
    center: '',
    branches: '',
  })

  const handleChange = event => {
    const { name, value } = event.target
    setSingleFormData({ ...singleFormData, [name]: value, price })
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (
      !selectedCategory ||
      !singleFormData.test ||
      !singleFormData.center ||
      !singleFormData.branches
    ) {
      alert('Please fill all the fields')
      return
    }
    onSet(prev => {
      singleFormData.category = selectedCategory
      if (prev.length === 0) {
        return [singleFormData]
      } else {
        return [...prev, singleFormData]
      }
    })
    setSingleFormData({
      category: '',
      test: '',
      center: '',
      branches: '',
    })
  }

  const addAnother = () => {
    if (
      !selectedCategory ||
      !singleFormData.test ||
      !singleFormData.center ||
      !singleFormData.branches
    ) {
      alert('Please fill all the fields')
      return
    }

    onSet(prev => {
      singleFormData.category = selectedCategory
      if (prev.length === 0) {
        return [singleFormData]
      } else {
        return [...prev, singleFormData]
      }
    })
    setSingleFormData({
      category: '',
      test: '',
      center: '',
      branches: '',
    })
  }

  return (
    <Box>
      <Box sx={{ maxWidth: '100%' }}>
        <form className="mb-2">
          <Grid container spacing={2}>
            <Grid item xs={12}></Grid>

            {/* {selectedTest && selectedTest.length > 0 && ( */}
            <Grid item xs={12}>
              <FormControl fullWidth sx={{ maxWidth: '100%' }}>
                <InputLabel>Test</InputLabel>
                <Select
                  name="test"
                  label="Test"
                  value={singleFormData.test || ''}
                  onChange={handleChange}
                >
                  {selectedTest?.map((item, itemIndex) => (
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
            {/* )} */}

            {/* {selectedCenters && selectedCenters.length > 0 && ( */}
            <Grid item xs={12} md={6}>
              <FormControl fullWidth sx={{ maxWidth: '100%' }}>
                <InputLabel>Center</InputLabel>
                <Select
                  name="center"
                  label="Center"
                  value={singleFormData.center || ''}
                  onChange={handleChange}
                >
                  {selectedCenters?.map((item, itemIndex) => (
                    <MenuItem value={item.center} key={itemIndex}>
                      <Typography
                        style={{ display: 'block' }}
                        onClick={() => {
                          setSelectedBranches(item.branches)
                          setPrice(item.testPrice)
                        }}
                      >
                        {item.center}
                      </Typography>
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            {/* )} */}

            {/* {selectedBranches && selectedBranches.length > 0 && ( */}
            <Grid item xs={12} md={6}>
              <FormControl fullWidth sx={{ maxWidth: '100%' }}>
                <InputLabel>Branch</InputLabel>
                <Select
                  name="branches"
                  label="Branch"
                  value={singleFormData.branches || ''}
                  onChange={handleChange}
                >
                  {selectedBranches?.map((item, itemIndex) => (
                    <MenuItem value={item} key={itemIndex}>
                      <Typography style={{ display: 'block' }}>
                        {item}
                      </Typography>
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            {/* )} */}
          </Grid>
        </form>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Buttons.CommonSubmitButton func={handleSubmit} type="submit">
            Save
          </Buttons.CommonSubmitButton>
          {/* <LibraryAddIcon
            onClick={addAnother}
            sx={{
              color: '#4E4BE9',
              fontSize: 40,
              cursor: 'pointer',
            }}
          /> */}
        </Box>
      </Box>
    </Box>
  )
}

export default SelectionForm
