/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ShoppingCardContext from "./contexts/ShoppingCardContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<ShoppingCardContext>
		<App />
	</ShoppingCardContext>
);
