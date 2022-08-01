import React from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {checkKm, convertKm, convertPrice, fixedPrice} from "../helper/convertPrice";
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

  return (
      <div className="col-md-4">
      
        <figure className="card card-product-grid">
          <div className="img-wrap">
            <span style={styleBadge}>{checkKm(props.data.ct_khuyenmais)}</span>
            <Link to={KeyNavigate.ProductCus.concat(KeyNavigate.Detail)}><img src={"../../../".concat(props.data.HINHANH && props.data.HINHANH)} width={"100%"} height={"auto"}/></Link>
          </div>
          <figcaption className="info-wrap">
            <div className="fix-height">
              <a className="title">{props.data.TENDONG && props.data.TENDONG}</a>
              <div className="price-wrap mt-2">
                <span className="price">{convertPrice(
                            props.data.GIA && props.data.GIA,
                            convertKm(props.data.ct_khuyenmais)/100 || 0
                          )}$</span>
                <del className="price-old" style={{marginLeft: 10}}>
                  {fixedPrice(props.data.GIA && props.data.GIA)}$</del>
              </div>
            </div>
            <a className="btn btn-block btn-primary" onClick={() => addToCart(props.data.MADONG, props.data.GIA)}>Add to cart </a>
          </figcaption>
          
        </figure>
      </div>
  );
};
