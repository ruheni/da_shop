import React from "react";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Router } from "@reach/router";
import { Home } from "./pages/home";
import { Cart } from "./pages/cart";
import Product from "./pages/_product";
import { Men } from "./pages/men";
import { Women } from "./pages/women";
import { Products } from "./pages/products";

const App: React.FC = () => {
	return (
		<div>
			<Header />
			<Router className="container mx-auto">
				<Home path="/" />
				<Products path="products" />
				<Men path="men" />
				<Women path="women" />
				<Cart path="cart" />
				<Product path=":productId" />
			</Router>
			<Footer />
		</div>
	);
};

export default App;
