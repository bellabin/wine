import React, { Component } from 'react'
import { Pagination } from '@mui/material'
import Layout from '../../components/Layout'
import BodyProductDetail from './Body'

export default class ProductCusDetail extends Component {
    
    render() {
        return (
            <Layout>
                <BodyProductDetail></BodyProductDetail>
            </Layout>
        )
    }
}
