import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ component: Component, authenticate, deauthenticate, authenticated, logout, ...rest }) {
    return (
        <Route
            {...rest}
            render={props =>
                localStorage.getItem("authenticated") ? (
                    <Component {...props} logout={logout} />
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: props.location }
                            }}
                        />
                    )
            }
        />
    );
}

export default PrivateRoute;