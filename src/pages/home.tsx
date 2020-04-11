import { RouteComponentProps } from "@reach/router";
import React from "react";
import { Services } from "./../components/services";
import { About } from "../components/about";

export const Home = (_props: RouteComponentProps) => {
	return (
		<div className="container">
			<About />
			<Services />
		</div>
	);
};
