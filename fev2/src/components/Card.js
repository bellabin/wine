import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {checkKm, convertKm, convertPrice, fixedPrice, checkPrice, convertGIA} from "../helper/convertPrice";
import { addCartItemToLocalStorage } from "../helper/addToCart"


export const CustomCard = (props) => {
  const addToCart = (productId, price) => {
    addCartItemToLocalStorage(productId, price, 1)
  };

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography
          sx={{ fontSize: props.fontSize || 14 }}
          color="text.secondary"
          gutterBottom
        >
          {checkKm(props.data.ct_khuyenmais)}
        </Typography>

        <Typography
          sx={{ fontSize: 14 }}
          noWrap={true}
          style={{ "text-over-flow": "ellipsis !important" }}
        >
          {props.data.TENDONG && props.data.TENDONG}
        </Typography>

        {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography> */}
        <img
          src={"../../../".concat(props.data.HINHANH && props.data.HINHANH)}
          width={"25%"}
          height={"auto"}
        />
        {/* {console.log('ngay:', new Date() > new Date(props.data.changeprices[0].NGAYTHAYDOI))} */}
        <Typography variant="body2">
          {convertPrice(
            checkPrice(props.data.changeprices),
            convertKm(props.data.ct_khuyenmais)/100 || 0
          )}
          $
        </Typography>
        <del>{fixedPrice(checkPrice(props.data.changeprices) && checkPrice(props.data.changeprices))}$</del>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => addToCart(props.data.MADONG, checkPrice(props.data.changeprices))}>
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
};
