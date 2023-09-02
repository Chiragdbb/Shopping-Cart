import React from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/slices/CartSlice";

const Card = ({ data }) => {
	const { cart } = useSelector((state) => state);
	const dispatch = useDispatch();

	function addHandler() {
		dispatch(add(data));
		toast.success("Added to Cart!");
	}

	function removeHandler() {
		dispatch(remove(data.id));
		toast.error("Item Removed from Cart!");
	}

	return (
		<div
			className="w-[260px] py-4 px-4 shadow-lg rounded-xl bg-white flex flex-col gap-y-2 justify-between
        hover:scale-110 hover:shadow-2xl hover:cursor-pointer transition-transform duration-500 ease-out group"
		>
			<h2 className="text-center mx-auto font-semibold text-gray-800 truncate w-[85%] text-lg ">
				{data.title}
			</h2>
			<p className="text-[10px] w-[70%] mx-auto text-gray-400 ">{`${data.description
				.split(" ")
				.slice(0, 10)
				.join(" ")}...`}</p>
			<img
				src={data.image}
				alt="product"
				className="h-[180px] aspect-square object-contain"
			/>

			<div className="mt-8 flex justify-between items-center">
				<span className="text-green-600 font-semibold">
					${data.price}
				</span>

				{/* cart item basis */}
				{cart.some((val) => val.id === data.id) ? (
					<button
						className="border-2 border-gray-700 font-semibold rounded-full px-3 py-[5px] uppercase text-xs text-gray-700 group-hover:bg-gray-700 group-hover:text-white transition-colors duration-500"
						onClick={removeHandler}
					>
						Remove item
					</button>
				) : (
					<button
						className="border-2 border-gray-700 font-semibold rounded-full px-3 py-[5px] uppercase text-xs text-gray-700 group-hover:bg-gray-700 group-hover:text-white transition-colors duration-500"
						onClick={addHandler}
					>
						Add to Cart
					</button>
				)}
			</div>
		</div>
	);
};

export default Card;
