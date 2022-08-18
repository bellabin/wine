import * as paypal from 'paypal-rest-sdk'
import { Paypal } from 'src/constants/constant'

const paypalService = paypal.configure({
	mode: 'sandbox', //sandbox or live
	client_id: Paypal.clientId,
	client_secret: Paypal.secret,
})

export default paypalService
