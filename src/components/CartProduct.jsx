/** @format */

import React, { useContext } from "react";
import { ShoppingContext } from "../contexts/ShoppingCardContext";

const CartProduct = ({
	item: { product_id, title, quantity, image, cost, price },
}) => {
	const { toggleAddRemove, toggleDelete } = useContext(ShoppingContext);

	const deleteProduct = () => {
		toggleDelete(product_id);
	};

	return (
		<div className="group  sm:mt-10  mt-9 ">
			<div className="h-30 border relative    ">
				<div className="px-2">
					<img
						src={image}
						className=" absolute sm:-top-8  -top-6  duration-200 hover:transform  h-12  sm:h-20  "
					/>

					<button onClick={deleteProduct} className=" ">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="  hidden duration-100 select-none  animate__fadeInRight  animate__animated group-hover:inline active:scale-90   w-5 absolute top-1 sm:top-3 sm:end-10 end-5 text-red-500 sm:h-5 h-4 ">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
							/>
						</svg>
					</button>

					<div className="sm:mt-8 mt-1 ">
						<h3 className=" line-clamp-1 text-sm  font-bold ">{title}</h3>

						<div className=" my-2 flex justify-between items-center align-middle">
							<p className=" text-xs sm:text-sm text-gray-400  ">
								{" "}
								$ {price.toFixed(2)}
							</p>

							<div className=" flex align-middle items-center ">
								<button
									onClick={() =>
										quantity > 1 && toggleAddRemove(product_id, -1)
									}
									className="bg-gray-300 active:scale-90 px-1 py-1">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="currentColor"
										className="h-2 w-2  sm:w-4 text-black sm:h-4">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M5 12h14"
										/>
									</svg>
								</button>

								<span className="mx-2 sm:text-md text-sm ">{quantity}</span>

								<button
									onClick={() => toggleAddRemove(product_id, 1)}
									className="bg-gray-300 active:scale-90 p-1">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="currentColor"
										className="h-2 w-2  sm:w-4 text-black sm:h-4">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M12 4.5v15m7.5-7.5h-15"
										/>
									</svg>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CartProduct;
