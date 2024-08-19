import { Route, Routes as ReactRoutes } from "react-router-dom";
import HomePage from "./Home";
import StatsPage from "./Stats";
import { Page } from "../types";

const Routes = () => {
  return (
    <ReactRoutes>
      <Route path={Page.Home} element={<HomePage />} />
      <Route path={Page.Stats} element={<StatsPage />} />
    </ReactRoutes>
  );
};

export default Routes;
