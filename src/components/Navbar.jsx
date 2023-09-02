import React from "react";
import { PiShoppingCartFill } from "react-icons/pi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
	const { cart } = useSelector((state) => state);

	return (
		<div className="bg-green-500">
			<div className="w-[1100px] h-[80px] mx-auto flex justify-between items-center py-2">
				<Link to="/">
					<div className="flex items-center ">
						<img
							src="/store-logo.png"
							alt="logo"
							className="w-[65px]"
						/>
						<h1 className="ml-6 text-3xl font-bold text-green-950">Shopping Cart</h1>
					</div>
				</Link>
				<div className="flex gap-6 items-center text-white">
					<Link to="/">
						<p className="font-medium text-lg hover:text-green-800 transition-colors duration-200">
							Home
						</p>
					</Link>
					<Link to="/cart">
						<div className="relative">
							<PiShoppingCartFill
								size={30}
								className="hover:text-green-800 transition-colors duration-200"
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
