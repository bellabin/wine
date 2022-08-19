import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import { GetNVGH } from '../../services/Staff'
import { Select } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { UpdatePdById } from '../../services/Phieudat';
import { getUserProfileFromLS } from '../../helper/accessToken';


export default class FormModalDeleteBill extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            MANVGH:'',
            MANVD:'',
            MAPD: '',
            listSelect: [],
            data: {
                MAPD: '',
                NGAYDAT: '',
                HONN: '',
                TENNN: '',
                DIACHINN: '',
                SDTNN: '',
                GHICHU: '',
                TRANGTHAI: '',
                MANVD: '',
                MANVGH: '',
                MAKH: '',
                CTPDS: [],
            },
            
        }
    }

    // componentDidMount(){
    //     getUserProfileFromLS().then(res => {
    //         console.log(res.data)
    //     })
    // }

    Close = () => {
        this.setState({ open: false })
    }
    open = () => {
        this.setState({ open: true })
    }
    onSubmit = async (event) => {
        event.preventDefault()
        ///update lai pd
        const user = JSON.parse( getUserProfileFromLS())
        let tempData = {
            MAPD: '',
            NGAYDAT: '',
            HONN: '',
            TENNN: '',
            DIACHINN: '',
            SDTNN: '',
            GHICHU: '',
            TRANGTHAI: '',
            MANVD: user.MANV,
            MANVGH: '',
            MAKH: '',
            CTPDS: [],
        }
        if(this.state.data.TRANGTHAI === 'Chưa duyệt' ){
            tempData = {
                MAPD: this.state.data.MAPD,
                NGAYDAT: this.state.data.NGAYDAT,
                HONN: this.state.data.HONN,
                TENNN: this.state.data.TENNN,
                DIACHINN: this.state.data.DIACHINN,
                SDTNN: this.state.data.SDTNN,
                GHICHU: this.state.data.GHICHU,
                TRANGTHAI: 'Đã phân công',
                MANVD: user.MANV,
                MANVGH: this.state.MANVGH,
                MAKH: this.state.data.MAKH,
                CTPDS: this.state.data.CTPDS,
            }
        }
        
        UpdatePdById(this.state.MAPD, tempData)
        this.Close()
    }

    Delete(MAPD,listNVGH, row) {
        
        
        let listTemp = []
        listNVGH.map(cur => {
            listTemp.push({key:cur.MANV,value:cur.HO.concat(' ').concat(cur.TEN)})
        })

        

        this.setState({ 
            MAPD: MAPD, 
            //listNVGH: listNVGH,
            listSelect: listTemp,
            data: {
                MAPD: row.MAPD,
                NGAYDAT: row.NGAYDAT,
                HONN: row.HONN,
                TENNN: row.TENNN,
                DIACHINN: row.DIACHINN,
                SDTNN: row.SDTNN,
                GHICHU: row.GHICHU,
                TRANGTHAI: row.TRANGTHAI,
                MANVD: row.MANVD,
                MANVGH: row.MANVGH,
                MAKH: row.MAKH,
                CTPDS: row.ct_phieudats
            },
            
        })

        
        
        
    }

    handleChange = (event) => {
        this.setState({MANVGH:event.target.value})
       
    };

    

    render = () => {
        return (
            <Dialog
                className='dialog delete bill'
                fullWidth
                maxWidth={'md'}
                open={this.state.open}
                onClose={this.Close}
            >
                <form
                    noValidate
                    autoComplete="off"
                    onSubmit={this.onSubmit}
                >
                    <DialogTitle>Duyệt đơn</DialogTitle>
                    <DialogContent >
                        <FormControl fullWidth style={{marginTop:'20px'}}>
                            <InputLabel id="demo-simple-select-label">Chọn nhân viên giao</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={this.state.MANVGH}
                                label="Chọn nhân viên giao"
                                onChange={(e) => this.handleChange(e)}
                            >
                                

                                {this.state.listSelect.map((cur) => {
                                    return(
                                    <MenuItem value={cur.key}>{cur.value}</MenuItem>)
                                })}
                                
                                
                            </Select>
                        </FormControl>
                    </DialogContent>
                    <DialogActions>
                        <Button type='submit' color='success' variant='contained' onClick={this.onSubmit} >Submit</Button>
                        <Button onClick={this.Close}>Close</Button>
                    </DialogActions>
                </form>
            </Dialog>
        );
    }

}
