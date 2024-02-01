/** @format */

import axios from "axios";

export const categoriesApi = axios.create({
	baseURL: "https://fakestoreapi.com/products/categories",
	headers: { "Content-Type": "application/json" },
});
