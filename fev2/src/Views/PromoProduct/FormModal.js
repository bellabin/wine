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
import { CreateProvider } from '../../services/Provider'
import { GetListProduct, UpdateProductById } from '../../services/Product';
import { CreateCtPromo, GetListPromo } from '../../services/Promo';
import { UpdateCtPromoById } from '../../services/Promo';

export default class FormModalPromoProduct extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            data: {
                products: [],
                promos: [],
                MADONG: '',
                MAKM: '',
                PHANTRAMGIAM: 0,
            },
            isSubmit: false,
            products:[],
            promos:[],

        }
    }



    Close = () => {
        this.setState({ open: false })
    }
    open = () => {
        this.setState({ open: true })
    }


    componentDidMount() {
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
        console.log(this.state.data)

        this.setState({isSubmit: true})

        if (this.state.data.MADONG.length === 0 ||
            this.state.data.MAKM.length === 0 ||
            this.state.data.PHANTRAMGIAM <= 0 ||
            isNaN(this.state.data.PHANTRAMGIAM) === true

        ) {
            return
        }else{
            await this.createPromoProduct().then()
            .catch(err => {
                // console.log('err',err)
                alert(err.response.data.message)
            })
            this.Close()
        }

    }

    async createPromoProduct(){
        const data = {
            MADONG: this.state.data.MADONG,
            MAKM: this.state.data.MAKM,
            PHANTRAMGIAM: this.state.data.PHANTRAMGIAM

        }
        console.log(data)
        await CreateCtPromo(data)
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
                            <FormControl fullWidth style={{ marginTop: '20px' }}>
                                <InputLabel id="demo-simple-select-label">D??ng r?????u</InputLabel>
                                <Select
                                    MenuProps={{
                                        PaperProps: {
                                            style: {
                                                maxHeight: 40 * 4.5 + 8,
                                                width: 250
                                            }
                                        },
                                        // Show dropdow at bottom of select
                                        getContentAnchorEl: null,

                                        MenuListProps: {
                                            tabindex: "1",
                                            tabIndex: "1"
                                        }
                                    }}
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={this.state.data.MADONG}
                                    // label="Ch???n nh??n vi??n giao"
                                    onChange={(e) => this.setState({ data: { ...this.state.data, MADONG: e.target.value } })}
                                >


                                    {this.state.products && this.state.products.map((cur) => {
                                        return (
                                            <MenuItem value={cur.MADONG}>{cur.TENDONG}</MenuItem>)
                                    })}


                                </Select>
                                {(this.state.isSubmit && this.state.data.MADONG.length === 0) && (
                                    <div style={{ color: "red" }}>Vui l??ng ch???n d??ng r?????u!</div>
                                )}
                            </FormControl>

                            <FormControl fullWidth style={{ marginTop: '20px' }}>
                                        <InputLabel id="demo-simple-select-label">?????t khuy???n m??i</InputLabel>
                                        <Select
                                            MenuProps={{
                                                PaperProps: {
                                                    style: {
                                                        maxHeight: 40 * 4.5 + 8,
                                                        width: 250
                                                    }
                                                },
                                                // Show dropdow at bottom of select
                                                getContentAnchorEl: null,

                                                MenuListProps: {
                                                    tabindex: "1",
                                                    tabIndex: "1"
                                                }
                                            }}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={this.state.data.MAKM}
                                            // label="Ch???n nh??n vi??n giao"
                                            onChange={(e) => this.setState({ data: { ...this.state.data, MAKM: e.target.value } })}
                                        >


                                            {this.state.promos && this.state.promos.map((cur) => {
                                                return (
                                                    <MenuItem value={cur.MAKM}>{cur.TENKM}</MenuItem>)
                                            })}


                                        </Select>
                                        {(this.state.isSubmit && this.state.data.MAKM.length === 0) && (
                                            <div style={{color: "red"}}>Vui l??ng ch???n ?????t khuy???n m??i!</div>
                                        )}
                                    </FormControl>

                            <FormControl fullWidth >
                                <TextField
                                    label="Ph???n tr??m gi???m"
                                    InputProps={{
                                        name: "Ten"
                                    }}
                                    onChange={(e) => {
                                        this.setState({ data: { ...this.state.data, PHANTRAMGIAM: e.target.value } })
                                    }}

                                />
                                {(this.state.isSubmit && this.state.data.PHANTRAMGIAM <= 0) && (
                                    <div style={{color: "red"}}>Ph???n tr??m gi???m ph???i l???n h??n 0!</div>
                                )}
                                {(this.state.isSubmit && isNaN(this.state.data.PHANTRAMGIAM) === true ) && (
                                    <div style={{color: "red"}}>Ph???n tr??m gi???m ph???i l?? s???!</div>
                                )}
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
