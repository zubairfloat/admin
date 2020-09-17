/**
 * High level router.
 *
 * Note: It's recommended to compose related routes in internal router
 * components (e.g: `src/app/modules/Auth/pages/AuthPage`, `src/app/BasePage`).
 */

import React, { Component } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { Layout } from "../_metronic/layout";
import BasePage from "./BasePage";
import { Logout, AuthPage } from "./modules/Auth";

class Routes extends Component {
    render() {
        const isAuthorized = this.props.isAuthorized
        return (
            <Switch>
                {!isAuthorized ? (
                    /*Render auth page when user at `/auth` and not authorized.*/
                    <Route>
                        <AuthPage />
                    </Route>
                ) : (
                        /*Otherwise redirect to root page (`/`)*/
                        <Redirect from="/auth" to="/" />
                    )}

                <Route path="/logout" component={Logout} />


                {!isAuthorized ? (
                    /*Redirect to `/auth` when user is not authorized*/
                    <Redirect to="/auth/login" />
                ) : (
                        <Layout>
                            <BasePage />
                        </Layout>
                    )}
            </Switch>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthorized: state.auth.isAuthenticated
    }
}

export default connect(mapStateToProps)(Routes)