import React, { FunctionComponent } from "react";
import {
  Route, 
  Redirect,
  RouteProps, 
  RouteComponentProps
} from "react-router-dom";

interface PrivateRouteProps extends RouteProps {
//   component:
//     | React.ComponentType<RouteComponentProps<any>>
//     | React.ComponentType<any>;
    render: (props:any) => any
}

const PrivateRoute: FunctionComponent<PrivateRouteProps> = ({
  render: Component,
  ...rest
}) => {
    let isAuthenticated = localStorage.getItem('bearer-token') ? true : false;
    console.log({isAuthenticated});
    return (
        <Route
            {...rest}
            render={props =>
                isAuthenticated ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={{pathname: "/login"}}/>
                )
            }
        />
    );
};

export default PrivateRoute;