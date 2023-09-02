import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../redux/slices/CartSlice";
import { toast } from "react-hot-toast";

const Product = ({ post }) => {
	const { cart } = useSelector((state) => state);
	const dispatch = useDispatch();

	const removeHandler = () => {
		dispatch(remove(post.id));
		toast.error("Item removed from cart");
	};

	return (
		<div>
			<div className="w-[660px] flex justify-between p-6 bg-white rounded-xl">
				<img
					src={post.image}
					alt="product"
					className="w-[30%] object-contain aspect"
				/>
				<div className="w-[65%]">
					<h2 className=" font-semibold text-gray-700 text-lg">
						{post.title}
					</h2>
					<p className="mt-4">{`${post.description
						.split(" ")
						.slice(0, 10)
						.join(" ")}...`}</p>
					<div className="flex justify-between items-center mt-8">
						<span className="text-green-600 font-semibold">
							${post.price}
						</span>
						<button
							onClick={removeHandler}
							className="p-3 bg-red-200 hover:bg-red-500 text-red-800 hover:text-white rounded-full"
						>
							<MdDelete size={18} />
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
