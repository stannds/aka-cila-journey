import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import MyTulip from "./MyTulip.jsx";
import PuzzlePage from "./PuzzlePage.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter basename="/aka-cila-journey">
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/:slug" element={<PuzzlePage />} />
				<Route path="/my-tulip" element={<MyTulip />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>,
);
