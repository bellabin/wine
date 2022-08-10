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
import {CreateProvider} from '../../services/Provider'
import { GetListProduct, UpdateProductById } from '../../services/Product';
import { GetListPromo } from '../../services/Promo';
import { UpdateCtPromoById } from '../../services/Promo';

export default class FormModalPromoProduct extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            data: {
                products:[],
                promos:[],
                MADONG:'',
                MAKM:'',
                PHANTRAMGIAM:'',
            },
        }
    }

    

    Close = () => {
        this.setState({ open: false })
    }
    open = () => {
        this.setState({ open: true })
    }

    
    componentDidMount(){
        GetListProduct()
            .then(res => {
                this.setState({ products: res.data })
            })
            .catch(err => console.log(err))
            
        GetListPromo()
            .then(res => {
                this.setState({ promos: res.data })
            })
            .catch(err => console.log(err))    
    }

    onSubmit = async (event) => {
        event.preventDefault()
        //console.log(this.state.data)
        //await this.createProvider()
        this.close()
        
    }

    

    render = () => {
        return (
            <Dialog
                className='dialog create product promo'
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
                    <DialogTitle>Product promotion form</DialogTitle>
                    <DialogContent>
                    <Box
                        sx={{
                            '& .MuiTextField-root': { m: 1 },
                        }}

                    >
                        <FormControl fullWidth >
                            <TextField
                                label="MADONG"
                                InputProps={{
                                    name: "Ten"
                                }}
                                onChange={(e) => {
                                    this.setState({data: {...this.state.data,MADONG: e.target.value} })
                                }}

                            />
                        </FormControl>
                        <FormControl fullWidth >
                            <TextField
                                label="MAKM"
                                InputProps={{
                                    name: "Ten"
                                }}
                                onChange={(e) => {
                                    this.setState({data: {...this.state.data,MAKM: e.target.value} })
                                }}

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
