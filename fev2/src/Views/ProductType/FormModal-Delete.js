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
import { GetListProvider, DeleteProviderById } from '../../services/Provider'
import { DeleteProductTypeById } from '../../services/Product'



export default class FormModalDelete extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            MALOAI:''
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
        
        await DeleteProductTypeById(this.state.MALOAI)
        this.Close()
    }

    Delete(MALOAI){

        this.setState({MALOAI: MALOAI})

    }
    render = () => {
        return (
            <Dialog
                className='dialog delete product type'
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
                    
                    <DialogActions>
                        <Button type='submit' color='success' variant='contained' onClick={this.onSubmit} >Submit</Button>
                        <Button onClick={this.close}>Close</Button>
                    </DialogActions>
                </form>
            </Dialog>
        );
    }

}
