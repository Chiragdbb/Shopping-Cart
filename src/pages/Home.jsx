import React, { useEffect, useState } from "react";
import Card from "../components/Card";

const Home = () => {
	const API_URL = "https://fakestoreapi.com/products";
	const [productsData, setProductsData] = useState([]);
	const [loading, setLoading] = useState(false);
	async function fetchData() {
		setLoading(true);
		try {
			const res = await fetch(API_URL);
			const data = await res.json();
			setProductsData(data);
		} catch (error) {
			console.log("Something went wrong!");
			setProductsData([]);
		}
		setLoading(false);
	}

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className="bg-gray-50 min-h-screen py-12">
            <div className="w-[1100px] mx-auto">
                {loading ? (
                    <div className="h-[60vh] flex justify-center items-center">
                        <h2 className="text-2xl font-semibold ">Loading...</h2>
                    </div>
                ) : (
                    <div className="flex flex-wrap justify-between gap-y-8">
                        {productsData.map((productData) => (
                            <Card key={productData.id} data={productData} />
                        ))}
                    </div>
                )}
            </div>
        </div>
	);
};

export default Home;
