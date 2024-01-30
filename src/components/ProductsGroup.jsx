/** @format */

import React, { useEffect, useState } from "react";
import Container from "./Container";
import Product from "./Product";
import { productsApi } from "../api/products";
import ProductsEmpty from "./ProductsEmpty";

const ProductsGroup = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(false);

	const emptyProducts = Array.from({ length: 5 }, (_, index) => index);

	useEffect(() => {
		const fetchProducts = async () => {
			const res = await productsApi.get("/");
			setProducts(res.data);
			setLoading(true);
		};
		fetchProducts();
	}, []);

	return (
		<div className=" sm:mt-10 mt-7   ">
			<Container>
				{!loading && (
					<ProductsEmpty key={emptyProducts.id} emptyProducts={emptyProducts} />
				)}

				{loading && (
					<div className="flex  gap-2   sm:gap-7  align-middle items-center flex-wrap ">
						{products.map((product) => (
							<Product  key={product.id} product={product} />
						))}
					</div>
				)}
			</Container>
		</div>
	);
};

export default ProductsGroup;
