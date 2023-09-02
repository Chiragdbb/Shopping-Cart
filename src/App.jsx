import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import { Route, Routes } from "react-router";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";

function App() {
	return (
		<div className="font-poppins">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/cart" element={<Cart />} />
			</Routes>

			<Toaster />
		</div>
	);
}

export default App;
