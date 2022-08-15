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
import { GetListProvider, UpdateProviderById } from '../../services/Provider'
import { UpdateProductById } from '../../services/Product'



export default class FormModalEditProduct extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            data: {
                MADONG: '',
                TENDONG: '',
                GIA: 0,
                TRANGTHAI: '',
                HINHANH: '',
                MOTA: '',
                CHITIET: '',
                SOLUONGTON: 0,
                MALOAI: '',
                MATH: '',
                MANCC: '',
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
                MADONG: row.MADONG,
                TENDONG: row.TENDONG,
                GIA: row.GIA,
                TRANGTHAI: row.TRANGTHAI,
                HINHANH: row.HINHANH,
                MOTA: row.MOTA,
                CHITIET: row.CHITIET,
                SOLUONGTON: row.SOLUONGTON,
                MALOAI: row.MALOAI,
                MATH: row.MATH,
                MANCC: row.MANCC,
            }
        })


    }



    onSubmit = async (event) => {
        event.preventDefault()

        // const formData = Array.from(new FormData(event.target))
        // console.log(formData)
        console.log(this.state.data)
        await this.updateProduct()
        this.Close()
    }





    ///api
    async updateProduct() {
        const data = {
            TENDONG: this.state.data.TENDONG,
            GIA: this.state.data.GIA,
            TRANGTHAI: this.state.data.TRANGTHAI,
            HINHANH: this.state.data.HINHANH,
            MOTA: this.state.data.MOTA,
            CHITIET: this.state.data.CHITIET,
            SOLUONGTON: this.state.data.SOLUONGTON,
            MALOAI: this.state.data.MALOAI,
            MATH: this.state.data.MATH,
            MANCC: this.state.data.MANCC,


        }
        await UpdateProductById(this.state.data.MADONG, data)

    }



    render = () => {
        return (
            <Dialog
                className='dialog edit product'

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
                    <DialogTitle>Product edit form</DialogTitle>
                    <DialogContent>
                        <Box
                            sx={{
                                '& .MuiTextField-root': { m: 1 },
                            }}

                        >
                            <FormControl fullWidth >
                            <TextField
                                label="Tên dòng"
                                defaultValue={Object(this.state.data.TENDONG).length && this.state.data.TENDONG}
                                InputProps={{
                                    name: "tendong"
                                }}
                                onChange={(e) => {
                                    this.setState({data: {...this.state.data,TENDONG: e.target.value} })
                                }}

                            />
                        </FormControl>
                        <FormControl fullWidth >
                            <TextField
                                label="Giá"
                                defaultValue={Object(this.state.data.GIA).length && this.state.data.GIA}
                                InputProps={{
                                    name: "gia"
                                }}
                                onChange={(e) => this.setState({data:{ ...this.state.data,GIA: e.target.value} })}

                            />
                        </FormControl>
                        <FormControl fullWidth >
                            <TextField
                                label="Trạng thái"
                                defaultValue={Object(this.state.data.TRANGTHAI).length && this.state.data.TRANGTHAI}
                                InputProps={{
                                    name: "trangthai"
                                }}
                                onChange={(e) => this.setState({data: {...this.state.data,TRANGTHAI: e.target.value} })}

                            />
                        </FormControl>
                        <FormControl fullWidth >
                            <TextField
                                label="Hình ảnh"
                                defaultValue={Object(this.state.data.HINHANH).length && this.state.data.HINHANH}
                                InputProps={{
                                    name: "hinhanh"
                                }}
                                onChange={(e) => this.setState({data: {...this.state.data,HINHANH: e.target.value} })}

                            />
                        </FormControl>
                        <FormControl fullWidth >
                            <TextField
                                label="Mô tả"
                                defaultValue={Object(this.state.data.MOTA).length && this.state.data.MOTA}
                                InputProps={{
                                    name: "mota"
                                }}
                                onChange={(e) => this.setState({data: {...this.state.data,MOTA: e.target.value} })}

                            />
                        </FormControl>
                        <FormControl fullWidth >
                            <TextField
                                label="Chi tiết"
                                defaultValue={Object(this.state.data.CHITIET).length && this.state.data.CHITET}
                                InputProps={{
                                    name: "chitiet"
                                }}
                                onChange={(e) => this.setState({data: {...this.state.data,CHITIET: e.target.value} })}

                            />
                        </FormControl>
                        <FormControl fullWidth >
                            <TextField
                                label="Số lượng tồn"
                                defaultValue={Object(this.state.data.SOLUONGTON).length && this.state.data.SOLUONGTON}
                                InputProps={{
                                    name: "soluongton"
                                }}
                                onChange={(e) => this.setState({data: {...this.state.data,SOLUONGTON: e.target.value} })}

                            />
                        </FormControl>
                        <FormControl fullWidth >
                            <TextField
                                label="Mã loại"
                                defaultValue={Object(this.state.data.MALOAI).length && this.state.data.MALOAI}
                                InputProps={{
                                    name: "maloai"
                                }}
                                onChange={(e) => this.setState({data: {...this.state.data,MALOAI: e.target.value} })}

                            />
                        </FormControl>
                        <FormControl fullWidth >
                            <TextField
                                label="Mã thương hiệu"
                                defaultValue={Object(this.state.data.MATH).length && this.state.data.MATH}
                                InputProps={{
                                    name: "math"
                                }}
                                onChange={(e) => this.setState({data: {...this.state.data,MATH: e.target.value} })}

                            />
                        </FormControl>
                        <FormControl fullWidth >
                            <TextField
                                label="Mã nhà cung cấp"
                                defaultValue={Object(this.state.data.MANCC).length && this.state.data.MANCC}
                                InputProps={{
                                    name: "mancc"
                                }}
                                onChange={(e) => this.setState({data: {...this.state.data,MANCC: e.target.value} })}

                            />
                        </FormControl>
                        </Box>
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
