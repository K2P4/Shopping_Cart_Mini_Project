/** @format */

import React, { useContext } from "react";
import Header from "./components/Header";
import Layout from "./components/layout";
import Categories from "./components/Categories";
import ProductsGroup from "./components/ProductsGroup";
import Footer from "./components/Footer";
import AddToCard from "./components/addToCard";
import { ShoppingContext } from "./contexts/ShoppingCardContext";

const App = () => {

	const {disable} = useContext(ShoppingContext)
	return (
		<div className=" px-2 sm:px-0 font-san">
			<Layout>
				<Header />

				<Categories />

				<ProductsGroup />
				<Footer />

				{disable && <AddToCard/>}
			</Layout>
		</div>
	);
};

export default App;
