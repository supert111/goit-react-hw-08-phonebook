import React, { Component, Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import AppBar from './components/AppBar';
//import LoginView from "./views/LoginView/index";
import 'bootstrap/dist/css/bootstrap.min.css';
import routes from './components/routes';
import {authOperations} from './redux/auth';
import { connect } from 'react-redux';
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const ContactsView = lazy(() => import('./views/ContactsView'));
const NotFoundView = lazy(() => 
    import('./views/NotFoundView' /* webpackChunkName: "page-404-view" */)
);

class App extends Component { 

    componentDidMount() {
        this.props.onGetCurretnUser();
    }

    render() {
        return (
            <>
                <AppBar />
            
                <Suspense fallback={<p>Loading...</p>}>
                    <Switch>
                        <PublicRoute exact path={routes.home} component={HomeView} />
                        <PrivateRoute path={routes.contacts} component={ContactsView} redirectTo={routes.login}/>
                        <PublicRoute path={routes.register} restricted component={RegisterView} redirectTo={routes.contacts}/>
                        <PublicRoute path={routes.login} restricted component={LoginView} redirectTo={routes.contacts}/>
                        <PublicRoute component={NotFoundView} />
                    </Switch>
                </Suspense>
            </>
        )
    }
}
  
const mapDispatchToProps = {
    onGetCurretnUser: authOperations.getCurrentUser,
  };

export default connect(null, mapDispatchToProps)(App);
