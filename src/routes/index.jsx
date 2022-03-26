import { Route, Switch } from "react-router-dom";
import Register from "../pages/Register";
import Leads from "../pages/Leads";
import { Redirect } from "react-router-dom";

const LeadsRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={(props) =>
            !!localStorage.getItem("Usuário") ? (
                <Component {...props} />
            ) : (
                <Redirect to="/register" />
            )
        }
    />
);

const Router = () => (
    <Switch>
        <LeadsRoute exact path="/" component={() => <Leads />} />
        <Route path="/register" component={() => <Register />} />
    </Switch>
);

export default Router;
