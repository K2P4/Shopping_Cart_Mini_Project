/** @format */

import { faCarTunnel } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { createContext } from "react";

export const ShoppingContext = createContext();

const ShoppingCardContext = ({ children }) => {
	const [disable, setDisable] = useState(false);
	const [headerDisable, setheaderDisable] = useState(true);
	const [cart, setCart] = useState([]);
	const [btnAnimate, setBtnAnimate] = useState({});
	const [plus, setPlus] = useState(1);

	const addCart = (newCart) => {
		setCart([...cart, newCart]);
	};

	const toggleDelete = (id) => {
		setCart(cart.filter((item) => item.product_id != id ))
		
	}

	// const toggleAddQuantity = (newQuantity) => {
	// 	setPlus(plus + newQuantity);
	// 	console.log(plus);
	// };

	const toggleAddRemove = (addItemid, addQ) => {
		setCart(
			cart.map((el) => {
				if (el.product_id == addItemid) {
					const newQuantity = el.quantity + addQ;
					const newPrice = el.price * newQuantity;

					return {
						...el,
						quantity: newQuantity,
						price: newPrice,
					};
				}
				return el;
			})
		);
	};

	const toggleShopping = () => {
		setDisable(!disable);
		setheaderDisable(!headerDisable);
	};

	return (
		<div>
			<ShoppingContext.Provider
				value={{
					headerDisable,
					setBtnAnimate,
					btnAnimate,
					addCart,
					toggleAddRemove,
					toggleDelete,
					cart,
					disable,
					toggleShopping,
				}}>
				{children}
			</ShoppingContext.Provider>
		</div>
	);
};

export default ShoppingCardContext;
