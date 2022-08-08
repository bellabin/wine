import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer
} from "@paypal/react-paypal-js";
import { PayPalScriptOptions, PayPalButtonsComponentProps} from "@paypal/paypal-js";

const paypalScriptOptions: PayPalScriptOptions = {
  "client-id":
      "AaaFcJt0sRvpH2wvW0ZvhaD2myM0PpZyEAM4vzamKXoWRAOyuIgkNXXKOKRJpAa4ACvjTiuWwF714d3_",
  currency: "USD"
};
function Button() {
  /**
   * usePayPalScriptReducer use within PayPalScriptProvider
   * isPending: not finished loading(default state)
   * isResolved: successfully loaded
   * isRejected: failed to load
   */
  const [{ isPending }] = usePayPalScriptReducer();
  const paypalbuttonTransactionProps: PayPalButtonsComponentProps = {
    style: { layout: "vertical" },
    createOrder(data, actions) { // ham nay goi khi bam vao nut pop up Paypal
      return actions.order.create({
        purchase_units: [
          {
            amount: {
              value: "25", // value phai = tong tat cả value trong breakdown
              breakdown: {
                item_total: { // item_total phai = unit_amount * quantity trong tat ca item
                  currency_code: "USD",
                  value: "22"
                },
                shipping: {
                  currency_code: "USD",
                  value: "3"
                }
              }
            },
            items: [ // sau nay thay bang list product khi thanh toan
              {
                name: "TEST_NAME",
                unit_amount: {
                  currency_code: "USD",
                  value: "6"
                },
                quantity: "1",
              },
              {
                name: "TEST_NAME_1",
                unit_amount: {
                  currency_code: "USD",
                  value: "8"
                },
                quantity: "2",
              }
            ],
          }
        ]
      });
    },
    onApprove(data, actions) { // ham nay goi khi thanh toan thanh cong
      /**
       * data: {
       *   orderID: string;
       *   payerID: string;
       *   paymentID: string | null;
       *   billingToken: string | null;
       *   facilitatorAccesstoken: string;
       * }
       */
      return actions.order.capture({}).then((details) => {
        alert(
            "Transaction completed by" +
            (details?.payer.name.given_name ?? "No details")
        );

        alert("Data details: " + JSON.stringify(data, null, 2));
      });
    },
    onError(err: Record<string, unknown>) { // ham nay goi khi thanh toan loi
      console.log('error paypal', err.toString())
      alert("The Transaction has error!!!!")
    }
  };
  return (
      <>
        {isPending ? <h2>Load Smart Payment Button...</h2> : null}
        <PayPalButtons {...paypalbuttonTransactionProps} />
      </>
  );
}
export default function Paypal() {
  return (
      <div style={{textAlign: "center"}}>
        <PayPalScriptProvider options={paypalScriptOptions}>
          <Button />
        </PayPalScriptProvider>
      </div>
  );
}
