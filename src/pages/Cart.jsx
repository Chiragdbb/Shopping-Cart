import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Cart = () => {
	const { cart } = useSelector((state) => state);
	const [totalAmount, setTotalAmount] = useState(0);

	useEffect(() => {
		setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
	}, [cart]);

	return (
		<div className="min-h-screen bg-gray-50 py-12">
			{cart.length === 0 ? (
				<div className="h-[65vh] w-full flex flex-col justify-center items-center">
					<h4 className="text-xl font-semibold text-gray-700">
						Your cart is empty!
					</h4>
					<Link to="/">
						<button className="bg-green-600 border-2 border-green-600 hover:bg-white hover:text-green-700 transition-colors duration-500 rounded-lg px-10 py-3 text- font-semibold mt-8 text-white uppercase">
							Shop Now
						</button>
					</Link>
				</div>
			) : (
				<div className="w-[1200px] mx-auto flex justify-between">
					<div>
                        {cart.map((post) => (
                            <Product key={post.id} post={post} />
                        ))}
                    </div>
					{/* Cart summary */}
					<div className="w-[480px] bg-white p-6 rounded-xl flex flex-col justify-between">
						<div>
                            <h3 className="font-semibold text-xl uppercase text-green-700">
                                Your cart
                            </h3>
                            <h2 className="font-semibold text-5xl uppercase text-green-700">
                                Summary
                            </h2>
                            <p className="mt-6 font-semibold text-gray-700 text-xl">
                                {`Total Items : `}
                                <span className="text-black font-bold">
                                    {cart.length}
                                </span>
                            </p>
                        </div>
						<div className="w-full self-end">
							<p className="mt-6 font-semibold text-xl text-gray-700">
								{`Total Amount : `}
								<span className="text-black font-bold">
									${totalAmount}
								</span>
							</p>
							<button className="w-full mt-6 py-3 bg-green-700 border-2 border-green-700 font-bold text-white text-xl rounded-md hover:bg-white hover:text-green-700 transition-colors duration-500">
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
