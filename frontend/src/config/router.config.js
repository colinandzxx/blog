import React from "react";
import { renderRoutes } from "react-router-config";
import { Redirect } from "react-router-dom";
import { Base, Home, Notebook, NotFound } from "../pages";

const Root = ({ route }) => <Base>{renderRoutes(route.routes)}</Base>;

const routes = [
  {
    component: Root,
    routes: [
      {
        path: "/",
        exact: true,
        component: Home
      },
      {
        path: "/notebook",
        component: Notebook
      },
      {
        path: "/404",
        component: NotFound
      },
      {
        path: "/home",
        render: () => <Redirect to={"/"} />
      },
      {
        path: "*",
        render: () => <Redirect to={"/404"} />
      }
    ]
  }
];

const RootRoutes = renderRoutes(routes);
export default RootRoutes;
