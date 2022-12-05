import express from 'express';
import { Order } from '../models/order.js';
const router = express.Router();

//these routes will be nested
router.get('/', (_req, res) => {
	Order.find() //promises
        .then(orders => res.json(orders))
        .catch(err => res.status(404).json(err));

});
router.post('/', (req, res) => {
    const newOrder = new Order({
		items: req.body.items,
		name: req.body.name,
		address: req.body.address,
	});
	
	newOrder
		.save()
		.then(order => res.json(order.items))
		.catch((err) => res.status(422).json(err));
});
router.patch('/', (_req, res) => {
    res.json('PATCH Success');
});
router.delete('/:orderId', (req, res) => {
    const id = req.params.order_id;
    Order.findOneAndDelete(id)
        .then(order => res.json({id: order._id}))
        .catch(err => res.status(404).json(err));
        //don't do: 
        // .then(() => res.json(id));
});

export const orders = router;