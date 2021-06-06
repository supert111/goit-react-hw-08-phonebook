import React, { Component } from "react";
import { Switch, Route } from 'react-router-dom';
import AppBar from './components/AppBar';
import HomeView from './views/HomeView/index';
import ContactsView from './views/ContactsView';
import RegisterView from './views/RegisterView/index';
import LoginView from "./views/LoginView/index";
import 'bootstrap/dist/css/bootstrap.min.css';
import routes from './components/routes';
// import ContactList from "./components/ContactList";
// import Filter from "./components/Filter";
//import { fetchContacts, getIsLoading } from './redux/contacts';
//import styles from "./App.module.css"

class App extends Component { 

    // state = {};

    // componentDidMount() {
    //     this.props.fetchContact();
    // }

    // handleFilter = (element) => {
    //     const { value } = element.target;
    //     this.setState ({ filter: value });  
    // };

    render() {
        return (
            <>
                <AppBar />
            
                <Switch>
                    <Route exact path={routes.home} component={HomeView} />
                    <Route path={routes.contacts} component={ContactsView} />
                    <Route path={routes.register} component={RegisterView} />
                    <Route path={routes.login} component={LoginView} />
                </Switch>
            </>
        )
    }
}
  
// const mapStateToProps = state => ({
//     isLoading: getIsLoading(state),
// });

// const mapDispatchToProps = dispatch => ({
//     fetchContact: () => dispatch(fetchContacts()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;