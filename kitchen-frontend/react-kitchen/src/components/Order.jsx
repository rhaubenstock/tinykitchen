import React from "react";

export const Order = ({ order }) => {
	// don't need key here bc not needed for DOM, just for react's VDOM
	return(
		<li className="order">
			<span>{order.name}</span>
			<span>{order.address}</span>
			<span>{order.items}</span>
			<span>{order.isComplete ? "Completed" : "In Progress"}</span>
		</li>
	);
};