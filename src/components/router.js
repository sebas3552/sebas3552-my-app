import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./../App";
import NotFound from "./notFound";
import Dish from "./dish";
import Dishes from "./dishes";
import Countries from "./countries"

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App}></Route>
            <Route exact path="/platillos" component={Dishes}></Route>
            <Route exact path="/platillos/:name" component={Dish}></Route>
            <Route exact path="/paises" component={Countries}></Route>
            <Route component={NotFound}></Route>
        </Switch>
    </BrowserRouter>
);

export default Router;