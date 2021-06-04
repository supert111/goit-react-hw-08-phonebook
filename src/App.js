import React, { Component } from "react";
import { connect } from 'react-redux';
import AppBar from './components/AppBar';
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";
import { fetchContacts, getIsLoading } from './redux/contacts';
import styles from "./App.module.css"

class App extends Component { 

    state = {};

    componentDidMount() {
        this.props.fetchContact();
    }

    handleFilter = (element) => {
        const { value } = element.target;
        this.setState ({ filter: value });  
    };

    render() {
        return (
            <div className={styles.container}>
                <AppBar />
                <div className={styles.wrapper}>
                    <h1>Phonebook</h1>
                    <ContactForm /> 
                    <h2>Contacts</h2>
                    <Filter /> 
                    {this.props.isLoading && <h1>Loading...</h1>}
                    <ContactList />
                </div>
            </div>
        )
    }
}
  
const mapStateToProps = state => ({
    isLoading: getIsLoading(state),
});

const mapDispatchToProps = dispatch => ({
    fetchContact: () => dispatch(fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);