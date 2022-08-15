import React, { Component } from 'react'
import { Box, Button, TableRow, TableContainer } from '@mui/material'
import Table from './Table'
import FormModalBill from './FormModal'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default class Bill extends Component {
  constructor (props) {
    super(props)
    this.state={
      filter:'ALL',
    }
  }
  handleChange = (e) => {
    console.log('loop')
    this.setState({filter: e.target.value})
  }
  onCreate = () => {
    this.refModal?.open()
    //this.refModal.Create()
  }
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <Box>
            <FormLabel id="demo-row-radio-buttons-group-label">Lọc theo: </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={this.state.filter}
              onChange={(e) => this.handleChange(e)}
            >
              <FormControlLabel value="ALL" control={<Radio />} label="Tất cả" />
              <FormControlLabel value="Chưa duyệt" control={<Radio />} label="Chưa duyệt" />
              <FormControlLabel value="Chưa phân công" control={<Radio />} label="Chưa phân công" />
              <FormControlLabel value="Đã phân công" control={<Radio />} label="Đã phân công" />
              <FormControlLabel value="Đã giao" control={<Radio />} label="Đã giao hàng" />
              <FormControlLabel value="Đã huỷ" control={<Radio />} label="Đã huỷ" />
            </RadioGroup>
          </Box>
          {/* <Box className='col-6' sx={{ display: 'flex' }}>
                    </Box>
                    <Box className='col-6' sx={{ display: 'flex' }}>
                    <Button onClick={this.onCreate} variant="contained">Create</Button>
                        
                    </Box> */}
        </div>
        <div className='row mt-2'>
          <div className='col-12'>
            <Table filter={this.state.filter}/>
          </div>
        </div>
      </div>
    )
  }
}
