import React, { Component } from "react";
import { Switch, Route } from 'react-router-dom';
import Container from './components/Container';
import AppBar from './components/AppBar';
import ContactsView from './views/ContactsView';
import RegisterView from './views/RegisterView';
import routes from './components/routes';
// import ContactForm from "./components/ContactForm";
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
            <Container>
                <AppBar />
                {/* <ContactsView /> */}
            
                <Switch>
                    {/* <Route exact path="/" component={HomeView} /> */}
                    <Route path={routes.register} component={RegisterView} />
                    {/* <Route path="/login" component={LoginView} /> */}
                    <Route path={routes.contacts} component={ContactsView} />
                </Switch>
            </Container>
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