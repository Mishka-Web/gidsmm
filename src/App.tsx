import { useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import WebFont from "webfontloader";

function App() {
	useEffect(() => {
		WebFont.load({
			google: {
				families: ["Exo", "Montserrat"],
			},
		});
	}, []);

	return (
		<>
			<Header />
			<Main />
			<Footer />
		</>
	);
}

export default App;
