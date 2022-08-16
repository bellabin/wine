import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer
} from "@paypal/react-paypal-js";
import { useEffect, useState } from "react";
import { getListCartItemsFromLocalStorage } from "../helper/addToCart";
import { getTotal } from "../services/Phieudat";

const paypalScriptOptions = {
  "client-id": "AeMSCBo543IZhLXERfPVLZ5fyuYvpZ4OrgzbiKAfSsjY25sVg9jkXFVIY6_R9Qo-Ef-haY4rZAIIrxZG",
  // secret: "EGslr3PrO-xVBffuxgSyG9vsV_rDN-JaBDIo8cuKFKswBIQGWoGfalbE0Dm7pDw-01La_7tDJcBZV5hV",
  currency: "USD"
};

function Button(props) {
  const [purchaseUnits, setPurchaseUnits] = useState([
    {
      amount: {
        value: props.total.toString(), // value phai = tong tat cả value trong breakdown
        currency_code: "USD",
      },
      items: [ // sau nay thay bang list product khi thanh toan  
      ],
    }
  ])

  const [{ isPending }] = usePayPalScriptReducer();

  const paypalbuttonTransactionProps = {
    style: { layout: "vertical" },
    createOrder(data, actions) { // ham nay goi khi bam vao nut pop up Paypal
      return actions.order.create({
        purchase_units: purchaseUnits     
      });
    },
    onApprove(data, actions) { // ham nay goi khi thanh toan thanh cong
      return actions.order.capture({}).then((details) => {
        alert(
            "Transaction completed by" +
            (details?.payer.name.given_name ?? "No details")
        );

        alert("Data details: " + JSON.stringify(data, null, 2));
      });
    },
    onError(err) { // ham nay goi khi thanh toan loi
      console.log('error paypal', err.toString())
      alert("The Transaction has error!!!!")
    }
  };

  useEffect(() => {
    const items = []
    const carts = props.carts
    if (carts && carts.length) {
      for (const cart of carts) {
        const item = {
          name: cart?.MADONG,
          unit_amount: {
            currency_code: "USD",
            value: cart?.GIA
          },
          quantity: cart?.SOLUONG,
        }

        items.push(item)
      }

      purchaseUnits[0].items = items

      setPurchaseUnits(purchaseUnits)
      console.log(purchaseUnits)
    }
  }, [purchaseUnits, props.carts])

  return (
      <>
        {isPending ? <h2>Load Smart Payment Button...</h2> : null}
        <PayPalButtons {...paypalbuttonTransactionProps} />
      </>
  );
}
export default function Paypal() {
  const [carts, setCarts] = useState([])
  const [total, setTotal] = useState()

  useEffect(() => {
    setCarts(getListCartItemsFromLocalStorage())
    getTotal().then(res => setTotal(res.data.totals))
  }, [carts, total])

  return (
      <div style={{textAlign: "center"}}>
        <PayPalScriptProvider options={paypalScriptOptions}>
          <Button total={total} carts={carts}/>
        </PayPalScriptProvider>
      </div>
  );
}
