import axios from "axios";


export const productsApi = axios.create({
	baseURL: `${location.origin}/api/products`,
	headers: { "Content-Type": "application/json" },
});