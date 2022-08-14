import React from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {checkKm, convertKm, convertPrice, fixedPrice, checkPrice} from "../helper/convertPrice";
import { addCartItemToLocalStorage } from "../helper/addToCart"
import { Link } from "react-router-dom";
import { KeyNavigate } from "../helper/KeyNavigate";


export const CustomCardProduct = (props) => {
  const addToCart = (productId, price) => {
    addCartItemToLocalStorage(productId, price, 1)
  };

  const styleBadge = {
    display: "inline-block",
    padding: ".25em .4em",
    fontSize: "75%",
    fontWeight: "700",
    lineHeight: "1",
    textAlign: "center",
    whiteSpace: "nowrap",
    verticalAlign: "baseline",
    borderRadius: ".25rem",
    color: "rgb(232, 230, 227)",
    backgroundColor: "rgb(165, 29, 42)"
  }

  // const checkIfPromo = (phantram) => {

  // }

  return (
      <div className="col-md-4">
        <figure className="card card-product-grid">
          <div className="img-wrap">
            <span style={styleBadge}>{checkKm(props.data.ct_khuyenmais)}</span>
            <Link to={KeyNavigate.Detail.concat('/').concat(props.data.MADONG)}><img src={"../../../".concat(props.data.HINHANH && props.data.HINHANH)} width={"100%"} height={"auto"}/></Link>
          </div>
          <figcaption className="info-wrap">
            <div className="fix-height">
            <Typography
            
          sx={{ fontSize: 20 }}
          noWrap={true}
          style={{ textOverFlow: "ellipsis", marginLeft: "10px" }}
        >
          {props.data.TENDONG && props.data.TENDONG}
        </Typography>
              <div className="price-wrap mt-2">
                <span className="price" style={{marginLeft: 10}}>{convertPrice(
                            checkPrice(props.data.changeprices && props.data.changeprices ),
                            convertKm(props.data.ct_khuyenmais)/100 || 0
                          )}$</span>
                <del className="price-old" style={{marginLeft: 10}}>
                  {fixedPrice(checkPrice(props.data.changeprices))}$</del>
              </div>
            </div>
            <a className="btn btn-block btn-primary" onClick={() => addToCart(props.data.MADONG, checkPrice(props.data.changeprices))}>Add to cart </a>
          </figcaption>
          
        </figure>
      </div>
  );
};
