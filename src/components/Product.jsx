import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../redux/slices/CartSlice";
import { toast } from "react-hot-toast";

const Product = ({ post }) => {
	const cart = useSelector((state) => state.cart.cartItems);
	const dispatch = useDispatch();
	const match = matchMedia("(min-width: 768px)");

	const removeHandler = () => {
		dispatch(remove(post.id));
		match.matches
			? toast.error("Item Removed from Cart!")
			: toast.error("Item Removed from Cart!", {
					style: {
						scale: "0.8",
					},
			});
	};

	return (
		<div className="w-full">
			<div className="w-full flex flex-col sm:flex-row gap-y-8 justify-between p-6 bg-white rounded-xl">
				<img
					src={post.image}
					alt="product"
					className="mx-auto sm:mx-0 w-[30%] object-contain aspect"
				/>
				<div className="w-full sm:w-[65%]">
					<h2 className="font-semibold text-gray-700 text-lg sm:text-xl">
						{post.title}
					</h2>
					<p className="mt-4 text-xs sm:text-base">{`${post.description
						.split(" ")
						.slice(0, 15)
						.join(" ")}...`}</p>
					<div className="flex justify-between items-center mt-6 sm:mt-8">
						<span className="text-green-600 font-semibold">
							${post.price}
						</span>
						<button
							onClick={removeHandler}
							className="p-2 sm:p-3 bg-red-200 hover:bg-red-500 text-red-800 hover:text-white rounded-full"
						>
							<MdDelete className="text-base sm:text-xl" />
						</button>
					</div>
				</div>
			</div>
			{((post.id !== cart[0].id && cart.length <= 1) ||
				post.id !== cart[cart.length - 1].id) && (
				<div className="bg-gray-300 my-6 h-[1.75px] w-full"></div>
			)}
		</div>
	);
};

export default Product;
