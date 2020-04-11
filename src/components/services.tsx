import React from "react";
import deliveryTruck from "../assets/delivery-truck.svg";
import instantSupport from "../assets/instant_support.svg";
import secureData from "../assets/secure_data.svg";

interface ServiceProps {
	title?: string;
	description?: string;
	image?: string;
}

export const Services: React.FC<ServiceProps> = () => {
	const services: any[] = [
		{
			title: "24/4 CUSTOMER SERVICE",
			description: "Call us any time",
			image: instantSupport,
		},
		{
			title: "FREE SHIPPING",
			description: "Delivery worldwide in a week",
			image: deliveryTruck,
		},
		{
			title: "SHOP SECURELY",
			description: "We keep connections safe, fun and secure",
			image: secureData,
		},
	];

	return (
		<>
			<p className="font-semibold text-center lg:text-4xl text-2xl m-4">
				We offer kick-ass services
			</p>
			<div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
				{services.map((service, i) => (
					<Service
						key={i}
						title={service.title}
						description={service.description}
						image={service.image}
					/>
				))}
			</div>
		</>
	);
};

const Service = (props: ServiceProps) => {
	return (
		<div className="max-w-sm rounded overflow-hidden shadow-lg m-8">
			<img
				className="w-full max-w-xs p-4"
				src={props.image}
				alt={props.title}
			/>
			<div className="px-6 py-4">
				<div className="font-bold text-xl mb-2 text-center">
					{props.title}
				</div>
				<p className="text-gray-700 text-base text-center">
					{props.description}
				</p>
			</div>
		</div>
	);
};
