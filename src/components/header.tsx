import { Link } from "@reach/router";
import React from "react";

export const Header: React.FC = () => {
	return (
		<header className="container mx-auto">
			<nav className="text-blue-900 text-2xl lg:text-5xl font-bold text-center m-6 md:m-16 justify-center align-center hover:text-blue-700">
				<Link to="/">Adam's Tiny Store</Link>
			</nav>
			<div
				className="text-gray-600 text-base text-center p-2 md:m-6 lg:m-4 xl:m-auto"
				style={{
					borderTop: "1px solid gray",
					borderBottom: "1px solid gray",
				}}
			>
				|
				<Link to="products" className="m-4 hover:text-orange-800">
					ALL
				</Link>
				|
				<Link to="men" className="m-4 hover:text-orange-800">
					MEN
				</Link>
				|
				<Link to="women" className="m-4 hover:text-orange-800">
					WOMEN
				</Link>
				|{" "}
				<Link to="cart" className="m-4 hover:text-orange-800">
					CART
				</Link>
				|
			</div>
		</header>
	);
};
