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
import {CreatePromo} from '../../services/Promo'

export default class FormModalPromo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            data: {
                MAKM:'',
                TENKM: '',
                NGAYBATDAU: '',
                NGAYKETTHUC: '',
                LIDO: '',
                MANV:'',

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
        await this.createPromo()
        this.close()
        
    }

    async createPromo() {
        const data = {
            MAKM: '050',
            TENKM: this.state.data.TENKM,
            NGAYBATDAU: this.state.data.NGAYBATDAU,
            NGAYKETTHUC: this.state.data.NGAYKETTHUC,
            LIDO: this.state.data.LIDO,
            MANV: this.state.data.MANV,

        }
        console.log(data)
        await CreatePromo( data)

    }

    render = () => {
        return (
            <Dialog
                className='dialog create promo'
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
                    <DialogTitle>Promotion form</DialogTitle>
                    <DialogContent>
                    <Box
                        sx={{
                            '& .MuiTextField-root': { m: 1 },
                        }}

                    >
                        <FormControl fullWidth >
                            <TextField
                                label="Tên KM"
                                InputProps={{
                                    name: "Ten"
                                }}
                                onChange={(e) => {
                                    this.setState({data: {...this.state.data,TENKM: e.target.value} })
                                }}

                            />
                        </FormControl>
                        <FormControl fullWidth >
                            <TextField
                                label="Ngày bắt đầu"
                                InputProps={{
                                    name: "SDT"
                                }}
                                onChange={(e) => this.setState({data:{ ...this.state.data,NGAYBATDAU: e.target.value} })}

                            />
                        </FormControl>
                        <FormControl fullWidth >
                            <TextField
                                label="Ngày kết thúc"
                                InputProps={{
                                    name: "Email"
                                }}
                                onChange={(e) => this.setState({data: {...this.state.data,NGAYKETTHUC: e.target.value} })}

                            />
                        </FormControl>
                        <FormControl fullWidth >
                            <TextField
                                label="Lí do"
                                InputProps={{
                                    name: "Diachi"
                                }}
                                onChange={(e) => this.setState({data: {...this.state.data,LIDO: e.target.value} })}

                            />
                        </FormControl>
                        <FormControl fullWidth >
                            <TextField
                                label="Mã NV"
                                InputProps={{
                                    name: "Diachi"
                                }}
                                onChange={(e) => this.setState({data: {...this.state.data,MANV: e.target.value} })}

                            />
                        </FormControl>
                    </Box>
                    </DialogContent>
                    <DialogActions>
                        <Button type='submit' color='success' variant='contained'>Submit</Button>
                        <Button onClick={this.close}>Close</Button>
                    </DialogActions>
                </form>
            </Dialog>
        );
    }

}
