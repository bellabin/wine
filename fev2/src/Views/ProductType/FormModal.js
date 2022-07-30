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
import {CreateProductType} from '../../services/Product'

export default class FormModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            data: {
                MALOAI:'',
                TENLOAI: '',
                

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
        await this.createProductType()
        this.close()
        
    }

    async createProductType() {
        const data = {
            MALOAI: '050',
            TENLOAI: this.state.data.TENLOAI,
        }
        console.log(data)
        await CreateProductType( data)

    }

    render = () => {
        return (
            <Dialog
                className='dialog create product type'

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
                    <DialogTitle>Product type form</DialogTitle>
                    <DialogContent>
                    <Box
                        sx={{
                            '& .MuiTextField-root': { m: 1 },
                        }}

                    >
                        <FormControl fullWidth >
                            <TextField
                                label="Tên"
                                InputProps={{
                                    name: "Ten"
                                }}
                                onChange={(e) => {
                                    this.setState({data: {...this.state.data,TENLOAI: e.target.value} })
                                }}

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