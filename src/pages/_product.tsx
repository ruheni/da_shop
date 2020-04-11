import React from "react";
import { RouteComponentProps } from "@reach/router";

interface ProductProps extends RouteComponentProps {
	productId?: string;
}

export const Product = (props: ProductProps) => {
	return (
		<div>
			Hello World, Product page here, <br /> with the id:{" "}
			{props.productId}
		</div>
	);
};

export default Product;
