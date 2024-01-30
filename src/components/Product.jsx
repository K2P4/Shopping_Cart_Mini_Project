/** @format */

import React, { useContext, useEffect, useRef, useState } from "react";
import Rating from "./Rating";
import { ShoppingContext } from "../contexts/ShoppingCardContext";
import AnimatedImage from "./AnimatedImage";

const Product = ({
	product: {
		id,
		image,
		title,
		price,
		description,
		rating: { rate, count },
	},
}) => {
	const stars = Array.from({ length: 5 }, (_, index) => index);

	const [added, setAdded] = useState(false);

	const [isAnimate, setisAnimate] = useState(false);
	const itemImageRef = useRef();
	const [info, setInfo] = useState({});

	const { addCart } = useContext(ShoppingContext);

	useEffect(() => {
		setInfo(itemImageRef.current.getBoundingClientRect());
	}, []);

	const toggleCart = () => {
		const newCart = {
			product_id: id,
			quantity: 1,
			image,
			title,
			price,
		};
		addCart(newCart);
		setisAnimate(true);

		setAdded(!added);
	};

	return (
		<div>
			<div
				className={`border mb-8 group  relative border-gray-400  ${
					id % 2 === 0 ? "w-[140px]" : "w-[145px]"
				} ${
					id % 3 === 0 ? "h-[170px]" : "h-[167px]"
				} rounded-md sm:w-[290px] sm:h-[310px] `}>
				<img
					ref={itemImageRef}
					src={image}
					className=" group-hover:rotate-6  duration-200 hover:transform  absolute -top-8  h-20 sm:h-32  ms-4 -mb-16"
				/>

				<div className="px-1 sm:px-3">
					<h3 className=" text-md sm:text-lg line-clamp-1 font-bold  mt-12 sm:mt-24  mb-0 sm:mb-1 ">
						{title}
					</h3>
					<p className=" text-gray-400 text-justify line-clamp-2 sm:line-clamp-3 text-sm sm:text-md leading-tight tracking-wide    ">
						{description}
					</p>

					<div className="border mt-1 sm:mt-2  pb-1 sm:pb-2 border-t-0 border-s-0 border-e-0  border-b-gray-400 flex justify-between items-center  align-middle ">
						<div className=" flex   text-orange-400">
							<Rating stars={stars} rate={rate} />
						</div>
						<p className=" text-xs  sm:text-sm text-gray-700  font-medium ">
							({rate}/{count}){" "}
						</p>
					</div>

					<div className="flex justify-between mt-1 sm:flex-col ">
						<h4 className=" mt-1 text-xs text-gray-800 font-medium sm:text-lg sm:mt-2 ">
							$ {price.toFixed(2)}
						</h4>

						<button
							disabled={added}
							onClick={toggleCart}
							className={` ${
								added && "pointer-events-none bg-gray-500 text-white"
							}  border duration-100 active:scale-90  text-xs  sm:text-lg  font-medium border-gray-500    hover:duration-200 hover:bg-gray-200  w-18 sm:w-full text-center p-1 rounded-sm `}>
							{added ? "Added" : "Add To Cart"}
						</button>
					</div>
				</div>
			</div>

			{isAnimate && (
				<AnimatedImage setisAnimate={setisAnimate} src={image} info={info} />
			)}
		</div>
	);
};

export default Product;
