/** @format */

import React from "react";
import { Facebook, Instagram, Mail, Twitter } from "react-feather";
import Container from "./Container";

const Footer = () => {
	return (
		<div>
			<div className=" bg-neutral-300  py-1  flex align-middle flex-col items-center justify-center  w-full fixed bottom-0  h-15 rounded-sm  ">
				<div className="flex align-middle items-center gap-2">
					<a href="https://www.facebook.com/profile.php?id=100077023871140&mibextid=LQQJ4d">
						<Facebook className=" border border-gray-600  cursor-pointer hover:bg-gray-400 hover:duration-200   text-gray-800 h-7 w-7 p-1 rounded-full " />
					</a>
					<a href="https://www.instagram.com/vik83124?igsh=MWdtMmphc3hodjBucg%3D%3D&utm_source=qr">
						<Instagram className=" border border-gray-600  cursor-pointer hover:bg-gray-400 hover:duration-200   text-gray-800 h-7 w-7 p-1 rounded-full " />
					</a>
					<a href="https://twitter.com/">
						<Twitter className=" border border-gray-600  cursor-pointer hover:bg-gray-400 hover:duration-200   text-gray-800 h-7 w-7 p-1 rounded-full " />
					</a>
					<a href="mailto:pthuya381@gmail.com">
						<Mail className=" border border-gray-600  cursor-pointer hover:bg-gray-400 hover:duration-200   text-gray-800 h-7 w-7 p-1 rounded-full " />
					</a>
				</div>

				<p className="text-gray-900  text-sm ">
					@Copyright. All rights reserved.
				</p>
			</div>
		</div>
	);
};

export default Footer;
