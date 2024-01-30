/** @format */

import React, { useContext, useEffect, useState } from "react";
import { ShoppingContext } from "../contexts/ShoppingCardContext";
import CartProduct from "./CartProduct";
import EmptyStage from "./EmptyStage";

const AddToCard = () => {
	const { cart, toggleShopping } = useContext(ShoppingContext);
	const [disable, setDisable] = useState(false);

	const costTotal = cart.map((item) => item.price);
	const lastCosTotal = costTotal.reduce((pv, cv) => pv + cv, 0);

	return (
		<div className="">
			<section className="sm:w-[45%]  md:w-[25%] w-[50%]  fixed top-0 end-0  overflow-scroll h-full animate__bounceInRight animate__animated   border   bg-gray-50        ">
				<div className="sm:p-3  p-1 ">
					<div className=" flex  justify-between items-center align-middle ">
						<div className="">
							<h3 className="text-sm  font-bold sm:text-xl ">Your Items</h3>
							<h4 className="sm:text-sm text-xs text-gray-500  ">
								Product in Cart
								<span className=" bg-red-500  ms-1 px-1  text-xs sm:text-sm text-white rounded-sm">
									{cart.length}
								</span>
							</h4>
						</div>

						<button
							onClick={toggleShopping}
							className=" hover:bg-gray-400 rounded-sm border border-gray-400 ">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className=" h-4 w-4  sm:h-8 sm:w-8 sm:p-1 ">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M6 18 18 6M6 6l12 12"
								/>
							</svg>
						</button>
					</div>

					{cart.length == 0 && <EmptyStage key={cart.id} />}

					{cart.map((item) => (
						<CartProduct key={item.product_id} item={item} />
					))}
				</div>

				<footer className=" fixed mt-2      sm:mt-15 bottom-auto    ">
					<div className=" my-1  float-right    me-3  sm:me-28  ">
						<h4 className=" text-sm text-gray-400 sm:text-md text-right font-medium ">
							Total Cost
						</h4>
						<h3 className=" text-sm font-bold sm:text-xl  ">
							$ {lastCosTotal.toFixed(2)}
						</h3>
					</div>
					<button
						disabled={disable}
						onClick={() => setDisable(true)}
						className="text-white duration-200 w-[100%]  justify-center flex group  items-center  active:scale-90 py-1   sm:w-96  bg-gray-600 ">
						{disable ? <p>Order Finished</p> : <p>Order Now</p>}
					</button>
				</footer>
			</section>
		</div>
	);
};

export default AddToCard;
