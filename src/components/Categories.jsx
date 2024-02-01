/** @format */

import React, { useEffect, useState } from "react";
import Container from "./Container";
import { categoriesApi } from "../api/categories";
import Category from "./Category";

const Categories = () => {
	const [ready, setReady] = useState(false);
	const [categories, setCategory] = useState([]);

	useEffect(() => {
		const fetchCategories = async () => {
			try {
				const res = await categoriesApi.get("/");
				setCategory(res.data);
				setReady(true);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};
		fetchCategories();
	}, []);

	return (
		<div className="mt-3 mb-3">
			<Container>
				<h2 className=" font-medium   sm:text-1xl text-sm ">
					Select Categories
				</h2>

				<div className=" mt-0 flex-wrap  sm:gap-1 gap-2  sm:mt-2 flex items-center  align-middle">
					<div className="flex ">
						<button className="sm:text-md text-sm active:bg-gray-300 rounded-sm me-1 sm:me-3 select-none hover:duration-150 hover:bg-gray-300  border py-1 px-2 sm:px-4   border-gray-400 ">
							All
						</button>
						{!ready && (
							<div role="status" className="space-y-2.5 animate-pulse max-w-lg">
								<div className="flex flex-wrap gap-1 items-center w-full">
									<div className="h-4 sm:h-5 bg-gray-200 rounded-md dark:bg-gray-700 w-20 sm:w-28 "></div>
									<div className="h-4 sm:h-5 ms-2 bg-gray-300 rounded-md dark:bg-gray-600 w-36 "></div>
									<div className="h-4  sm:h-5 ms-2 bg-gray-300 rounded-md dark:bg-gray-600 w-28 "></div>
									<div className="h-4 sm:h-5 ms-2 bg-gray-300 rounded-md dark:bg-gray-600 w-20 "></div>
								</div>
							</div>
						)}
					</div>

					{ready &&
						categories.map((el, index) => <Category key={index} item={el} />)}
				</div>
			</Container>
		</div>
	);
};

export default Categories;
