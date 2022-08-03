import React, { Component } from 'react'
import Layout from '../../components/Layout'
import Paypal from '../../components/Paypal'
import Body from "./Body"

export default class Cart extends Component {
    render() {
        return (
            <Layout>
                <Paypal/>
                <Body/>
            </Layout>
        )
    }
}
