/** @format */

import React, { useContext } from "react";
import Header from "./components/Header";

import Categories from "./components/Categories";
import ProductsGroup from "./components/ProductsGroup";
import Footer from "./components/Footer";
import AddToCard from "./components/AddToCard";
import { ShoppingContext } from "./contexts/ShoppingCardContext";

import LayoutScreen from "./components/LayoutScreen";

const App = () => {
	const { disable } = useContext(ShoppingContext);
	return (
		<div className=" px-2 sm:px-0 font-san">
			<LayoutScreen>
				<Header />

				<Categories />

				<ProductsGroup />
				<Footer />

				{disable && <AddToCard />}
			</LayoutScreen>
		</div>
	);
};

export default App;
