import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import { gql, InMemoryCache, useQuery } from "@apollo/client";

const IS_LOGGED_IN = gql`
	query IsUserLoggedIn {
		isLoggedIn @client
	}
`;
export const cache = new InMemoryCache();

cache.writeQuery({
	query: IS_LOGGED_IN,
	data: {
		isLoggedIn: !!localStorage.getItem("token"),
	},
});

const App = () => {
	const { data } = useQuery(IS_LOGGED_IN);

	return (
		<div className='app'>
			<Router>
				{data.isLoggedIn ? (
					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/user' component={Profile} />
						<Redirect to='/' />
					</Switch>
				) : (
					<Switch>
						<Route exact path='/login' component={Login} />
						<Route exact path='/register' component={Register} />
						<Redirect to='/login' />
					</Switch>
				)}
			</Router>
		</div>
	);
};

export default App;
