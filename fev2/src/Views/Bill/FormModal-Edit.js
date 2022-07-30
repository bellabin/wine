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
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Switch from '@mui/material/Switch';
import { useState, useEffect } from 'react'
import { UpdateBillById } from '../../services/Bill';


export default class FormModalEditBill extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            data: {
                MAHD:'',
                NGAY: '',
                THANHTIEN: '',
                MASOTHUE: '',
                MANV: '',
                MAPD:'',

            },
        }
    }
    Close = () => {
        this.setState({ open: false })
    }
    open = () => {
        this.setState({ open: true })
    }
    Edit(row) {


        this.setState({
            data: {
                MAHD: row.MAHD,
                NGAY: row.NGAY,
                THANHTIEN: row.THANHTIEN,
                MASOTHUE: row.MASOTHUE,
                MANV: row.MANV,
                MAPD: row.MAPD,
            }
        })
        // this.setState({data: {SDT: row.SDT}})
        // this.setState({data: {EMAIL: row.EMAIL}})
        // this.setState({data: {DIACHI: row.DIACHI}})
        // console.log('f',this.state.data.EMAIL)


    }



    onSubmit = async (event) => {
        event.preventDefault()

        // const formData = Array.from(new FormData(event.target))
        // console.log(formData)
        console.log(this.state.data)
        await this.updateBill()
        this.Close()
    }





    ///api
    async updateBill() {
        const data = {
            NGAY: this.state.data.NGAY,
            THANHTIEN: this.state.data.THANHTIEN,
            MASOTHUE: this.state.data.MASOTHUE,
            MANV: this.state.data.MANV,
            MAPD: this.state.data.MAPD,

        }
        await UpdateBillById(this.state.data.MAHD, data)

    }



render = () => {
    return (
        <Dialog
            className='dialog edit bill'

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
                <DialogTitle>Bill update form</DialogTitle>
                <DialogContent>
                    <Box
                        sx={{
                            '& .MuiTextField-root': { m: 1 },
                        }}

                    >
                        <FormControl fullWidth >
                            <TextField
                                label="Ngày"
                                defaultValue={Object(this.state.data.NGAY).length && this.state.data.NGAY}
                                InputProps={{
                                    name: "Ten"
                                }}
                                onChange={(e) => {
                                    this.setState({data: {...this.state.data,NGAY: e.target.value} })
                                }}

                            />
                        </FormControl>
                        <FormControl fullWidth >
                            <TextField
                                label="Thành tiền"
                                defaultValue={Object(this.state.data.THANHTIEN).length && this.state.data.THANHTIEN}
                                InputProps={{
                                    name: "SDT"
                                }}
                                onChange={(e) => this.setState({data:{ ...this.state.data,THANHTIEN: e.target.value} })}

                            />
                        </FormControl>
                        <FormControl fullWidth >
                            <TextField
                                label="Mã số thuế"
                                defaultValue={Object(this.state.data.MASOTHUE).length && this.state.data.MASOTHUE}
                                InputProps={{
                                    name: "Email"
                                }}
                                onChange={(e) => this.setState({data: {...this.state.data,MASOTHUE: e.target.value} })}

                            />
                        </FormControl>
                        <FormControl fullWidth >
                            <TextField
                                label="Mã nhân viên"
                                defaultValue={Object(this.state.data.MANV).length && this.state.data.MANV}
                                InputProps={{
                                    name: "Diachi"
                                }}
                                onChange={(e) => this.setState({data: {...this.state.data,MANV: e.target.value} })}

                            />
                        </FormControl>
                        <FormControl fullWidth >
                            <TextField
                                label="Mã phiếu đặt"
                                defaultValue={Object(this.state.data.MAPD).length && this.state.data.MAPD}
                                InputProps={{
                                    name: "Diachi"
                                }}
                                onChange={(e) => this.setState({data: {...this.state.data,MAPD: e.target.value} })}

                            />
                        </FormControl>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button type='submit' color='success' variant='contained' onClick={this.onSubmit} >Submit</Button>
                    <Button onClick={this.close}>Close</Button>
                </DialogActions>
            </form>
        </Dialog>
    );
}

}
