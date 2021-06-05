import React, { Component } from "react";
import Container from './components/Container';
import AppBar from './components/AppBar';
import ContactsView from './views/ContactsView';
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
                <ContactsView />
                {/* <div className={styles.wrapper}>
                    <h1>Phonebook</h1>
                    <ContactForm /> 
                    <h2>Contacts</h2>
                    <Filter /> 
                    {this.props.isLoading && <h1>Loading...</h1>}
                    <ContactList />
                </div> */}
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