import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import App from "./App";

import { ApolloClient, ApolloProvider } from "@apollo/client";
import { cache } from "./App";

const client = new ApolloClient({
	uri: "http://localhost:5000/graphql",
	cache,
});

ReactDOM.render(
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>,
	document.getElementById("root")
);
