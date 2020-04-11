import React from "react";
import happyCustomer from "../assets/happy-customer.jpg";

export const About: React.FC = () => {
	return (
		<div className="lg:flex m-8 max-h-screen">
			<div className="m-4 justify-center align-middle">
				<p className="text-3xl lg:text-4xl m-4 font-bold">
					We value our customers
				</p>
				<p className="lg:text-3xl text-2xl">
					"I like to listen. I have learned a great deal from
					listening carefully. Most people never listen."
				</p>
				<p className="italic text-base">
					{" "}
					Ernest Hemingway, Author and Journalist
				</p>
			</div>
			<div>
				<img
					src={happyCustomer}
					alt="happy customer"
					className="max-w-full min-h-full min-w-full max-w-md"
				/>
			</div>
		</div>
	);
};
