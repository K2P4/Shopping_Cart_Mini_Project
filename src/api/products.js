import axios from "axios";


export const productsApi = axios.create({
	baseURL: "https://fakestoreapi.com/products",
	headers: { "Content-Type": "application/json" },
});
