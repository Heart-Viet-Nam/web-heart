import { Request, Response, NextFunction } from "express"
import {stripe} from '../../config/stripe'

class PaymentControllers {

    // [POST] /checkout-payment
    async payment(req: Request, res: Response, next: NextFunction) {  

        try {
            const storeItems = new Map([
                [1, { priceInUSD: 72700, name: "Ruby" }],
                [2, { priceInUSD: 286000, name: "Sapphire" }],
                [3, { priceInUSD: 620000, name: "Diamond"}]
            ])   
            
            const domain = `${req.protocol}://${req.headers.host}`

            const session = await stripe.checkout.sessions.create({
                payment_method_types: ["card"],
                mode: "payment",
                line_items: req.body.items.map((item: {id: number, quantity: number}) => {
                    const storeItem = storeItems.get(item.id)
                    return {
                        price_data: {
                        currency: "usd",
                        product_data: {
                            name: storeItem?.name,
                        },
                        unit_amount: storeItem?.priceInUSD,
                        },
                        quantity: item.quantity,
                    }
                }),
                success_url: `${domain}`,
                cancel_url: `${domain}`,
            })
            res.json({ url: session.url })
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

export default new PaymentControllers