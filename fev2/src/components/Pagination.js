import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { CustomCard } from "./Card"
import { Pagination } from "@mui/material";

const CustomePagination = (props) => {


  const settings = {
    size: "large",
    variant: "outlined",
    shape: "rounded",
    //onChange={handleChange},
  };

  return (
    <Pagination count={props.count} page={props.page} {...settings}>
        {
            
            props.data && props.data.map(item => {
                console.log('count: ', props.data.count)
                return <CustomCard data={item}/>
            })
        }
    </Pagination>
  )
};

export default CustomePagination;
