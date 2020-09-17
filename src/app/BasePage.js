import React, { Suspense, lazy } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { LayoutSplashScreen, ContentRoute } from "../_metronic/layout";
import { MyPage } from "./pages/MyPage";
import DashboardPage from "./pages/DashboardPage";
import Sender from '../_metronic/_partials/sender';
import Courier from '../_metronic/_partials/couriers';
import ShipmentHistory from '../_metronic/_partials/shipmentHistory';




export default function BasePage() {
  // useEffect(() => {
  //   console.log('Base page');
  // }, []) // [] - is required if you need only one call
  // https://reactjs.org/docs/hooks-reference.html#useeffect
  console.log("call dashboarsd")

  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        {
          /* Redirect from root URL to /dashboard. */
          <Redirect exact from="/" to="/dashboard" />
        }
        <ContentRoute path="/dashboard" component={DashboardPage} />
        <ContentRoute path="/sender" component={Sender} />
        <ContentRoute path="/couriers" component={Courier} />
        <ContentRoute path="/history" component={ShipmentHistory} />
        <ContentRoute path="/my-page" component={MyPage} />

        <Redirect to="error/error-v1" />
      </Switch>
    </Suspense>
  );
}
