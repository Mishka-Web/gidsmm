import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CatalogPage from "./pages/CatalogPage";
import ReviewsPage from "./pages/ReviewsPage";
import HelpPage from "./pages/HelpPage";
import ContactsPage from "./pages/ContactsPage";
import AccountPage from "./pages/AccountPage";
import ScrollToAnchor from "../utils/ScrollToAnchor";
import RegPage from "./pages/login/RegPage";
import AuthPage from "./pages/login/AuthPage";

export default function Main() {
	ScrollToAnchor();

	return (
		<main className="main">
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/catalog" element={<CatalogPage />} />
				<Route path="/reviews" element={<ReviewsPage />} />
				<Route path="/help" element={<HelpPage />} />
				<Route path="/contacts" element={<ContactsPage />} />
				<Route path="/dashboard" element={<AccountPage />} />
				<Route path="/login/auth" element={<AuthPage />} />
				<Route path="/login/reg" element={<RegPage />} />
			</Routes>
		</main>
	);
}
