import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { FormControl } from "@mui/material";
import TextField from "@mui/material/TextField";
import { getListCartItemsFromLocalStorage } from "../../helper/addToCart";
import React, { Component } from "react";
import { GetProductById } from "../../services/Product";
import Section from "../Checkout/Section";
import Paypal from "../../components/Paypal";
import { Button } from "@mui/material";
import { Table, TableRow } from "@mui/material";
import * as moment from "moment";
import { getAccessTokenFromLocalStorage, getUserProfileFromLS, removeUserProfileToLS } from "../../helper/accessToken";
import { createPhieuDat } from "../../services/Phieudat";
import { updateSLT } from "../../services/Phieudat";
import { checkKm, checkPrice, toDecimal } from "../../helper/convertPrice";
import { getMe } from "../../services/Getme";
import { GetCustomerById } from "../../services/Customer";
export default class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carts: [],
      products: [],
      payment: 0,
      total:0,
      customer:  JSON.parse(getUserProfileFromLS()), /// ???
      data: {
        HONN: "",
        TENNN: "",
        DIACHINN: "",
        SDTNN: "",
        GHICHU: "",
        TRANGTHAI: "Chưa duyệt",
        MANVD: "",
        MANVGH: "",
        MAKH: "",
        CTPDS: [],
      },
    };
  }
  async componentDidMount() {
    // const token = getAccessTokenFromLocalStorage() 
    // if(!token) {
    //   alert('Vui lòng đăng nhập')
    //   window.location.href('/Login')
    // }

    // let userId = {}
    // await getMe(token).then(res => {
    //   userId = res.data.userId
    // })
    // console.log(userId)
    // await GetCustomerById(userId).then(res => {
    //   console.log('res', res.data)
    //   this.setState({customer: res.data})
    // })
    
    const cartsT = JSON.parse(getListCartItemsFromLocalStorage());
    if(cartsT) {
      let productsT = [];
    cartsT.map((cur) => {
      GetProductById(cur.productId)
        .then((res) => {
          //console.log(res.data)
          productsT.push(res.data);
        })
        .catch((err) => console.log(err));
    });
    this.setState({ products: productsT });

    let listCTPDstemp = [];
    let totalAmountTemp = 0;

    cartsT.map((cur) => {
      let CTPDtemp = {};
      CTPDtemp.MADONG = cur.productId;
      CTPDtemp.SOLUONG = cur.quantity;
      GetProductById(cur.productId)
        .then((res) => {
          let price = checkPrice(res.data.changeprices);
          let promoPrice =
            checkPrice(res.data.changeprices) *
            toDecimal(checkKm(res.data.ct_khuyenmais));
          let totalTemp = price - promoPrice;
          CTPDtemp.GIA = totalTemp 
          totalAmountTemp += totalTemp * cur.quantity;
          // console.log(totalAmountTemp)
          this.setState({ total: totalAmountTemp.toFixed(2) });

        })
        .catch((err) => console.log(err));
      listCTPDstemp.push(CTPDtemp);
    });


    this.setState({
      data: {
        HONN: this.state.customer.HO,
        TENNN: this.state.customer.TEN,
        DIACHINN: this.state.customer.DIACHI,
        SDTNN: this.state.customer.SDT,
        GHICHU: "",
        TRANGTHAI: "Chưa duyệt",
        MANVD: "",
        MANVGH: "",
        MAKH: this.state.customer.MAKH,
        CTPDS: listCTPDstemp,
      },
    });
    }
    
    
  }

  handleChange = (e) => {
    this.setState({ payment: e.target.value });
  };
  
  handleName = (e) => {
    let ho = e.target.value.trim().split(' ').slice(0, -1).join(' ')
    let ten = e.target.value.trim().split(' ').slice(-1).join(' ')
    this.setState({data:{ ...this.state.data,HONN: ho, TENNN: ten} })
  }

  checkPaypalState = (e) => {
    if (this.state.payment === 1) {
      return <Paypal total={this.state.total} pd={this.state.data}></Paypal>;
    } else return <></>;
  };

  checkout = async () => {
    //console.log(moment(new Date()).format("YYYY-MM-DD"));
    //console.log("data", this.state.data);
    //check slt
    //neu ko du thi cut
    //co thi tao]
    await createPhieuDat(this.state.data).then(res => {
      if(res.status === 201) {
        alert('Đặt hàng thành công')

        removeUserProfileToLS()

        ///update slt
        // updateSLT()

        window.location.href('/')
      }
    });

  };
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
                          defaultValue={this.state.customer && this.state.customer.HO.concat(
                            " "
                          ).concat(this.state.customer.TEN) }
                          InputProps={{
                            name: "Email",
                          }}
                          onChange={(e) => this.handleName(e)}
                        />
                      </FormControl>
                      <FormControl fullWidth>
                        <TextField
                          label="Số điện thoại"
                          defaultValue={this.state.customer ? this.state.customer.SDT : ''}
                          InputProps={{
                            name: "Email",
                          }}
                          onChange={(e) => this.setState({data:{ ...this.state.data,SDT: e.target.value} })}
                        />
                      </FormControl>
                      <FormControl fullWidth>
                        <TextField
                          label="Email"
                          defaultValue={this.state.customer ? this.state.customer.EMAIL : ''}
                          InputProps={{
                            name: "Email",
                          }}
                          onChange={(e) => this.setState({data:{ ...this.state.data,EMAIL: e.target.value} })}
                        />
                      </FormControl>
                      <FormControl fullWidth>
                        <TextField
                          label="Địa chỉ giao hàng"
                          defaultValue={this.state.customer ? this.state.customer.DIACHI : ''}
                          InputProps={{
                            name: "Email",
                          }}
                          onChange={(e) => this.setState({data:{ ...this.state.data,DIACHI: e.target.value} })}
                        />
                      </FormControl>
                      <FormControl fullWidth>
                        <TextField
                          label="Ghi chú"
                          defaultValue={""}
                          placeholder="MultiLine with rows: 2 and rowsMax: 4"
                          multiline
                          rows={3}
                          InputProps={{
                            name: "Email",
                          }}
                          onChange={(e) => this.setState({data:{ ...this.state.data,GHICHU: e.target.value} })}
                        />
                      </FormControl>
                      <p style={{ marginTop: "10px" }}>
                        Phương thức thanh toán:{" "}
                      </p>
                      <FormControl
                        style={{
                          width: "300px",
                          marginTop: "10px",
                          marginBottom: "10px",
                        }}
                      >
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={this.state.payment}
                          label=" "
                          onChange={this.handleChange}
                        >
                          <MenuItem value={0}>Thanh toán trực tiếp</MenuItem>
                          <MenuItem value={1}>Paypal</MenuItem>
                        </Select>
                      </FormControl>
                      
                      {this.checkPaypalState()}
                    </Box>
                    <Table style={{ marginTop: "20px" }}>
                      <TableRow
                        style={{ textAlign: "center", fontSize: "30px" }}
                      >
                        <Button
                          variant="outlined"
                          style={{
                            textAlign: "center",
                            fontSize: "20px",
                            color: "#FF5733",
                            borderColor: "#FF5733",
                          }}
                          onClick={this.checkout}
                        >
                          Xác nhận
                        </Button>
                      </TableRow>
                    </Table>
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