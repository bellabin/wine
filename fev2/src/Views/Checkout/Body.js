import Box from "@mui/material/Box";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import { FormControl } from "@mui/material";
import TextField from "@mui/material/TextField";
import { getListCartItemsFromLocalStorage } from "../../helper/addToCart";

import React, { Component } from "react";
import { GetProductById } from "../../services/Product";

import { TableRow, TableCell } from "@mui/material";
import Section from "../Checkout/Section";
import Paypal from "../../components/Paypal";

export default class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carts: [],
      products: [],
      payment: 0,
    };
  }
  componentDidMount() {
    const cartsT = JSON.parse(getListCartItemsFromLocalStorage());
    this.setState({ carts: cartsT });
    let productsT = [];
    this.state.carts.map((cur) => {
      GetProductById(cur.productId)
        .then((res) => {
          productsT.push(res.data);
        })
        .catch((err) => console.log(err));
    });
    this.setState({ products: productsT });
  }
  handleChange = (e) =>{
    this.setState({payment: e.target.value})
    console.log(e.target.value)
  }

  checkPaypalState = (e) => {
    if(this.state.payment === 1 ){
      return (<Paypal></Paypal>)
    }
    else return (<></>)
  }

  render() {
    return (
      <>
        <div className="checkout">
          <div className="container-fluid">
            <Section></Section>
            <div className="row">
              <div>
                <div className="checkout-inner">
                  <div className="billing-address">
                    <p>Thông Tin Đặt Hàng :</p>
                    <Box
                      sx={{
                        "& .MuiTextField-root": { m: 1 },
                      }}
                    >
                      <FormControl fullWidth>
                        <TextField
                          label="Họ và tên"
                          InputProps={{
                            name: "Email",
                          }}
                        />
                      </FormControl>
                      <FormControl fullWidth>
                        <TextField
                          label="Số điện thoại"
                          InputProps={{
                            name: "Email",
                          }}
                        />
                      </FormControl>
                      <FormControl fullWidth>
                        <TextField
                          label="Email"
                          InputProps={{
                            name: "Email",
                          }}
                        />
                      </FormControl>
                      <FormControl fullWidth>
                        <TextField
                          label="Địa chỉ giao hàng"
                          InputProps={{
                            name: "Email",
                          }}
                        />
                      </FormControl>
                      <p style={{ marginTop:'10px'}}>Phương thức thanh toán: </p>
                      <FormControl style={{width:'300px', marginTop:'10px', marginBottom:'10px'}}>
                        
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={this.state.payment}
                          label=" "
                          onChange={this.handleChange}
                        >
                          <MenuItem value={0}>
                          Thanh toán trực tiếp
                          </MenuItem>
                          <MenuItem value={1}>
                          Paypal
                          </MenuItem>
                        </Select>
                      </FormControl>
                      {this.checkPaypalState()}
                    </Box>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
