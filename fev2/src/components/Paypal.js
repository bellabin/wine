import React, { Component } from 'react'
import { PayPalButton } from 'react-paypal-button-v2';

export default class Paypal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      total: 100
    }
  }

  componentDidMount() {
    // Call api to get total of the order
  }

  // function to save the order
  handleSaveOrder() {
    // call api to save order here
    console.log("save order")
  }

  render() {
    return (
      <>
        <PayPalButton
        amount="0.01"
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [{
              amount: {
                currency_code: "USD",
                value: this.state.total
              }
            }],
          });
        }}
        onSuccess={(details, data) => this.handleSaveOrder(details, data)}
      />
        

      </>
    )
  }
}
