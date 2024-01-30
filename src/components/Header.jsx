/** @format */

import React, { useContext, useEffect, useRef } from "react";
import Container from "./Container";
import { ShoppingContext } from "../contexts/ShoppingCardContext";

const Header = () => {
	const { setBtnAnimate, toggleShopping, headerDisable, cart } =useContext(ShoppingContext);
	

	

	const btnRef = useRef();

	useEffect(() => {
		setBtnAnimate(btnRef.current.getBoundingClientRect());
	}, []);

	return (
		<div className=" border-b-2  border-b-gray-500 pb-2 ">
			<Container>
				<div className="flex  justify-between mt-6">
					<div className="">
						<h2 className=" font-bold text-lg sm:text-2xl md:text-2xl ">KOP Solutions</h2>
						<p className=" text-gray-400  font-semibold text-sm sm:text-lg md:text-lg ">
							E-commerce App
						</p>
					</div>

					{headerDisable && (
						<div className="">
							<button className=" duration-100  border p-1 sm:p-2 md:p-2 text-gray-400 ">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-5 h-5 sm:w-6 sm:h-6 md:w-6 md:h-6 ">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
									/>
								</svg>
							</button>

							<button
								ref={btnRef}
								onClick={toggleShopping}
								className="ms-1 me-1 bg-black border p-1 sm:p-2 md:p-2 text-gray-400 ">
								<span className="bg-red-500  sm:top-3 sm:end-44 text-white top-4 end-2 absolute px-1  text-sm text-center rounded-full h-4 w-4 sm:h-5 sm:w-5 md:w-5 md:h-5 ">
									{cart.length}
								</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-5 h-5 sm:w-6 sm:h-6 md:w-6 md:h-6 ">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
									/>
								</svg>
							</button>
						</div>
					)}
				</div>
			</Container>
		</div>
	);
};

export default Header;
