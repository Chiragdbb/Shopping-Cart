import React from "react";
import { PiShoppingCartFill } from "react-icons/pi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
	const cart  = useSelector((state) => state.cart.cartItems);

	return (
		<div className="bg-green-500 px-2 md:px-4">
			<div className="max-w-[1100px] h-[65px] md:h-[80px] mx-auto flex justify-between items-center py-2">
				<Link to="/">
					<div className="flex items-center ">
						<img
							src="/store-logo.png"
							alt="logo"
							className="w-[40px] md:w-[65px]"
						/>
						<h1 className="ml-2 md:ml-6 text-lg sm:text-2xl md:text-3xl font-bold text-green-950">Shopping Cart</h1>
					</div>
				</Link>
				<div className="flex gap-3 md:gap-6 items-center text-white">
					<Link to="/">
						<p className="font-medium sm:text-lg hover:text-green-800 transition-colors duration-200">
							Home
						</p>
					</Link>
					<Link to="/cart">
						<div className="relative">
							<PiShoppingCartFill
								className="hover:text-green-800 transition-colors duration-200 text-xl sm:text-2xl"
							/>
							{cart.length !== 0 && (
								<div className="absolute -top-1 -right-1 rounded-full bg-green-700 w-[1.125rem] h-[1.125rem] animate-bounce flex justify-center text-xs items-center">
									{cart.length}
								</div>
							)}
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
