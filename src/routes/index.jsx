import { Route, Switch } from "react-router-dom";
import Register from "../pages/Register";
import Leads from "../pages/Leads";

const Router = () => (
    <Switch>
        <Route exact path="/" component={() => <Leads />} />
        <Route path="/register" component={() => <Register />} />
    </Switch>
);

export default Router;
