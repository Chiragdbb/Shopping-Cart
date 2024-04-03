import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Cart = () => {
	const cart = useSelector((state) => state.cart.cartItems);
	const [totalAmount, setTotalAmount] = useState(0);

	useEffect(() => {
		setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
	}, [cart]);

	return (
		<div className="min-h-screen bg-gray-50 py-6 lg:py-12 px-4">
			{cart.length === 0 ? (
				<div className="h-[65vh] w-full flex flex-col justify-center items-center">
					<h4 className="text-lg md:text-xl font-semibold text-gray-700">
						Your cart is empty!
					</h4>
					<Link to="/">
						<button className="bg-green-600 border-2 border-green-600 hover:bg-white hover:text-green-700 transition-colors duration-500 rounded-lg px-7 py-2 md:px-10  md:py-3 text-sm md:text-base font-semibold mt-8 text-white uppercase">
							Shop Now
						</button>
					</Link>
				</div>
			) : (
				<div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-4 gap-y-8 justify-between">
					<div className=" w-[90vw] lg:w-[58%] mx-auto lg:mx-0">
                        {cart.map((post) => (
                            <Product key={post.id} post={post} />
                        ))}
                    </div>
					{/* Cart summary */}
					<div className="w-[90vw] lg:w-[40%] mx-auto lg:mx-0 bg-white p-6 rounded-xl flex flex-col justify-between">
						<div>
                            <h3 className="font-semibold text-base sm:text-xl uppercase text-green-700">
                                Your cart
                            </h3>
                            <h2 className="font-semibold text-3xl sm:text-5xl uppercase text-green-700">
                                Summary
                            </h2>
                            <p className="mt-4 sm:mt-6 font-semibold text-gray-700 text-base sm:text-xl">
                                {`Total Items : `}
                                <span className="text-black font-bold">
                                    {cart.length}
                                </span>
                            </p>
                        </div>
						<div className="w-full self-end">
							<p className="mt-4 sm:mt-6 font-semibold text-base sm:text-xl text-gray-700">
								{`Total Amount : `}
								<span className="text-black font-bold">
									${totalAmount.toFixed(2)}
								</span>
							</p>
							<button className="w-full mt-6 py-3 bg-green-700 border-2 border-green-700 font-bold text-white text-base sm:text-xl rounded-md hover:bg-white hover:text-green-700 transition-colors duration-500">
								Checkout Now
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Cart;
