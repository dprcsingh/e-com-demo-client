import React from "react";
import { Route, Redirect } from "react-router-dom";

const PublicRoute = (props) => {
	const { component: Component, ...rest } = props;
	return <Route component={Component} {...rest} />
}

export default PublicRoute;