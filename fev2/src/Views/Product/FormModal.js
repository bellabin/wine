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
import { async } from 'q';
import {CreateProduct} from '../../services/Product'

export default class FormModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            data: {
                MADONG:'',
                TENDONG: '',
                GIA: '',
                TRANGTHAI:'',
                HINHANH:'',
                MOTA:'',
                CHITIET:'',
                SOLUONGTON: '',
                MALOAI: '',
                MATH:'',
                MANCC:'',
            },
        }
    }

    

    Close = () => {
        this.setState({ open: false })
    }
    open = () => {
        this.setState({ open: true })
    }

    


    onSubmit = async (event) => {
        event.preventDefault()
        console.log(this.state.data)
        await this.createProduct()
        this.close()
        
    }

    async createProduct() {
        const data = {
            MADONG: '050',
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
        console.log(data)
        await CreateProduct( data)

    }

    render = () => {
        return (
            <Dialog
                className='dialog create product'
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
                    <DialogTitle>Product form</DialogTitle>
                    <DialogContent>
                    <Box
                        sx={{
                            '& .MuiTextField-root': { m: 1 },
                        }}

                    >
                        <FormControl fullWidth >
                            <TextField
                                label="Tên dòng"
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
                                InputProps={{
                                    name: "gia"
                                }}
                                onChange={(e) => this.setState({data:{ ...this.state.data,GIA: e.target.value} })}

                            />
                        </FormControl>
                        <FormControl fullWidth >
                            <TextField
                                label="Trạng thái"
                                InputProps={{
                                    name: "trangthai"
                                }}
                                onChange={(e) => this.setState({data: {...this.state.data,TRANGTHAI: e.target.value} })}

                            />
                        </FormControl>
                        <FormControl fullWidth >
                            <TextField
                                InputProps={{
                                    name: "hinhanh"
                                }}
                                type='file'
                                onChange={(e) => this.setState({data: {...this.state.data, HINHANH: `img/${e.target.files[0].name}` }})}

                            />
                        </FormControl>
                        <FormControl fullWidth >
                            <TextField
                                label="Mô tả"
                                InputProps={{
                                    name: "mota"
                                }}
                                onChange={(e) => this.setState({data: {...this.state.data,MOTA: e.target.value} })}

                            />
                        </FormControl>
                        <FormControl fullWidth >
                            <TextField
                                label="Chi tiết"
                                InputProps={{
                                    name: "chitiet"
                                }}
                                onChange={(e) => this.setState({data: {...this.state.data,CHITIET: e.target.value} })}

                            />
                        </FormControl>
                        <FormControl fullWidth >
                            <TextField
                                label="Số lượng tồn"
                                InputProps={{
                                    name: "soluongton"
                                }}
                                onChange={(e) => this.setState({data: {...this.state.data,SOLUONGTON: e.target.value} })}

                            />
                        </FormControl>
                        <FormControl fullWidth >
                            <TextField
                                label="Mã loại"
                                InputProps={{
                                    name: "Diachi"
                                }}
                                onChange={(e) => this.setState({data: {...this.state.data,MALOAI: e.target.value} })}

                            />
                        </FormControl>
                        <FormControl fullWidth >
                            <TextField
                                label="Mã thương hiệu"
                                InputProps={{
                                    name: "Diachi"
                                }}
                                onChange={(e) => this.setState({data: {...this.state.data,MATH: e.target.value} })}

                            />
                        </FormControl>
                        <FormControl fullWidth >
                            <TextField
                                label="Mã nhà cung cấp"
                                InputProps={{
                                    name: "Diachi"
                                }}
                                onChange={(e) => this.setState({data: {...this.state.data,MANCC: e.target.value} })}

                            />
                        </FormControl>
                    </Box>
                    </DialogContent>
                    <DialogActions>
                        <Button type='submit' color='success' variant='contained'>Submit</Button>
                        <Button onClick={this.Close}>Close</Button>
                    </DialogActions>
                </form>
            </Dialog>
        );
    }

}
