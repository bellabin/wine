import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { KeyNavigate } from '../../helper/KeyNavigate'
import { GetListProduct, GetListWinetype } from '../../services/Product'
import ProductOnType from '../Product-on-type-cus'
import { Route } from 'react-router-dom'
import { CustomCard } from '../../components/Card'
import { CustomCardProduct } from '../../components/CardProduct'
import { Pagination } from '@mui/material'
import Layout from '../../components/Layout'
import BodyProduct from './Body'

export default class ProductCus extends Component {
    
    render() {
        return (
            <Layout>
                <BodyProduct></BodyProduct>
            </Layout>
        )
    }
}
