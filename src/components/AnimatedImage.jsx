/** @format */

import React, { useContext, useEffect, useRef } from "react";
import { ShoppingContext } from "../contexts/ShoppingCardContext";

const AnimatedImage = ({ src, info, setisAnimate }) => {
	const { btnAnimate } = useContext(ShoppingContext);
	const imgRef = useRef();

	const styles = {
		width: info.width + "px",
		height: info.height + "px",
		left: info.left + "px",
		top: info.top + "px",
	};

	useEffect(() => {
		const keyframe = [
			{
				top: info.top + "px",
				left: info.left + "px",
				height: info.height + "px",
				width: info.width + "px",
			},
			{
				top: btnAnimate.top + 10 + "px",
				left: btnAnimate.left + 10 + "px",
				height: 20 + "px",
				width: 20 + "px",
				transform: "translateY(-20px)",
				transform: "rotate(360deg)",
			},
		];
		const options = {
			duration: 900,
			iterations: 1,
		};

		const animation = imgRef.current.animate(keyframe, options);
		const run = () => {
			setisAnimate(false);
		};

		animation.addEventListener("finish", run);
	}, []);

	return (
		<img
			src={src}
			ref={imgRef}
			style={styles}
			info={info}
			className=" fixed  z-40   "
		/>
	);
};

export default AnimatedImage;
