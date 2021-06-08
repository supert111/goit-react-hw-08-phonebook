import { Component } from "react";
import { connect } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import Container from '../../components/Container';
import styles from './LoginView.module.css';
import { authOperations } from '../../redux/auth';

class LoginView extends Component {
    state = {
        email: '',
        password: '',
    };

    handleChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value });
    };
    
    handleSubmit = e => {
        e.preventDefault();
    
        this.props.onLogin(this.state);
    
        this.setState({ name: '', email: '', password: '' });
    };

    render() {
        return (
            <Container>
                <Form className={styles.form} onSubmit={this.handleSubmit}>

                    <Form.Group className={styles.form_group} controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control 
                            type="email" 
                            placeholder="Enter email" 
                            name="email"
                            onChange={this.handleChange}/>
                        <Form.Text className="text-muted">
                            Please write down your registered email.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className={styles.form_group} controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            type="password" 
                            placeholder="Password" 
                            name="password"
                            onChange={this.handleChange}/>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        )
    }

}

const mapDispatchToProps = {
    onLogin: authOperations.logIn,
}


export default connect(null, mapDispatchToProps)(LoginView);
