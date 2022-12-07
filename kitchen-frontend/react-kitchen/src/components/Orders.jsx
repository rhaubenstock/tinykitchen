import React from 'react';
import {Order} from "./Order.jsx";

//new hooks way
export const Orders = (orders) => {
	//react wants key here to keep track of vdom I think?
	const ordersList = orders?.map(order => <Order key={order.id} order={order} />);
	return (
		<ul className="orders-list">
			{ordersList}
		</ul>
	);
};