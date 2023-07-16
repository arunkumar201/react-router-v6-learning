import { Routes, Route } from "react-router-dom";
function App() {
	return (
		<>
			<Routes>
				<Route
					path="/"
					element={<p>hello world</p>}
					errorElement={<p>Error got</p>}
					loader={<p>Loading....</p>}
				/>
				<Route path="*" element={<h1>Page Not Found</h1>}/>
			</Routes>
		</>
	);
}

export default App;
